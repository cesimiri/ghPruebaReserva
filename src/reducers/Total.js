import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    total : {
        id : 0,
        nombre : ''
    },
}

const TotalSlice= createSlice ({
    name: "calendary",
    initialState : initialState, 
    reducers :{
        // todos los reduceers aqui 
        ejemplo : (state, action ) =>{
            const id = 2

            state.total.id = id
        }
    }
})

export const {ejemplo} 
= TotalSlice.actions;
export default TotalSlice.reducer;
