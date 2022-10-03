import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    purchases:false
}

const purchaseSlice = createSlice({
    name: "purchases",
    initialState,
    reducers:{
        successfulBuys: (state, action)=>{
            state.purchases = action.payload
        }
    }
})

export const {successfulBuys} = purchaseSlice.actions
export default purchaseSlice.reducer