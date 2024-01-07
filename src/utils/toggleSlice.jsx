import { createSlice } from "@reduxjs/toolkit";

const toggle = createSlice({
 
    name:"toggle",
    initialState: {
        isMenuOpen: false,
    },
    reducers: {
        toggleMenu: (state) =>{
            state.isMenuOpen =! state.isMenuOpen
        }
    }
})

export const {toggleMenu} = toggle.actions;

export default toggle.reducer;