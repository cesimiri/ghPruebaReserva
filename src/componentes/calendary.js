
// recurso https://www.youtube.com/watch?v=6tcohUjGSVc
// npm i @material-ui/pickers --force
// npm i @date-io/date-fns@1.x date-fns
// npm i @material-ui/core


// import React from 'react';
// import { useSelector } from 'react-redux/es/exports';
// import { useDispatch } from "react-redux";
// import {DateTimePicker} from '@material-ui/pickers';
// import { fechaHora } from '../feature/reserva/reservaSlice';

// const Calendary =() =>{
//     const sateHorainicial =  useSelector(state => state.reserva)

//     const horaInicial = sateHorainicial.horaFecha;

//     const dispatch = useDispatch();

//     const handleChange =(event) =>{
//         dispatch(fechaHora(event))
//        //console.log("fechafinal" + event)
//       }
//       //{console.log("hola desde aqui "+ horaInicial)}   en el espacio de abajo 
//     return (
//         <div className="container">
//             <div>      
//                 <DateTimePicker
//                 value ={horaInicial}
//                 onChange = {handleChange}
//                 />
//             </div>
//         </div>

//     )
// }
// export default Calendary;
