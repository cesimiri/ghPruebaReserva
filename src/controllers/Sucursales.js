import { createAsyncThunk } from '@reduxjs/toolkit';
// import { daysToWeeks } from 'date-fns';
import instaciaAxios from '../api/conexion';

// los parametrosque van en async
const Sucursales = createAsyncThunk("sucursales/PostSucursales", async (x) =>{
    const respuesta = await instaciaAxios.get("/Sucursales.php",{
        params: {
            metodo: "ListarHoteles",
                  
        }
        // ...datos,

        // usuario: localStorage.getItem("xxx") || document.cookie.split("=")[1],
    })


    return respuesta.data
})

export default Sucursales;