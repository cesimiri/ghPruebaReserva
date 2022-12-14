// recursos https://www.youtube.com/watch?v=UXKt-IFgBGM

import { Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { setProductosPage, setBuscador, changeProducto } from "../reducers/Sucursales";


const ModalConsumibles = ({ setModalOn, setChoice }) => {
    const stateReserva = useSelector(state => state.sucursales)
    const dispatch = useDispatch()
    // console.log(stateReserva.consumible);

    const [page, setPage] = useState(1)

    const [limite, setLimite] = useState(4)
    const [query, setQuery] = useState("")

    const [respuesta, setRespuesta] = useState([stateReserva.searchProduct]);

    const handleOKClick = () => {
        // setChoice (true)
        setModalOn(false)
    }
    const clicked = (c) => {

        setChoice(false)
        setModalOn(false)
        dispatch(changeProducto(c))
    }


    const handleChangePage = (x, i) => {
        dispatch(setProductosPage({ pagina: i, limite }))


    }

    const handleCancelClick = () => {
        setChoice(false)
        setModalOn(false)
    }

    const handleChange = e => {
        dispatch(setBuscador(e.target.value))
        setQuery(e.target.value)
    }

    useEffect(() => {
        dispatch(setProductosPage({ pagina: 1 }))

    }, [dispatch])

    useEffect(() => {
        if (query.trim().length === 0) dispatch(setProductosPage({ pagina: 1, limite }))

    }, [query])

    useEffect(() => {
        if (stateReserva.consumible.length > 0) dispatch(setProductosPage({ pagina: 1, limite }))
    }, [stateReserva.consumible])

    return (
        <div className="   bg-gray-600 opacity-95 fixed inset-0 z-50  ">

            <div className="flex h-screen justify-center items-center ">

                <div className="flex-col justify-center  bg-white py-20 px-24 border-4 border-sky-500 rounded-xl ">

                    <div className="p-4 mx-auto max-w-2xl bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 overflow-auto">
                        <div className=" items-center mb-4">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Consumibles</h5>

                            <input
                                type="text"
                                className="border border-gray-700 p-2 rounded mb-5"
                                placeholder="Buscar"
                                onChange={handleChange}
                            // value = {busqueda}

                            />
                        </div>
                        <div className="flow-root h-96">
                            <ul className="divide-y divide-gray-200 dark:divide-gray-700 overflow-auto">
                                {

                                    query.trim().length > 0 ?
                                        (
                                            stateReserva.searchProduct.map(c => (

                                                <li key={c.prod_cod_prod} className="py-3 sm:py-4">
                                                    <div className="flex items-center space-x-4">

                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                {c.prod_nom_prod}
                                                            </p>
                                                        </div>
                                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                            ${parseFloat(c.columna).toFixed(2)}
                                                        </div>

                                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                            <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal"
                                                                onClick={() => clicked(c)}>
                                                                Escoger
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>

                                            ))
                                        ) : (

                                            <>
                                                {
                                                    stateReserva.searchProduct.map(i => (
                                                        // se agreg?? la key
                                                        <li key={i.prod_cod_prod} className="py-3 sm:py-4">
                                                            <div className="flex items-center space-x-4">


                                                                <div className="flex-1 min-w-0">
                                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                        {i.prod_nom_prod}

                                                                    </p>
                                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                                        {i.prod_cod_prod}
                                                                    </p>
                                                                </div>
                                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                    ${parseFloat(i.columna).toFixed(2)}
                                                                </div>

                                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                    <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal"
                                                                        onClick={() => clicked(i)}
                                                                    >
                                                                        Escoger
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </li>
                                                    ))

                                                }
                                                <Stack spacing={2} sx={{ mt: 2 }}>
                                                    <Pagination count={Math.ceil(stateReserva.consumible.length / limite)} color="primary" onChange={handleChangePage} sx={{
                                                        justifyContent: "center",
                                                        alignSelf: "center"
                                                    }} />
                                                </Stack>
                                            </>

                                        )
                                }




                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal"
                                        onClick={handleCancelClick}
                                    >
                                        Salir
                                    </button>
                                </div>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default ModalConsumibles