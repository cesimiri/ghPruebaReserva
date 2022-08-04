
import './App.css';
import NavBar from './componentes/navBar';
import Dropdown from './componentes/dropDown';
import Calendary from './componentes/calendary';

function App() {
  return (
    <div className="App" class="bg-black h-screen">
      <p class="text-gray-300 text-center">BIENVENIDO</p>  
      <NavBar/>
      
      <div className='p-14 flex-row w-3/4'>
        <div className='pl-32 float-left flex-row' >
        <Dropdown/>
        </div>
        <div className='float-right' >
        <Calendary/>
        </div>
        
      
      </div>
    </div>
      
      
  );
}

export default App;
