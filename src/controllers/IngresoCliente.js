import { createAsyncThunk } from '@reduxjs/toolkit';

import instaciaAxios from '../api/conexion';

const IngresoCliente = createAsyncThunk("cliente/PostCliente", async ( datosCliente ) =>{
    const respuesta = await instaciaAxios.get("/Cliente.php",{
        params: {
            metodo: "DatosCliente",    
            ...datosCliente,      
        }
    })
    // console.log("LOS datos Cliente")
    // console.log(datosCliente)
    return respuesta.data
})

export default IngresoCliente;