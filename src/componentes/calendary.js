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