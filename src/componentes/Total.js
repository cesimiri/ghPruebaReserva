import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { restarItem, sumarItem, sumaTotCons, eliminarItem } from '../reducers/Sucursales'

const Total = () => {
    const stateReserva = useSelector(state => state.sucursales)
    const dispatch = useDispatch()

    const precioCuarto = stateReserva.reserva.cuartoPrecio;
    const precioDecoracion = stateReserva.reserva.decoracionPrecio

    const a = parseFloat(precioCuarto) + parseFloat(precioDecoracion)
    const c = parseFloat(stateReserva.valorTotal)
    const subTotal = parseFloat(a) + parseFloat(c)
    const b = parseFloat(subTotal) * 0.12
    const iva = parseFloat(b).toFixed(2)
    const to = parseFloat(subTotal) + parseFloat(iva)
    const total = parseFloat(to).toFixed(2)

    useEffect(() => {
        dispatch(sumaTotCons())
    }, [dispatch, stateReserva.arrayProductosSelect])
    return (
        <>
            {
                stateReserva.stateComponent.tipoHabitacionState === true ? (
                    <div style={{ "width": "32rem" }} className="ml-2 p-3 w-96 bg-white rounded-lg border shadow-md  dark:bg-gray-800 dark:border-gray-700 absolute  ">
                        <div className="flow-root">
                            <ul className="divide-y divide-gray-700 dark:divide-gray-700 ">
                                <table className='border mb-2'>
                                    <tr className=' '>
                                        <th className='w-28 '>HOTEL : </th>
                                        <th className='w-60 font-normal'>{stateReserva.reserva.hotelNombre}</th>
                                        <th className='w-24 '></th>
                                    </tr>
                                </table>
                                <table className='mb-2'>
                                    <tr>
                                        <th className='w-28  '> HABITACIÓN: </th>
                                        <th className='w-60 font-normal'>{stateReserva.reserva.cuartoNombre}</th>
                                        <th className='w-24 font-normal'>${parseFloat(precioCuarto).toFixed(2)}</th>
                                    </tr>
                                </table>
                                <table className='mb-2'>
                                    <tr>
                                        <th className='w-28 '> DECORACIÓN: </th>
                                        <th className='w-60 font-normal'>{stateReserva.reserva.decoracionNombre}</th>
                                        <th className='w-24 font-normal'>${parseFloat(precioDecoracion).toFixed(2)}</th>
                                    </tr>
                                </table>
                                <li className="py-3 sm:py-0">
                                    <b>CONSUMIBLES</b>
                                    <div className='overflow-x-auto relative pb-3'>
                                        <table className='border'>
                                            <thead>
                                                <tr>
                                                    <th className=' border border-black w-44'>
                                                        Producto
                                                    </th>
                                                    <th className=' border border-black w-16'>
                                                        Valor
                                                    </th>
                                                    <th colSpan={2} style={{ textAlign: "center" }} className=' border border-black w-28'>
                                                        Agre/Quitar
                                                    </th>      
                                                    <th className=' border border-black w-20'>
                                                    Total
                                                    </th>
                                                    <th className=' border border-black w-8'>
                                                    Supri
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {stateReserva.arrayProductosSelect.map((item) => (
                                                    <tr className="divide-y divide-gray-500" key={item.prod_cod_prod}>
                                                        <td>
                                                            {item.prod_nom_prod}
                                                        </td>
                                                        <td >
                                                            ${parseFloat(item.columna).toFixed(2)}
                                                        </td>
                                                        <td className='grid grid-cols-3 gap-2 ml-2'>
                                                            <Button className='border border-cyan-700 bg-red-700 hover:bg-red-800 text-white w-5'
                                                                onClick={() => dispatch(restarItem(item))}>-
                                                            </Button>
                                                            <p className=''>{item.prod_cant}</p>
                                                            <Button className='border bg-blue-700 hover:bg-blue-800 text-white w-5'
                                                                onClick={() => dispatch(sumarItem(item))}>+
                                                            </Button>
                                                        </td>
                                                        <td>
                                                        </td>  
                                                        <td>
                                                            <p className='text-sm pl-5'>${(parseFloat(item.columna) * item.prod_cant).toFixed(2)}</p>
                                                        </td>
                                                        <td>
                                                            <Button className='border border-cyan-700 bg-red-700 hover:bg-red-800 text-white w-5'
                                                                onClick={() => dispatch(eliminarItem(item))}>*</Button>
                                                        </td>
                                                    </tr>
                                                ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <table className='mb-2'>
                                        <tr>
                                            <th className='w-28 '></th>
                                            <th className='w-60 '>Total Consumible</th>
                                            <th className='w-24 font-normal text-gray-900 truncate dark:text-white'>$ {(stateReserva.valorTotal).toFixed(2)}</th>
                                        </tr>
                                    </table>
                                </li>
                                <table className='mb-2'>
                                    <tr>
                                        <th className='w-28  '>SubTotal:</th>
                                        <th className='w-60 '></th>
                                        <th className='w-24 font-normal'>${subTotal.toFixed(2)}</th>
                                    </tr>
                                </table>

                                <table className='mb-2'>
                                    <tr>
                                        <th className='w-28 '>I.V.A:</th>
                                        <th className='w-60 '></th>
                                        <th className='w-24 font-normal'>${iva}</th>
                                    </tr>
                                </table>
                                <table className='mb-2'>
                                    <tr>
                                        <th className='w-28  text-2xl'>Total</th>
                                        <th className='w-60 '></th>
                                        <th className='w-24 text-2xl'>${total}</th>
                                    </tr>
                                </table>

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

export default Total;
