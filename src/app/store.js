import { configureStore } from '@reduxjs/toolkit'
import reservaReducer from '../feature/reserva/reservaSlice'
import sucursalesReducer from '../reducers/Sucursales'

const store = configureStore({
  reducer: {
    reserva: reservaReducer,
    sucursales: sucursalesReducer,
  }
})

export default store; 
