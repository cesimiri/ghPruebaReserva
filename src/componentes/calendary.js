<<<<<<< HEAD
// se usará la siguiente libreria
// recursos de https://www.youtube.com/watch?v=3-RpnH-Bjlg&t=0s
// npm i react-datepicker
// cambiar a español https://www.youtube.com/watch?v=Rj6PgtkUFic
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, {useState} from 'react';
import es from 'date-fns/locale/es';
registerLocale("es", es);


const Calendary =() =>{
    // inicia desde 0 al 11
    const [startDate, setStartDate] = useState(new Date()); ;
    /*
    const mostrarFecha = (e) =>{
        e.preventDefault();
        const opcion = {weekday:'long', day:'numeric', month:'numeric', year:'numeric'};
        alert(startDate.toLocaleDateString('es-Es', opcion));
    }
    */
    return(
        <>
            <DatePicker 
                selected= {startDate}
                onChange={(date) => setStartDate(date)}
                locale= "es" 
                dateFormat="dd-MM-yyyy"
            />
            <br/>
            <br/>
            
        </>
    )
}
//<input type="button" value= "Confirmar fecha " className='bg-purple-700' onClick={()=>mostrarFecha(startDate)} />
export default Calendary;
=======

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
>>>>>>> 743b2641213f14d2535eb0344bb8c58521eaf5da
