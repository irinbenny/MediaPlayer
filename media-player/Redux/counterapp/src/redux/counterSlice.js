import { createSlice } from "@reduxjs/toolkit"


export const counterSlice=createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    //actions are creatted reducer key
    reducers:{
        //fun to increment value
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
    },
    reset:(state)=>{
        state.value=0
    }
}
})
//actions r used by components to access the state
export const{increment,decrement,reset}=counterSlice.actions
//reducer is req for store to change the value of state
export default counterSlice.reducer