import { createAsyncThunk } from '@reduxjs/toolkit';

import instaciaAxios from '../api/conexion';

const IngresoDetalle = createAsyncThunk("detalle/PostDetalle", async ( datosDetalle ) =>{
    const respuesta = await instaciaAxios.get("/Detalle.php",{
        params: {
            metodo: "ingresoDetalle",    
            ...datosDetalle,      
        }
    })
    // console.log("LOS datos Cliente")
    // console.log(datosCliente)
    return respuesta.data
})

export default IngresoDetalle;