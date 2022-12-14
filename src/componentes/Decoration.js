import React from 'react';
import { useSelector } from 'react-redux/';
import { useDispatch } from "react-redux";
import decoration from '../controllers/Decoracion';
import { datosDecoracion } from '../reducers/Sucursales';
import ModalDecoracionconfim from './ModalDecoracionConfirm';
import { useState } from 'react';


const Decoration = () => {

    const stateReserva = useSelector(state => state.sucursales)
    const dispatch = useDispatch();

    const [modalOn, setModalOn] = useState(false);
    const [choise, setChoice] = useState(false);

  

    const clicked = (position) => {
        setModalOn(true)
        dispatch(decoration)
        dispatch (datosDecoracion(position))
        
    }
    return (
        <>
            {
                // stateReserva.stateComponent.decoracion?.length > 0? (
                stateReserva.stateComponent.tipoHabitacionState === true ?(
                    <div className="p-4 mx-auto max-w-xl bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className=" items-center mb-4">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Escoja la decoración</h5>
                        </div>
                        <div className="flow-root">
                            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                {stateReserva.decoracion.map((d, position) => (
                                    <li key={d.decora_decora} className="py-3 sm:py-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    {d.decora_nombre}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    {d.decora_descri}
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {parseFloat(d.decora_cosmax).toFixed(2)} + I.V.A.
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">

                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal"
                                                    onClick={()=> clicked(position)}
                                                >
                                                    Escoger 
                                                </button>
                                            </div>
                                        </div>
                                        {modalOn && < ModalDecoracionconfim setModalOn={setModalOn} setChoice={setChoice} />}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : (
            <>
            </>
            )
            }

        </>
    )
}

export default Decoration;