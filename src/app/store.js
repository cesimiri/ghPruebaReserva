import { configureStore } from '@reduxjs/toolkit'
<<<<<<< HEAD
import  reservaReducer from '../feature/reserva/reservaSlice'
 
const store = configureStore({
    reducer: {
      reserva: reservaReducer,
    }
  })

  export default store; 
=======
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
>>>>>>> 743b2641213f14d2535eb0344bb8c58521eaf5da
