import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setProduct } from '@slices/productListSlice.js';
import { addToCart } from '../../store/slices/cartSlice';
import Button from '@atoms/Button';
import Input from '@atoms/Input';
import Select from '@atoms/Select';
import Filters from '@molecules/Filters';
import ProductList from '@molecules/ProductList';
import ProductCard from '@molecules/ProductCard';
import { ReactComponent as EmptyWallet } from '@assets/empty-wallet.svg';
import "./ProductStore.scss";

function ProductStore() {
    const {products, categories} = useSelector( state => state.productList);
    const {cart} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const [filteredItems, setFilteredItems] = useState({
        productsFiltered: [],
        searchByName: '',
        searchByCategory: ''
    })
    const {
        productsFiltered,
        searchByName,
        searchByCategory,
    } = filteredItems
    const navigation = useNavigate();

    useEffect(() => {        
        setFilteredItems({
            ...filteredItems,
            productsFiltered: products
        })
    }, [products]);
    useEffect(()=>{
        let result = products;
        result = filterByName(products);
        result = filterByCategory(result);

        setFilteredItems({
            ...filteredItems,
            productsFiltered: result
        })
    },[searchByName,searchByCategory])

    const filterByName = (array) => {
        return array.filter((item) => {
            const name = item.name.toLowerCase();

            return name.includes(searchByName.toLowerCase());
        })
    }
    const filterByCategory = (array) => {
        if (searchByCategory !== ''){
            return array.filter( (item) => item.type === searchByCategory);
        }
        return array
    }
    const onNavigateToCart = () => {
        navigation('/cart');
    }
    const onSearchItemByName = (value) => {
        setFilteredItems({
            ...filteredItems,
            searchByName: value
        })
    }
    const onSearchItemByCategory = (value) => {
        setFilteredItems({
            ...filteredItems,
            searchByCategory: value
        })
    }
    const getQuantitySelected = (name) => {
        const item = cart.find( it => it.name === name);

        if (item?.quantity) {
            return item.quantity
        }
        return 0
    }
    const handleClick = (name, stock, unitPrice) => {
        console.log(name, stock);

        dispatch( setProduct({name:name, value: stock - 1}) )
        dispatch( addToCart({name:name, unitPrice: unitPrice}) )
    }


    return(
        <div className='store'>
            <h1 className='store__title'>Shopping store</h1>
            <Filters>
                <Input 
                    name="searchByName"
                    placeholder="Search by name"
                    handleChange={onSearchItemByName}
                    value={searchByName}
                />
                <Select 
                    defaultLabel="Select a category"
                    name="searchByCategory"
                    handleChange={onSearchItemByCategory}
                    value={searchByCategory}
                    options={categories}
                />                
            </Filters>
            <ProductList>
                {
                    productsFiltered.map( it => (
                        <ProductCard
                            key={it.name}
                            name={it.name}
                            stock={it.stock}
                            price={it.unit_price}
                            quantitySelected={() => getQuantitySelected(it.name) }
                            buttons={
                                () => (
                                    <Button
                                        label={it.stock === 0? "Out of stock":"Add to cart"}  
                                        handleClick={() => handleClick(it.name, it.stock, it.unit_price)}
                                        disabled={it.stock === 0}  
                                    />
                                )
                            }
                        />
                    ))
                }
            </ProductList>
            {
                productsFiltered.length === 0
                &&
                <div className='store__empty'>
                    <EmptyWallet />
                    <p>There's no products available right now :(.</p>
                </div>
            }
        </div>
    )
}

export default ProductStore;