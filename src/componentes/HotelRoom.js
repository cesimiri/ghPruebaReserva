import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import TestModal from './ModalCuartoConfirm';
import { useState } from 'react';
import { useDispatch } from "react-redux";


const RoomCard = () => {
    const stateReserva = useSelector(state => state.sucursales)
    const dispatch = useDispatch();

    const [modalOn, setModalOn] = useState(false);
    const [choise, setChoice] = useState(false);
    const [position, setPosition] = useState(0)

    const clicked = (x ) => {
        setModalOn(true)
        setPosition(x)
    }

    // console.log("Aqui ",stateReserva.tipoHabitaciones)

    /* estos de aqui abajo es del modalRoom.js */
    // const [showModalRoom, setShowModalRoom] = useState(false);
    return (
        <div>
            <div className="p-4 mx-auto max-w-2xl bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">

                <div className="items-center mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Tipo De Habitaciones</h5>
                </div>
                <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {stateReserva.tipoHabitaciones.map((h, i) => (
                            
                            <li key={h.tiha_cod_tiha} className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        {h.tiha_cod_tiha}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {h.tiha_nom_tiha}
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        {parseFloat(h.tiha_cos_maxi).toFixed(2)} + I.V.A
                                    </div>

                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal"
                                            onClick={() => clicked(i, h)}
                                        >
                                            Escoger
                                        </button>
                                    </div>

                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {modalOn && < TestModal setModalOn={setModalOn} setChoice={setChoice} position={position} />}
            </div>


        </div>
    )
}

export default RoomCard;