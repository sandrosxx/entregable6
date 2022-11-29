import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsloading } from './isLoading.slice';


export const products = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        setProduct: (state, action)=>{
            return action.payload
        }
       
    }
})

export const getProductThunk =()=>dispatch =>{
    dispatch(setIsloading(true));
    const url= 'https://e-commerce-api.academlo.tech/api/v1/products'
    axios
    .get(url)
    .then(res=>dispatch(setProduct(res.data.data.products)))
    .finally(() => dispatch(setIsloading(false)));
}
export const idThunk = (id) => (dispatch) => {
    dispatch(setIsloading(true));
    return axios
        .get(`https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`)
         .then(res => dispatch(setProduct(res.data.data.products)))
        .finally(() => dispatch(setIsloading(false)));
}
export const FilterThunk = (input) => (dispatch) => {
    dispatch(setIsloading(true));
    return axios
        .get(`https://e-commerce-api.academlo.tech/api/v1/products?query=${input}`)
        .then((res) =>  dispatch(setProduct(res.data.data.products)))
        .finally(() => dispatch(setIsloading(false)));
}
export const { setProduct } = products.actions;

export default products.reducer;
