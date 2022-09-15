// recursos https://www.youtube.com/watch?v=UXKt-IFgBGM

import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import Decoracion from "../controllers/Decoracion"
import { stateCuarto , datosCuarto } from "../reducers/Sucursales"

const Modal = ({ setModalOn, setChoice, position }) => {
    const stateReserva = useSelector(state => state.sucursales)
    const dispatch = useDispatch()

    const handleOKClick = () => {
        // setChoice (true)
        setModalOn(false)
        dispatch(Decoracion())
        dispatch(stateCuarto(true))
        dispatch(datosCuarto(position)) 
    }
    const handleCancelClick = () => {
        setChoice(false)
        setModalOn(false)
    }
    return (

        <div className="   bg-gray-600 opacity-95 fixed inset-0 z-50   ">

            <div className="flex h-screen justify-center items-center ">

                <div className="flex-col justify-center  bg-white py-12 px-24 border-4 border-sky-500 rounded-xl ">

                    <div className="flex  text-lg  text-zinc-600   mb-10" >Desea asignar esta habitación?</div>
                    <div className="flex">
                        
                        <button onClick={handleOKClick } className=" rounded px-4 py-2 text-white  bg-green-400 ">Si</button>
                        <button onClick={handleCancelClick} className="rounded px-4 py-2 ml-4 text-white bg-blue-500 ">No</button>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Modal