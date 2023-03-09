import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProductStock } from '@slices/productListSlice.js';
import { addToCart } from '../../store/slices/cartSlice';

function useProductStore(){
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
    
    const state = {
        categories,
        productsFiltered
    }

    const methods = {
        onSearchItemByName,
        searchByName,
        onSearchItemByCategory,
        searchByCategory,
        getQuantitySelected,
        handleClick
    }
    return {
        state,
        methods
    }
}

export default useProductStore;