import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import * as api from './../api/api';

export const getProductByCategory = createAsyncThunk('/productsbycategory',  async (payload) => {
    const res = await api.getProductByCategory(payload);
    return res.data;
});


const productReducer = createSlice({
    name: 'products',
    initialState:{
        isFetching: false,
        products: [],
        isError: false,
    },
    reducer: {},
    extraReducers:{
        [getProductByCategory.pending] : (state) => {
            state.isFetching = true;
        },
        [getProductByCategory.fulfilled] : (state, action) => {
            state.products = action.payload;
            state.isFetching = false;
        },
        [getProductByCategory.rejected] : (state) => {
            state.isFetching = false;
            state.isError = true;
        },
    }
});

export default productReducer.reducer;