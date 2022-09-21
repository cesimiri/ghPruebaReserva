import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { restarItem, sumarItem, sumaTotCons, eliminarItem} from '../reducers/Sucursales'
// los iconos https://mui.com/material-ui/material-icons/?query=delete
//npm install @mui/icons-material
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const Total = () => {
    const stateReserva = useSelector(state => state.sucursales)
    const dispatch = useDispatch()

    const precioCuarto = stateReserva.reserva.cuartoPrecio;
    const precioDecoracion = stateReserva.reserva.decoracionPrecio

    const a = parseFloat(precioCuarto) + parseFloat(precioDecoracion) + parseFloat(stateReserva.valorTotal)
    const subTotal = parseFloat(a)
    const b = (subTotal) * 0.12
    const iva = b.toFixed(2)
    const to = (subTotal) + parseFloat(iva)
    const total = to.toFixed(2)
    useEffect(() => {
        dispatch(sumaTotCons())
        // dispatch(setSubTotal(subTotal ))
        // dispatch(setIva(iva))
        // dispatch(setTotal(total))
    }, [dispatch, stateReserva.arrayProductosSelect])
    return (
        <>
            {
                stateReserva.stateComponent.tipoHabitacionState === true ? (
                    <div style={{ "width": "32rem" }} className="ml-2 p-3  bg-white rounded-lg border shadow-md  dark:bg-gray-800 dark:border-gray-700 absolute  ">
                        <div className="flow-root">
                            <ul className="divide-y divide-gray-700 dark:divide-gray-700 ">
                                <table className=' mb-2'>
                                    <tr>
                                        <th className='w-28 '>HOTEL : </th>
                                        <th className='w-60 font-normal'>{stateReserva.reserva.hotelNombre}</th>
                                        <th className='w-20 font-normal'></th>
                                    </tr>
                                </table>
                                <table className='mb-2'>
                                    <tr>
                                        <th className='w-28  '> HABITACIÓN: </th>
                                        <th className='w-60 font-normal'>{stateReserva.reserva.cuartoNombre}</th>
                                        <th className='w-14 font-normal text-right'>${parseFloat(precioCuarto).toFixed(2)}</th>
                                        <th className='w-20 font-normal'></th>
                                    </tr>
                                </table>
                                <table className='mb-2'>
                                    <tr>
                                        <th className='w-28 '> DECORACIÓN: </th>
                                        <th className='w-60 font-normal'>{stateReserva.reserva.decoracionNombre}</th>
                                        <th className='w-14 font-normal text-right'>${parseFloat(precioDecoracion).toFixed(2)}</th>
                                        <th className='w-20 font-normal'></th>  
                                    </tr>
                                </table>
                                <li className="py-3 sm:py-0">
                                    <b>CONSUMIBLES</b>
                                    <div className='overflow-y-scroll h-56 relative pb-3'>
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
                                                            <Button 
                                                                onClick={() => dispatch(restarItem(item))}>
                                                                    <RemoveIcon color ='error'/>
                                                            </Button>
                                                            <p className=''>{item.prod_cant}</p>
                                                            <Button 
                                                                onClick={() => dispatch(sumarItem(item))}>
                                                                    <AddIcon color='primary'/>
                                                            </Button>
                                                        </td>
                                                        <td>
                                                        </td>  
                                                        <td>
                                                            <p className='  font-normal'>${(parseFloat(item.columna) * item.prod_cant).toFixed(2)}</p>
                                                        </td>
                                                        <td>
                                                            <Button className=' border-cyan-700  text-white w-5'
                                                                onClick={() => dispatch(eliminarItem(item))}>
                                                                    <DeleteIcon color = 'error'/>
                                                            </Button>
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
                                            <th className='w-14 font-normal text-right dark:text-white'>$ {(stateReserva.valorTotal).toFixed(2)}</th>
                                            <th className='w-20 font-normal'></th>
                                        </tr>
                                    </table>
                                </li>
                                <table className='mb-2'>
                                    <tr>
                                        <th className='w-28  '>SubTotal:</th>
                                        <th className='w-60 '></th>
                                        <th className='w-14 font-normal text-right'>${subTotal.toFixed(2)}</th>
                                        <th className='w-20 font-normal'></th>
                                    </tr>
                                </table>

                                <table className='mb-2'>
                                    <tr>
                                        <th className='w-28 '>I.V.A:</th>
                                        <th className='w-60 '></th>
                                        <th className='w-14 font-normal text-right'>${iva}</th>
                                        <th className='w-20 font-normal'></th>
                                    </tr>
                                </table>
                                <table className='mb-2'>
                                    <tr>
                                        <th className='w-28  text-2xl'>Total</th>
                                        <th className='w-60 '></th>
                                        <th className='w-24 text-2xl'>${total}</th>
                                        <th className='w-20 font-normal'></th>
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
