import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    categories: []
}

const reducers = {
    setProducts: (state, action) => {
        const {
            products,
            categories
        } = action.payload

        state.products = products
        state.categories = categories
    },
    setProduct: (state, action) => {
        const {
            products
        } = state
        const {
            name,
            value
        } = action.payload;

        const product = products.find( it => it.name == name);

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