
import './App.css';
import NavBar from './componentes/navBar';
import Dropdown from './componentes/dropDown';
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
      
    </div>
      
      
  );
}

export default App;
