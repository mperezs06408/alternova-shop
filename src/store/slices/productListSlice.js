import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const reducers = {
    setProducts: (state, action) => {
        console.log(action.payload);

        state.products = action.payload
    },
    setProduct: (state, action) => {
        const {
            name,
            value
        } = action.payload;

        const product = state.products.find( it => it.name == name);

        if (product) {
            product.stock = value;
        }
    }
}

export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers
})

export const {
    setProducts,
    setProduct
} = productListSlice.actions