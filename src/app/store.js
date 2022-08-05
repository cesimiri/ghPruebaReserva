import { configureStore } from '@reduxjs/toolkit'
import  reservaReducer from '../feature/reserva/reservaSlice'
 
const store = configureStore({
    reducer: {
      reserva: reservaReducer,
    }
  })

  export default store; 