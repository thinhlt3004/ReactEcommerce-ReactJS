import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from './../api/api';


export const getCartByUserID = createAsyncThunk('/cart/userID', async(payload) => {
    const res = await api.getCartByUser(payload);
    if(res.status === 200){
        return res.data
    }
})

const cartReducer = createSlice({
    name: 'cart',
    initialState: {
        isFetching: false,
        cart:[],
        isError: false,
    },
    reducers:{
        logOutCart : (state) => {
            state.cart = [];
        }
    },
    extraReducers:{
        [getCartByUserID.pending] : (state) => {
            state.isFetching = true;
        },
        [getCartByUserID.fulfilled] : (state, action) => {
            state.isFetching = false;
            state.cart = action.payload.products;
        },
        [getCartByUserID.rejected] : (state) => {
            state.isFetching = false;
            state.isError = true;
        },
    },
});

export const {logOutCart} = cartReducer.actions;

export default cartReducer.reducer;