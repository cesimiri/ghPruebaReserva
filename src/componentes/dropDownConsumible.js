// libreria para el dropDown npm i react-select
// recurso = https://www.youtube.com/watch?v=3lpVqgLh7vw&t=618s&ab_channel=C%C3%B3digoAV

import React from "react";
import Select from "react-select";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import Consumibles from "../controllers/Consumibles";
import ModalConsumibles from "./ModalConsumables";

const DropDownConsumable = () => {
  //state.reserva o como se llame en el store
  const hotelesState = useSelector(state => state.sucursales)
  const [modalOn, setModalOn] = useState(false);
  const [choise, setChoice] = useState(false);

  const stateReserva = useSelector(state => state.sucursales)
  const dispatch = useDispatch();

  

  const handleSelectChange = (event) => {
    
    const datos = {
      idConsumible : parseInt(event.value),
      idSucursal :  parseInt(stateReserva.reserva.hotelCod) 
    }

    dispatch(Consumibles(datos))
    setModalOn(true)
    
  }

  return (
    <>
      {
        stateReserva.stateComponent.decoracionState === true ? (
          <div className="p-4 mx-auto max-w-2xl bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div>
              <Select
                defaultValue={{ label: 'Adicionales', value: 'Vacio ' }}
                options={hotelesState.seleccionProductos.map(local => ({ label: local.nombre, value: local.id }))}
                onChange={handleSelectChange}
              />
            </div>
            {modalOn && < ModalConsumibles setModalOn={setModalOn} setChoice={setChoice} />}
          </div>
        ) : (
          <>
          </>
        )
      }
    </>

  )
}
export default DropDownConsumable;