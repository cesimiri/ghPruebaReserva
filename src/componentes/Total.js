import React, { useEffect, useState } from 'react';

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
                    <div className="p-4 mx-auto w-96 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
                        <div className=" items-center mb-1 pt-0">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">DESGLOCE</h5>
                        </div>
                        <div className="flow-root">
                            <ul className="divide-y divide-gray-700 dark:divide-gray-700">
                                <li className="sm:py-0">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <b>HOTEL :</b>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <p className='items-center'>{stateReserva.reserva.hotelNombre} </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-0">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <b>HABITACIÓN:</b>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <p>{stateReserva.reserva.cuartoNombre}</p>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                ${parseFloat(precioCuarto).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-0">
                                    <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                            <b>DECORACIÓN:</b>
                                        </div>
                                        <div className="flex-shrink-0">
                                            {stateReserva.reserva.decoracionNombre}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                ${parseFloat(precioDecoracion).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-0">
                                    <b>CONSUMIBLES</b>

                                    <div className='overflow-x-auto relative'>
                                        <table className='border'>
                                            <thead>
                                                <tr>
                                                    <th className=' border border-black'>
                                                        Producto
                                                    </th>
                                                    <th className=' border border-black ml-2'>
                                                        valor
                                                    </th>

                                                    <th colSpan={2} style={{ textAlign: "center" }} className=' border border-black'>
                                                        BTN
                                                    </th>
                                                    <th className=' border border-black'>
                                                        Total
                                                    </th>
                                                    <th className=' border border-black'>
                                                        Supr
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
                                                                onClick={() => dispatch(restarItem(item))}>-</Button>
                                                            <p>{item.prod_cant}</p>
                                                            <Button className='border bg-blue-700 hover:bg-blue-800 text-white w-5'
                                                                onClick={() => dispatch(sumarItem(item))}>+</Button>
                                                        </td>
                                                        <td>

                                                        </td>
                                                        <td>
                                                            ${(parseFloat(item.columna) * item.prod_cant).toFixed(2)}
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
                                    <b >Total Consumibles = $ {(stateReserva.valorTotal).toFixed(2)} </b>
                                </li>

                                <li className=" sm:py-4 ">

                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <strong>subTotal</strong>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {subTotal.toFixed(2)}
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        </div>
                                    </div>
                                </li>

                                <li className="">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <strong>I.V.A</strong>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {iva}
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        </div>
                                    </div>
                                </li>

                                <li className="">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <strong className='text-2xl'>Total</strong>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                                                {total}
                                            </p>

                                        </div>
                                    </div>
                                </li>

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
