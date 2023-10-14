import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload)
        },
        deleteItem(state, action) {
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload)
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
            if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action)

        },
        clearCart(state) {
            state.cart = []
        }
    }
})

export const { addItem, deleteItem, increaseItemsQuantity, decreaseItemsQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer

export const totalQuantity = (state) => {
    return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
}

export const totalPrice = (state) => {
    return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)
}

export const getCart = (state) => {
    return state.cart.cart
}
