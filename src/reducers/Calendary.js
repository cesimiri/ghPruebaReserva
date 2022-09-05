import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    calendary : {
        id : 0,
        nombre : ''
    },
}

const CalendarySlice= createSlice ({
    name: "calendary",
    initialState : initialState, 
    reducers :{
        // todos los reduceers aqui 
        ejemplo : (state, action ) =>{
            const id = 2

            state.calendary.id = id
        }
    }
})

export const {ejemplo} 
= CalendarySlice.actions;
export default CalendarySlice.reducer;
