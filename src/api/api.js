import {publicRequest} from './configAxios';

export const getAllCategories = () => publicRequest.get('/products/categories');

export const getProductByCategory = (payload) => publicRequest.get(`/products/category/${payload.cate}?sort=${payload.direction}`);



export const getProductById = (payload) => publicRequest.get(`/products/${payload}`);


export const loginUser = (payload) => publicRequest.post('/auth/login', payload)

export const registerUser = (payload) => publicRequest.post('/users', payload);

export const getAllUsers = () => publicRequest.get('/users');


export const getCartByUser = (payload) => publicRequest.get(`/carts/${payload}`);

export const getALlCarts = () => publicRequest.get('/carts');

export const upadatedCart = (payload) => publicRequest.put(`/carts/${payload.cartId}`, payload.data);


export const addNewCart = (payload) => publicRequest.post(`/carts`, payload);

export const deleteCart = (payload) => publicRequest.delete(`/carts/${payload}`);