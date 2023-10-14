import { configureStore } from "@reduxjs/toolkit";
//configureStore is replacement for combineReducers+composeDevtools+middleware in redux
import userReducer from '../src/Sevices/userSlice'
import cartReducer from "./Sevices/cartSlice";
const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
    }
})

export default store