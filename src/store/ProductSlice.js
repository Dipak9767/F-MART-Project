import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ProductSlice = createSlice({
    name: "Products",
    initialState: {
        data : localStorage.getItem('products') ?  JSON.parse(localStorage.getItem('products')) : [],
        products : []
    },
    reducers: {
        addProducts(state, action) {
            const newData = action.payload
            localStorage.setItem('products',JSON.stringify(newData));
            state.data = JSON.parse(localStorage.getItem('products'));
            state.products = state.data
        },
        displayProducts(state, action){
            state.products = action.payload;
        }
    }

})

export const { addProducts  , displayProducts} = ProductSlice.actions;
export default ProductSlice.reducer;

export const fetchData = () => {
    return async function fetchProducts(dispatch, getState) {
        try {
            const data = await axios.get('https://dummyjson.com/products') //https://fakestoreapi.com/products
            const newData = data.data.products.map((item) => ({ ...item, added: "false" }))
            dispatch(addProducts(newData))
        } catch (error) {
            console.log(error)
        }
    }
}