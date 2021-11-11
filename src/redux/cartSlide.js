import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from './../api/api';


export const getCartByUserID = createAsyncThunk('/cart/userID', async(payload) => {
    const res = await api.getCartByUser(payload);
    if(res.status === 200){
        return res.data
    }
})

export const deleteCart = createAsyncThunk('/cart/delete', async (payload) => {
    const res = await api.deleteCart(payload);
    return res.data;
});


const cartReducer = createSlice({
    name: 'cart',
    initialState: {
        isFetching: false,
        cart:null,
        isError: false,
    },
    reducers:{
        logOutCart : (state) => {
            state.cart = [];
        },
        addNewProduct : (state, action) => {
            state.cart.products = action.payload;
        },
        createNewCart : (state, action) => {
            state.cart = action.payload;
        }
    },
    extraReducers:{
        [getCartByUserID.pending] : (state) => {
            state.isFetching = true;
        },
        [getCartByUserID.fulfilled] : (state, action) => {
            if(action.payload.length > 0){
                action.payload = action.payload[action.length - 1];
            }
            state.isFetching = false;
            state.cart = action.payload;
        },
        [getCartByUserID.rejected] : (state) => {
            state.isFetching = false;
            state.isError = true;
        },
        [deleteCart.pending] : (state) => {
            state.isFetching = true;
        },
        [deleteCart.fulfilled] : (state, action) => {
            state.cart = null;
        },
        [deleteCart.rejected] : (state) => {
            state.isFetching = false;
            state.isError = true;
        },
    },
});

export const {logOutCart, addNewProduct, createNewCart} = cartReducer.actions;

export default cartReducer.reducer;