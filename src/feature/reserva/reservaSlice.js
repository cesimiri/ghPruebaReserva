import { createSlice } from '@reduxjs/toolkit'
import sencilla from '../../assets/img/sencilla.jpg';
import suit1 from '../../assets/img/suit1.jpg';
import suit3 from '../../assets/img/suit3.jpg';
const initialState = [
    {   
        id : 1,
        hotel : 'Green House',
        imagen : sencilla,
        fecha : '2022/08/05',
        cuarto : 'imperial',
        descripcion : 'Cuarto especial para pasar con su pareja ',
        reservado : true,
    },
    {
        id : 2,
        hotel : 'The Best',
        imagen : suit1,
        fecha : '2022/08/05',
        cuarto : 'imperial',
        reservado : true,
    },
    {
        id : 3,
        hotel : 'The Best',
        imagen : suit3,
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