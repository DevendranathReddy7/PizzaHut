import { configureStore } from "@reduxjs/toolkit";
//configureStore is replacement for combineReducers+composeDevtools+middleware in redux
import userReducer from '../src/Sevices/userSlice'
const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export default store