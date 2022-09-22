//https://mui.com/x/react-date-pickers/getting-started/
// formato de la fecha https://day.js.org/docs/en/plugin/advanced-format
//npm install dayjs
//npm install date-fns

import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useDispatch, useSelector } from 'react-redux/'
import { setFecha, setHora, tipoHabitacionesState } from '../reducers/Sucursales';

const Calendary = () => {
    const stateReserva = useSelector(state => state.sucursales)
    const dispatch = useDispatch()
    const [value, setValue] = React.useState(dayjs());

    const handleChange = (newValue) => {
        setValue(newValue);
        dispatch(setFecha(value.format('DD/MM/YYYY')))
        dispatch(setHora(value.format('HH:mm')))
        dispatch(tipoHabitacionesState())
    };

    return (
        < >
            {
                //si se dió a grabar se bloquea
                stateReserva.stateComponent.botonDatos === !false ? (
                    stateReserva.stateComponent.dropDownCalendaryState === true ? (
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <Stack >
                                <DateTimePicker
                                    className='bg-white '
                                    // label="Fecha Reserva"
                                    value={value}
                                    onChange={handleChange}
                                    disabled={stateReserva.stateComponent.botonDatos}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>) : (<> </>)

                ) : (
                    stateReserva.stateComponent.dropDownCalendaryState === true ? (
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <Stack >
                                <DateTimePicker
                                    className='bg-white '
                                    // label="Fecha Reserva"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>) : (<> </>)
                )
            }

        </>


    )
}
export default Calendary;