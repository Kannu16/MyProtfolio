import { configureStore } from "@reduxjs/toolkit";
import Toggleslice from "./toggleSlice"


const store = configureStore({
 reducer:{
    toggle: Toggleslice,
 }
})

export default store;