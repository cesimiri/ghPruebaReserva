import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from "react-redux";
import Decoracion from "../controllers/Decoracion"
import { stateCuarto, datosCuarto } from "../reducers/Sucursales"

const RoomCard = () => {
    const stateReserva = useSelector(state => state.sucursales)
    const dispatch = useDispatch();

    const clicked = (x) => {
        dispatch(Decoracion())
        dispatch(stateCuarto(true))
        dispatch(datosCuarto(x))
    }
    return (
        <>
            <div className="p-4 mx-auto max-w-xl bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 " id="Cuarto">
                <div className="flex items-center space-x-4">

                    <div className="flex-1 min-w-0">

                    </div>
                    <div className="flex-1 min-w-0">

                    </div>
                    <div className="flex-1 min-w-0">

                    </div>
                    <div className="flex-1 min-w-0">
                        <a href='#Decoration' className='text-right text-blue-400 hover:text-blue-700'>Siguiente</a>
                    </div>
                </div>
                <div className="items-center mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Tipo De Habitaciones </h5>
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

                                    {
                                        //si se dió a grabar se bloquea disabled={stateReserva.stateComponent.botonDatos} 
                                        stateReserva.stateComponent.botonDatos === !false ? (
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white ">
                                                <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-no-drop opacity-50"
                                                    onClick={() => clicked(i, h)}
                                                    disabled={stateReserva.stateComponent.botonDatos}
                                                >
                                                    Escoger
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <form >
                                                    <button
                                                        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                        onClick={() => {
                                                            clicked(i, h)
                                                            window.location.href="#Decoration"
                                                        }}
                                                        // formaction='#Decoration'
                                                    >
                                                        Escoger
                                                    </button>
                                                </form>
                                            </div>
                                        )
                                    }
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>


        </>
    )
}

export default RoomCard;