import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {   
        id : 1,
        hotel : 'Green House',
        fecha : '2022/08/05',
        cuarto : 'imperial',
        reservado : true,
    },
    {
        id : 2,
        hotel : 'The Best',
        fecha : '2022/08/05',
        cuarto : 'imperial',
        reservado : true,
    },
]
const reservaSlice = createSlice({
    name: 'reserva',
    initialState: initialState,
    reducers:{

    }
})

export default reservaSlice.reducer;