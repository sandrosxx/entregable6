import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsloading } from './isLoading.slice';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart:(state, action)=>{
            return action.payload;
        }
    }
})

export const getCartThunk = () => (dispatch) => {
    dispatch(setIsloading(true));
    return axios
        .get('https://e-commerce-api.academlo.tech/api/v1/cart', getConfig())
        .then((res) => dispatch(setCart(res.data.data.cart.products)))
        .finally(() => dispatch(setIsloading(false)));
}

export const postCartThunk = (productToCart) => (dispatch) => {
    dispatch(setIsloading(true));
    return axios
        .post('https://e-commerce-api.academlo.tech/api/v1/cart', productToCart, getConfig())
        .then(() => dispatch(getCartThunk()))
        .finally(() => dispatch(setIsloading(false)))
        .catch(error => console.log(error.response?.data));
}
export const checkoutCartThunk = () => (dispatch) => {
    dispatch(setIsloading(true));
    return axios
        .post('https://e-commerce-api.academlo.tech/api/v1/purchases', {}, getConfig())
        .then(() => dispatch(setCart([])))
        .finally(() => dispatch(setIsloading(false)));
}
export const {  setCart} = cartSlice.actions;

export default cartSlice.reducer;
