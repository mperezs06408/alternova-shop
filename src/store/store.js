import { configureStore } from "@reduxjs/toolkit";
import { productListSlice } from "./slices/productListSlice";
import { cartSlice } from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        productList: productListSlice.reducer,
        cart: cartSlice.reducer
    }
})