import React, { useEffect } from 'react';
// navegacion se usa https://www.youtube.com/watch?v=afDXVnDnBf4   https://reactrouter.com/en/v6.3.0/getting-started/installation

import './App.css';
import NavBar from './componentes/navBar';
import RoomCard from './componentes/HotelRoom';
import Decoration from './componentes/Decoration';
import Total from './componentes/Total';
import { useDispatch } from 'react-redux';
import Sucursales from './controllers/Sucursales';
import ModalConsumibles from './componentes/ModalConsumables';
import DatosCliente from './componentes/DatosCliente';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(Sucursales())

  }, [dispatch])

  return (
    <>
      <div className="App  h-max max-w-full max-h-full  container  ">
        <div className=' border-cyan-200 break-words ' >
          <NavBar />
        </div>

        <div className='fixed border-cyan-200 break-words float-left' >
          <Total />
        </div>
        <div className='mt-24 pl-40 border-slate-600'>
          <RoomCard />
        </div>

        <div className='mt-20 pl-40   border-slate-600'>
          <Decoration />
        </div>

        <div className='mt-20 pl-40  border-slate-600'>
          <ModalConsumibles/>
        </div>

        <div className='mt-20 pl-40   border-slate-600'>
          <DatosCliente />
        </div>
      </div>
    </>

  );
}

export default App;
