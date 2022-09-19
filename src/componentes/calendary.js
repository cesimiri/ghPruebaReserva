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
import { useDispatch } from 'react-redux/'
import { setFecha , setHora } from '../reducers/Sucursales';

const Calendary = () => {
    // const stateReserva = useSelector(state => state.sucursales)
    const dispatch = useDispatch()
    const [value, setValue] = React.useState(dayjs());

    const handleChange = (newValue) => {
        setValue(newValue);
        dispatch(setFecha(value.format('DD/MM/YYYY')))
        dispatch(setHora(value.format('HH:mm')))
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack>
                <DateTimePicker
                    className='bg-sky-100'
                    label="Fecha Reserva"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Stack>
        </LocalizationProvider>

    )
}
export default Calendary;