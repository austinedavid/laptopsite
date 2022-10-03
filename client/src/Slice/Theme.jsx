import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    lightModeTheme: true,
}

const themeSlice = createSlice({
    name:"them",
    initialState,
    reducers:{
        setDarkMode: (state, action)=>{
            state.lightModeTheme = false
        },
        setLightMode: (state, action)=>{
            state.lightModeTheme = true
        }
    }
})

export const {setDarkMode, setLightMode} = themeSlice.actions
export default themeSlice.reducer