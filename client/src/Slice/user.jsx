import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        getUser: (state, action)=>{
            state.user = action.payload
        },
        clearUser: (state, action)=>{
            state.user = false
        }
    }
})

export const {getUser, clearUser} = userSlice.actions
export default userSlice.reducer