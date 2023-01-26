import { setProducts } from '../slices/productListSlice';
import { clearCart } from '../slices/cartSlice';
import fs from 'vite-plugin-fs/browser';
import { v4 as uniqueId } from 'uuid';
import jsonStringifyDate from 'json-stringify-date';

const SERVER = "http://localhost:3000"
const SOURCE_ENTITY = "/products"
const DESTINY_ENTITY = "/orders"

export const getProductsList = () => {
    return async(dispatch, state) => {
        const request = await fetch(`${SERVER}${SOURCE_ENTITY}`);
        const response = await request.json();

        dispatch( setProducts(response) );
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

        const file = await fs.writeFile(`src/api/__${id}.json`, JSON.stringify(obj))

        const saveOrder = await fetch(`${SERVER}${DESTINY_ENTITY}`, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        dispatch( clearCart() )
    }
}