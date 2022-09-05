import { createAsyncThunk } from '@reduxjs/toolkit';
// import { daysToWeeks } from 'date-fns';
import instaciaAxios from '../api/conexion';

// los parametrosque van en async
const TipoHabitaciones = createAsyncThunk("habitaciones/PostHabitaciones", async (idsucursal) =>{
    const respuesta = await instaciaAxios.get("/Habitaciones.php",{
        params: {
            metodo: "ListarTipoHabitaciones",
            idsucursal
        }
    
    })
    // console.log(respuesta.data)
    return respuesta.data
})

export default TipoHabitaciones;