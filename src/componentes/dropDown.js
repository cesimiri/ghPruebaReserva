
// libreria para el dropDown npm i react-select
// recurso = https://www.youtube.com/watch?v=3lpVqgLh7vw&t=618s&ab_channel=C%C3%B3digoAV

import React from "react";
import Select from "react-select";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import TipoHabitaciones from "../controllers/Tipohabitaciones";
import { datosHotelCod, datosHotelNombre, dropDownCalendaryState } from "../reducers/Sucursales";

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
    dispatch(dropDownCalendaryState())

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

