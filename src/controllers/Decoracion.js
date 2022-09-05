import { createAsyncThunk } from '@reduxjs/toolkit';
// import { daysToWeeks } from 'date-fns';
import instaciaAxios from '../api/conexion';

// los parametrosque van en async
const Decoracion = createAsyncThunk("decoracion/PostDecoracion", async (x) =>{
    const respuesta = await instaciaAxios.get("/Decoracion.php",{
        params: {
            metodo: "ListarDecoracion",       
        }        
    })


    return respuesta.data
})

export default Decoracion;