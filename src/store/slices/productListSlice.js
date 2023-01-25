import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const reducers = {

}

export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers
})

// export const {

// } = productListSlice.actions