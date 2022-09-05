<<<<<<< HEAD

const DropDown = () => {
    return (
        <button id="dropdownDividerButton" 
            data-dropdown-toggle="dropdownDivider" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
            type="button">
            Seleccion su destino 
            <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
    )
    }

export default DropDown;

// libreria para el dropDown npm i react-select
// recurso = https://www.youtube.com/watch?v=3lpVqgLh7vw&t=618s&ab_channel=C%C3%B3digoAV

import React from "react";
import Select from "react-select";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import TipoHabitaciones from "../controllers/Tipohabitaciones";
import { datosHotelCod, datosHotelNombre } from "../reducers/Sucursales";

const DropDown = () => {
  //state.reserva o como se llame en el store
  const hotelesState = useSelector(state => state.sucursales)

  const dispatch = useDispatch();

  //si se desea solo ver o el value se cambia el event por {value}
  const handleSelectChange = (event) => {

    dispatch(TipoHabitaciones(event.value))
    console.log('el id del local es ' + event.value)
    dispatch(datosHotelCod(event.value))
    dispatch(datosHotelNombre(event.label))

  }

  return (
    <div>
      <div>
        <Select
          defaultValue={{ label: 'Seleccione un local', value: 'Vacio ' }}
          options={hotelesState.sucursales.map(local => ({ label: local.sucu_nom_sucu, value: local.sucu_cod_sucu }))}
          onChange={handleSelectChange}
        />
      </div>
    </div>
  )
}
export default DropDown;
>>>>>>> 743b2641213f14d2535eb0344bb8c58521eaf5da
