import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateProductStock } from '@slices/productListSlice.js';
import { addToCart } from '../../store/slices/cartSlice';
import Button from '@atoms/Button';
import Input from '@atoms/Input';
import Select from '@atoms/Select';
import ErrorWidget from '@atoms/ErrorWidget';
import Filters from '@molecules/Filters';
import ProductList from '@organisms/ProductList';
import ProductCard from '@organisms/ProductCard';
import ProductStoreLayout from '@template/ProductStoreLayout';
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

        dispatch( updateProductStock({name:name, value: stock - 1}) )
        dispatch( addToCart({name:name, unitPrice: unitPrice}) )
    }
    console.log('re-render');

    return(
        <ProductStoreLayout>
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
                <ErrorWidget />
            }
        </ProductStoreLayout>
    )
}

export default ProductStore;