import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlide';
import userReducer from './userSlide';
import cartReducer from './cartSlide';
export const store = configureStore({
    reducer:{
        product : productReducer,
        user : userReducer,
        cart: cartReducer
    }
});

