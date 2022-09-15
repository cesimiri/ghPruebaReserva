import React from 'react';
import { useSelector, useDispatch } from 'react-redux/'
import { setClienteNombre, setClienteApellidos, setClienteEmail, setclienteTelefono, setClienteDireccion, } from '../reducers/Sucursales'
import IngresoDatos from '../controllers/IngresoDatos';
// import { parse } from 'date-fns';

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

    const enviar = () => {
        // reiniciar pagina
        // window.location.reload();
        //
        const envioDatos = {
            nombres: stateReserva.reserva.clienteNombres,
            apellidos: stateReserva.reserva.clienteApellidos,
            email: stateReserva.reserva.clienteEmail,
            telefono: stateReserva.reserva.clienteTelefono,
            direccion: stateReserva.reserva.clienteDireccion,

            codSucu: parseInt(stateReserva.reserva.hotelCod),
            // cabres_clires: 1,
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
        // console.log(envioDatos)
        dispatch(IngresoDatos(envioDatos))
    }

    return (
        <>
            {
                stateReserva.stateComponent.tipoHabitacionState === true ? (
                    <div className="p-4 mx-auto max-w-xl bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label className="block text-sm font-medium text-gray-700">Nombre</label>
                                        <input
                                            type="text"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 shadow-sm sm:text-sm border-black rounded-sm border "
                                            placeholder="Nombres"
                                            onChange={handleChangeNombre} />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label className="block text-sm font-medium text-gray-700">Apellidos</label>
                                        <input
                                            type="text"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 shadow-sm sm:text-sm border-black rounded-sm border"
                                            placeholder="Apellidos"
                                            onChange={handleChangeApellidos} />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label className="block text-sm font-medium text-gray-700">E-mail</label>
                                        <input
                                            type="text"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8  shadow-sm sm:text-sm border-black rounded-sm border"
                                            placeholder="E-mail"
                                            onChange={handleChangeEmail} />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 ">
                                        <label className="block text-sm font-medium text-gray-700">Telefono</label>
                                        <input
                                            type="text"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8  shadow-sm sm:text-sm border-black rounded-sm border"
                                            placeholder="Telefono"
                                            onChange={handleChangeTelefono} />
                                    </div>

                                    <div className="col-span-6">
                                        <label className="block text-sm font-medium text-gray-700">Dirección</label>
                                        <input
                                            type="text"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8  shadow-sm sm:text-sm border-black rounded-sm border"
                                            placeholder="Dirección"
                                            onChange={handleChangeDireccion} />
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={enviar}>
                                    Guardar
                                </button>
                            </div>
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

export default DatosCliente

