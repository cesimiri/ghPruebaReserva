import { createAsyncThunk } from '@reduxjs/toolkit';

import instaciaAxios from '../api/conexion';

const IngresoConsumible = createAsyncThunk("consumibles/PostConsumibles", async ( datosLista ) =>{
    const respuesta = await instaciaAxios.get("/Consumible.php",{
        params: {
            metodo: "IngresarConsumible",    
            ...datosLista,      
        }
    })
    console.log(datosLista.arrayConsumible)
    // console.log(respuesta.data)
    return respuesta.data
})

export default IngresoConsumible;