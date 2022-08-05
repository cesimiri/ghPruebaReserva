import {useSelector} from 'react-redux';

const DatosReserva = () =>{
    const stateReserva = useSelector(state => state.reserva)

    const mensaje = ()=> {
        alert(`Se realizo su reserva para el hotel `);
    }
        
    
    return(
        <div className='text-white font-bold'>
            {stateReserva.map(reserva =>(
                <div key = {reserva.id}>
                    <h3 className='border'>{reserva.hotel}</h3>
                    <p>{reserva.fecha}</p>
                    <p>{reserva.hotel}</p>  
                </div>
            ))}
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={()=>mensaje()}>
                Button
            </button>
        </div>


    )
}

export default DatosReserva;