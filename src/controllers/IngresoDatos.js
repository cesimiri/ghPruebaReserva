import { createAsyncThunk } from '@reduxjs/toolkit';

import instaciaAxios from '../api/conexion';

const IngresoDatos = createAsyncThunk("datos/PostDatos", async ( datos ) =>{
    const respuesta = await instaciaAxios.get("/Datos.php",{
        params: {
            metodo: "ingresoDatos",    
            ...datos,      
        }
    })

    return respuesta.data 
})

export default IngresoDatos;