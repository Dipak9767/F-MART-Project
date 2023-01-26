import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        data:localStorage.getItem('cart') ?  JSON.parse(localStorage.getItem('cart')) : []
    },
    reducers:{
        add(state , action){
            const newData = [...state.data , action.payload]
            localStorage.setItem('cart',JSON.stringify(newData));
            state.data = JSON.parse(localStorage.getItem('cart'));
            console.log(state.data)
        },
        increment(state , action){
            state.data = state.data.map((item)=>{
             if(item.id === action.payload ){
                 return {...item,quantity:item.quantity+1}
             }
             return item;
            })
            localStorage.setItem('cart',JSON.stringify(state.data));
         },
         decrement(state , action){
            state.data = state.data.map((item)=>{
             if(item.id === action.payload && item.quantity > 1){
                 return {...item,quantity:item.quantity-1}
             }
             return item;
            })
            localStorage.setItem('cart',JSON.stringify(state.data));
         },
         remove(state , action){
           const newData = state.data.filter((item)=>item.id !== action.payload.id)
           localStorage.setItem('cart',JSON.stringify(newData));
            state.data = JSON.parse(localStorage.getItem('cart'));
         }
    }
})

export const {add , increment , decrement ,remove} = cartSlice.actions;
export default cartSlice.reducer;