import React from 'react';
import { useSelector, useDispatch } from 'react-redux/'
import { setClienteNombre, setClienteApellidos, setClienteEmail, setclienteTelefono, setClienteDireccion } from '../reducers/Sucursales'
import { useState } from 'react';
import ModalEnvioDatos from './ModalEnvioDatos';


const DatosCliente = () => {

    const stateReserva = useSelector(state => state.sucursales)
    const dispatch = useDispatch()

    const handleChangeNombre = e => {
        dispatch(setClienteNombre(e.target.value))
    }
    const handleChangeApellidos = e => {
        dispatch(setClienteApellidos(e.target.value))
    }
    const handleChangeTelefono = e => {
        dispatch(setclienteTelefono(e.target.value))
    }
    const handleChangeEmail = e => {
        dispatch(setClienteEmail(e.target.value))
    }
    const handleChangeDireccion = e => {
        dispatch(setClienteDireccion(e.target.value))
    }

    const [modalOn, setModalOn] = useState(false);

    const enviar = () => {
        setModalOn(true)
        //reiniciar pagina
        // window.location.reload();
    }

    return (
        <div id='DatosCliente'>
            {
                stateReserva.stateComponent.tipoHabitacionState === true ? (
                    <div className="p-4 mx-auto max-w-xl bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="flex items-center space-x-4">

                                    <div className="flex-1 min-w-0">
                                        <a href="#Consumables" className='text-left text-blue-400 hover:text-blue-700'>Anterior</a>
                                    </div>
                                    <div className="flex-1 min-w-0">

                                    </div>
                                    <div className="flex-1 min-w-0">
                                    </div>
                                    <div className="flex-1 min-w-0">

                                    </div>
                                </div>
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label className="block text-sm font-medium text-gray-700">Nombre</label>
                                        {
                                            //si se dió a grabar se bloquea disabled={stateReserva.stateComponent.botonDatos} cursor-no-drop opacity-50
                                            stateReserva.stateComponent.botonDatos === !false ? (
                                                <input
                                                    type="text"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 shadow-sm sm:text-sm border-black rounded-sm border cursor-no-drop "
                                                    placeholder="Nombres"
                                                    disabled={stateReserva.stateComponent.botonDatos}
                                                />
                                            ) : (
                                                <input
                                                    type="text"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 shadow-sm sm:text-sm border-black rounded-sm border "
                                                    placeholder="Nombres"
                                                    onChange={handleChangeNombre} />
                                            )
                                        }
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label className="block text-sm font-medium text-gray-700">Apellidos</label>
                                        {
                                            //si se dió a grabar se bloquea  cursor-no-drop opacity-50
                                            stateReserva.stateComponent.botonDatos === !false ? (
                                                <input
                                                    type="text"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 shadow-sm sm:text-sm border-black rounded-sm border cursor-no-drop"
                                                    placeholder="Apellidos"
                                                    disabled={stateReserva.stateComponent.botonDatos}
                                                />
                                            ) : (
                                                <input
                                                    type="text"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 shadow-sm sm:text-sm border-black rounded-sm border"
                                                    placeholder="Apellidos"
                                                    onChange={handleChangeApellidos} />
                                            )
                                        }

                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label className="block text-sm font-medium text-gray-700">E-mail</label>
                                        {
                                            //si se dió a grabar se bloquea disabled={stateReserva.stateComponent.botonDatos} cursor-no-drop opacity-50
                                            stateReserva.stateComponent.botonDatos === !false ? (
                                                <input
                                                    type="text"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8  shadow-sm sm:text-sm border-black rounded-sm border cursor-no-drop"
                                                    placeholder="E-mail"
                                                    disabled={stateReserva.stateComponent.botonDatos}
                                                />
                                            ) : (
                                                <input
                                                    type="text"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8  shadow-sm sm:text-sm border-black rounded-sm border"
                                                    placeholder="E-mail"
                                                    onChange={handleChangeEmail}
                                                />
                                            )
                                        }
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 ">
                                        <label className="block text-sm font-medium text-gray-700">Telefono</label>
                                        {
                                            //si se dió a grabar se bloquea disabled={stateReserva.stateComponent.botonDatos} cursor-no-drop opacity-50
                                            stateReserva.stateComponent.botonDatos === !false ? (
                                                <input
                                                    type="text"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8  shadow-sm sm:text-sm border-black rounded-sm border cursor-no-drop"
                                                    placeholder="Telefono"
                                                    disabled={stateReserva.stateComponent.botonDatos}
                                                />
                                            ) : (
                                                <input
                                                    type="text"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8  shadow-sm sm:text-sm border-black rounded-sm border"
                                                    placeholder="Telefono"
                                                    onChange={handleChangeTelefono}
                                                />
                                            )
                                        }

                                    </div>

                                    <div className="col-span-6">
                                        <label className="block text-sm font-medium text-gray-700">Dirección</label>
                                        {
                                            //si se dió a grabar se bloquea disabled={stateReserva.stateComponent.botonDatos} cursor-no-drop opacity-50
                                            stateReserva.stateComponent.botonDatos === !false ? (
                                                <input
                                                    type="text"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8  shadow-sm sm:text-sm border-black rounded-sm border cursor-no-drop"
                                                    placeholder="Dirección"
                                                    disabled={stateReserva.stateComponent.botonDatos}
                                                />
                                            ) : (
                                                <input
                                                    type="text"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8  shadow-sm sm:text-sm border-black rounded-sm border"
                                                    placeholder="Dirección"
                                                    onChange={handleChangeDireccion}
                                                />
                                            )
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">

                                {
                                    //si se dió a grabar se bloquea disabled={stateReserva.stateComponent.botonDatos} cursor-no-drop opacity-50
                                    stateReserva.stateComponent.botonDatos === !false ? (
                                        <button type="submit"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-no-drop opacity-50"
                                            disabled={stateReserva.stateComponent.botonDatos}
                                        >
                                            Guardar
                                        </button>
                                    ) : (
                                        <button type="submit"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            onClick={enviar}>
                                            Guardar
                                        </button>
                                    )
                                }

                            </div>
                            {modalOn && < ModalEnvioDatos setModalOn={setModalOn} />}
                        </div>
                    </div>
                ) : (
                    <>
                    </>
                )
            }
        </div>
    )
}

export default DatosCliente

