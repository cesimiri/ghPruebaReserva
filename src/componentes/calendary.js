// se usará la siguiente libreria
// recursos de https://www.youtube.com/watch?v=3-RpnH-Bjlg&t=0s
// npm i react-datepicker
// cambiar a español https://www.youtube.com/watch?v=Rj6PgtkUFic
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, {useState} from 'react';

const Calendary =() =>{

    const [fecha, setFecha] = useState(new Date()) ;

    const onchangeFecha = (fecha) =>{
        setFecha({fecha : fecha});
    }

    const mostrarFecha = () =>{
        alert(fecha);
    }
    return(
        <>
            <DatePicker 
                selected= {fecha}
                onChange={onchangeFecha}
            />
            <br/>
            <br/>
            <input type="button" value= "Confirmar fecha " className='bg-purple-700' onClick={()=>mostrarFecha(fecha)} />
        </>
    )
}

export default Calendary;