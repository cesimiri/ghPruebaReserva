import { createAsyncThunk } from '@reduxjs/toolkit';

import instaciaAxios from '../api/conexion';
// se sacó el idSucursal

const Consumibles = createAsyncThunk("consumibles/PostConsumibles", async (datosConSucu , ) =>{
    const respuesta = await instaciaAxios.get("/Consumible.php",{
        params: {
            metodo: "ListarConsumible",
            ...datosConSucu,
              
        }
        
    })
    // console.log(respuesta.data)
    return respuesta.data
})

export default Consumibles;