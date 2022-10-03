import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    product: []
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers:{
        addToCart: (state, action)=>{
            const spec = state.product.find((one)=>one._id === action.payload._id)
           if(!spec){
            state.product.push(action.payload)
           }else{
            console.log("this was already added" + action.payload._id)
           }
                
            
        },
        removeFromCart: (state, action)=>{
           const id = action.payload._id
           
           state.product = state.product.filter((item)=> item._id !== id)
        },
        removeAllCart: (state, action)=>{
            state.product = [];
        }
    }
})

export const {addToCart, removeAllCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer