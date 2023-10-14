import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: [{
        pizzaId: 123,
        name: "dominos",
        quantity: 2,
        unitPrice: 200,
        totalPrice: 400
    }]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload)
        },
        deleteItem(state, action) {
            state.cart.filter(item => item.pizzaId !== action.payload)
        },
        increaseItemsQuantity(state, action) {
            const item = state.cart.find(item => item.pizzaId === action.payload)
            item.quantity++
            item.totalPrice = item.quantity * item.unitPrice
        },
        decreaseItemsQuantity(state, action) {
            const item = state.cart.find(item => item.pizzaId === action.payload)
            item.quantity--
            item.totalPrice = item.quantity * item.unitPrice
        },
        clearCart(state, action) {
            state.cart = []
        }
    }
})

export const { addItem, deleteItem, increaseItemsQuantity, decreaseItemsQuantity, clearCart } = cartSlice.actions
export default cartSlice