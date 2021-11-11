import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as api from './../api/api';

export const login = createAsyncThunk('/user/login', async(payload) => {
    const res = await api.loginUser(payload);
    if(res.status === 200){
        return payload.username;
    }
});

export const getUsers = createAsyncThunk('/users', async() => {
    const res = await api.getAllUsers();
    if(res.status === 200){
        return res.data;
    }
});

const userReducer = createSlice({
    name: 'user',
    initialState:{
        isFetching: false,
        username: null,
        isError: false,
        isLoading: false,
        users: [],
    },
    reducers:{
        logout: (state) => {
            state.username = null;
            localStorage.removeItem('user');
        },
        getUser : (state, action) => {
            state.username = action.payload;
        }
    },
    extraReducers:{
        [login.pending] : (state) => {
            state.isFetching = true;
        },
        [login.fulfilled] : (state, action) => {
            state.isFetching = false;
            state.username = action.payload;
            if(localStorage.getItem('user') !== null){
                localStorage.removeItem('user')
            }
            localStorage.setItem('user', action.payload);
        },
        [login.rejected] : (state) => {
            state.isFetching = false;
            state.isError = true;
        },
        [getUsers.pending] : (state) => {
            state.isLoading = true;
        },
        [getUsers.fulfilled] : (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        },
        [getUsers.rejected] : (state) => {
            state.isLoading = false;
            state.isError = true;
        }
    }

})

export const {logout, getUser} = userReducer.actions;

export default userReducer.reducer;