import { configureStore } from '@reduxjs/toolkit'
import reservaReducer from '../feature/reserva/reservaSlice'
import sucursalesReducer from '../reducers/Sucursales'
import calendaryReducer from '../reducers/Calendary'
import totalReducer from '../reducers/Total'


const store = configureStore({
  reducer: {
    reserva: reservaReducer,

    calendary: calendaryReducer,
    sucursales: sucursalesReducer,



    total: totalReducer,

  }
})

export default store; 
