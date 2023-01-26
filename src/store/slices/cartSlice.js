import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    totalOrderProducts: 0,
    totalOrderPrice: 0
}

const reducers = {
    addToCart: (state, action) => {
        const {
            name,
            unitPrice
        } = action.payload;

        const product = state.cart.find( it => it.name === name);

        if (product) {
            product.quantity += 1;
            product.totalPrice += unitPrice;
        } else {
            const newProduct = {
                name: name,
                quantity: 1,
                unitPrice: unitPrice,
                totalPrice: unitPrice
            }

            state.cart.push(newProduct);
        }

        state.totalOrderProducts += 1;
        state.totalOrderPrice += unitPrice;
        console.log(name, unitPrice);
    },
    clearCart: (state) => {
        state.cart = [];
        state.totalOrderProducts = 0;
        state.totalOrderPrice = 0;
    }
}

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers
})

export const {
    addToCart,
    clearCart
} = cartSlice.actions
