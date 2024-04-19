import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";



export const store=configureStore({
    //reducer is predef key which an obj that can hold more than one reducer as key value pair
    reducer:{
        counter:counterSlice
    }
})