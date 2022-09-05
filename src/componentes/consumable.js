import React from 'react';

import { useSelector } from "react-redux";

const Consumable = () => {
    const stateReserva = useSelector(state => state.sucursales)
    // const dispatch = useDispatch(); 
    
    const clicked = (c) => {

        // dispatch(stateConsumible(true))
        // dispatch(agregarListaConsumo(c))
    }
    return (
        <>
            {
                stateReserva.stateComponent.decoracionState === true ? (
                    <div className="p-4 mx-auto max-w-2xl bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className=" items-center mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Consumibles</h5>
                        <input
                            type="text"
                            className="border border-gray-700 p-2 rounded mb-5"
                            placeholder="Buscar"
                            //onChange={e => setTerm(e.target.value)}
                            
                        />
                    </div>
                    <div className="flow-root">
                        <ul  className="divide-y divide-gray-200 dark:divide-gray-700">
                            {stateReserva.consumible.map(c => (
                                // se agregó la key
                                <li key={c.prod_cod_prod} className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {c.prod_nom_prod}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                {c.columna}
                                            </p>
                                        </div>
                                        
                                        
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal"
                                                onClick={()=>clicked(c)}
                                            >
                                                Escoger
                                            </button>
                                        </div>
        
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    </div>
                ): (
                    <>
                    </>
                )
            }
           
        </>
    )
}

export default Consumable;