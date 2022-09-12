import { createAsyncThunk } from '@reduxjs/toolkit';

import instaciaAxios from '../api/conexion';

const IngresoCabecera = createAsyncThunk("cabecera/PostCabecera", async ( datosCabecera ) =>{
    const respuesta = await instaciaAxios.get("/Cabecera.php",{
        params: {
            metodo: "IngresarCabecera",    
            ...datosCabecera,      
        }
    })
    // console.log("LOS datos Cliente")
    // console.log(datosCliente)
    return respuesta.data
})

export default IngresoCabecera;