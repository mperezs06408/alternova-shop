import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setProduct } from '@slices/productListSlice.js';
import { addToCart } from '../../store/slices/cartSlice';
import DummyImg from '@assets/dummy_img.jpg';

function ProductStore() {
    const {products, categories} = useSelector( state => state.productList);
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

    const handleClick = (name, stock, unitPrice) => {
        console.log(name, stock);

        dispatch( setProduct({name:name, value: stock - 1}) )
        dispatch( addToCart({name:name, unitPrice: unitPrice}) )
    }


    return(
        <div>
            <h1>Products list</h1>
            <button onClick={onNavigateToCart}>Go to cart</button>
            <div>
                <input placeholder='Search by name' name='searchByName' value={searchByName} onChange={(e) => onSearchItemByName(e.target.value)} />
                <select name='searchByCategory' onChange={(e) => onSearchItemByCategory(e.target.value)} value={searchByCategory}>
                    <option value=''>Seleccione un valor</option>
                    {
                        categories.map((it) => (
                            <option key={it} value={it}>{it}</option>
                        ))
                    }
                </select>
            </div>
            <ul>
                {
                    productsFiltered.map( it => (
                        <li key={it.name}>
                            {/* <img src={DummyImg} alt="Cart img for test" /> */}
                            <h2>{it.name}</h2>
                            <h3>Stock: {it.stock}</h3>
                            <button
                                onClick={() => handleClick(it.name, it.stock, it.unit_price)}
                                disabled={it.stock === 0}
                            >Add to cart</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductStore;