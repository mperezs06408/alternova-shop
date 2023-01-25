import { configureStore } from "@reduxjs/toolkit";
import { productListSlice } from "./slices/productListSlice";

export const store = configureStore({
    reducer: {
        productList: productListSlice.reducer
    }
})