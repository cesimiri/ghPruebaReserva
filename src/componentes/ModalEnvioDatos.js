// recursos https://www.youtube.com/watch?v=UXKt-IFgBGM

import React from "react"
import { useDispatch , useSelector } from 'react-redux'
import IngresoDatos from '../controllers/IngresoDatos';


const ModalEnvioDatos = ({ setModalOn, setChoice, position }) => {
    const stateReserva = useSelector(state => state.sucursales)
    const dispatch = useDispatch()

    const handleOKClick = () => {
        setModalOn(false)

        const envioDatos = {
            fecha: stateReserva.reserva.reservaFecha,
            hora : stateReserva.reserva.reservaHora,
            nombres: stateReserva.reserva.clienteNombres,
            apellidos: stateReserva.reserva.clienteApellidos,
            email: stateReserva.reserva.clienteEmail,
            telefono: stateReserva.reserva.clienteTelefono,
            direccion: stateReserva.reserva.clienteDireccion,
            codSucu: parseInt(stateReserva.reserva.hotelCod),
            codDeco: parseInt(stateReserva.reserva.decoracionCod),
            precioDeco: parseFloat(stateReserva.reserva.decoracionPrecio),
            codHabitacion: parseInt(stateReserva.reserva.cuartoCod),
            precioHabitacion: parseFloat(stateReserva.reserva.cuartoPrecio),
            totalConsumible: parseFloat(stateReserva.valorTotal),
            subTotal: parseFloat(stateReserva.reserva.subTotal) ,
            iva: parseFloat(stateReserva.reserva.iva),
            total: parseFloat(stateReserva.reserva.total),

            arrayConsumible: JSON.stringify(stateReserva.arrayProductosSelect),
         
        }
        dispatch(IngresoDatos(envioDatos))
        //reiniciar pagina
        // window.location.reload();
        console.log(envioDatos);
    }

    const handleCancelClick = () => {
        setModalOn(false)
    }

    return (

        <div className=" bg-gray-600 opacity-95 fixed inset-0 z-50   ">

            <div className="flex h-screen justify-center items-center ">

                <div className="flex-col justify-center  bg-white py-12 px-24 border-4 border-sky-500 rounded-xl ">

                    <div className="flex  text-lg  text-zinc-600   mb-10" >Desea guardar la reserva ?</div>
                    <div className="flex">
                        <button onClick={handleOKClick} className=" rounded px-4 py-2 text-white  bg-green-400 ">Si</button>
                        <button onClick={handleCancelClick} className="rounded px-4 py-2 ml-4 text-white bg-blue-500 ">No</button>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default ModalEnvioDatos