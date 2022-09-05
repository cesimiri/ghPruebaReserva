<<<<<<< HEAD
=======
import React, { useEffect } from 'react';
>>>>>>> 743b2641213f14d2535eb0344bb8c58521eaf5da

import './App.css';
import NavBar from './componentes/navBar';
import Dropdown from './componentes/dropDown';
<<<<<<< HEAD
import Calendary from './componentes/calendary';
import DatosHoteles from './componentes/DatosHoteles';

function App() {
  return (

    <div className="App bg-black ">
      <p className="text-gray-300 text-center">BIENVENIDO</p>  
      <NavBar/>
      
      <div className='p-14 flex-row w-3/4'>
      
        <div className='pl-32 pt-5 float-left flex-row' >
        <Dropdown/>
        </div>
        <p className='text-white float-right'>Escoga la fecha a separar</p>
        <br/>
        <div className='float-right' >
        <Calendary/>
        </div>
      </div>

      <div  className='p-14 flex-row w-3/4'>
        <DatosHoteles/>
      </div>
      
=======
import RoomCard from './componentes/HotelRoom';
import Decoration from './componentes/Decoration';
import Total from './componentes/Total';
import { useDispatch } from 'react-redux';
import Sucursales from './controllers/Sucursales';
import DropDownConsumable from './componentes/dropDownConsumible';
import DatosCliente from './componentes/DatosCliente';
//import { alpha } from '@material-ui/core/styles'

function App() {

  const dispatch = useDispatch()

  useEffect( ()=>{

    dispatch(Sucursales())

  },[dispatch] )

  return (

    <div className="App bg-slate-600 max-w-full h-full container">
      <NavBar/>
      
      <div className='pl-16 pt-5 float-left flex-row' >
      <p className='text-white'>SELECCIÓN DE HOTEL</p>
        <Dropdown/>
      </div>
      <div className='float-right pr-40' >
        <br/>
        <p className='text-white'>SELECCIÓN DE FECHA DE RESERVA</p>
        
      </div>
      {/* mt-20 */}
      <div  className=' fixed  border-cyan-200 w-80 text-center break-words float-right'>
       <Total/>
      </div>

      <div  className='mt-20   object-center   border-slate-600'>
       <RoomCard/>
      </div>

      <div  className='mt-20 object-center   border-slate-600'>
       <Decoration/>
      </div>
      
      <div  className='mt-20 object-center   border-slate-600'>
       <DropDownConsumable/>
      </div>

      <div  className='mt-20 object-center   border-slate-600'>
       <DatosCliente/>
      </div>


>>>>>>> 743b2641213f14d2535eb0344bb8c58521eaf5da
    </div>
      
      
  );
}

export default App;
