import { setProducts } from '../slices/productListSlice';
import { clearCart } from '../slices/cartSlice';
import axios from 'axios';
// import fs from 'vite-plugin-fs/browser';
import { v4 as uniqueId } from 'uuid';
import jsonStringifyDate from 'json-stringify-date';

const SERVER = "http://localhost:3000"
const SOURCE_ENTITY = "/products"
const DESTINY_ENTITY = "/orders"


const axiosInstance = axios.create({
    baseURL: SERVER,
    headers:{
        'Content-Type': 'application/json'
    }
})

export const getProductsList = () => {
    return async(dispatch, state) => {
        let request;
        let data;
        try {
            request = await axiosInstance.get(SOURCE_ENTITY);
            data = request.data;
        } catch(e){
            request = await fetch('./db.json');
            const response = await request.json();
            
            data = response.products
        }

        let categories = []

        data.map( it => {
            if (!categories.find(cat => cat === it.type)){
                categories.push(it.type)
            } 
        })

        dispatch( setProducts({products: data, categories: categories}) );
    }
}

export const createOrder = () => {
    return async(dispatch, state) => {
        const {
            cart
        } = state();

        console.log(cart, 'cart')
        const date = new Date();
        const id = uniqueId();

        const obj = {
            id: id,
            date: jsonStringifyDate.stringify(date).replaceAll('\"', ''),
            total_order_products: cart.totalOrderProducts,
            products: cart.cart,
            total_order_price: cart.totalOrderPrice
        }

        /**For gh-pages */
        const file = await new Blob([JSON.stringify(obj)], {type: 'application/json'});

        const element = document.createElement('a');
        element.href = URL.createObjectURL(file);

        element.download = `factura__${id}.json`;

        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        /************* */
        /** to run in dev */
        // const file = await fs.writeFile(`src/api/__${id}.json`, JSON.stringify(obj))
        // const saveOrder = await axiosInstance.post(DESTINY_ENTITY, obj)
        /*************** */

        dispatch( clearCart() )

        return {
            idOrder: id
        }
    }
}