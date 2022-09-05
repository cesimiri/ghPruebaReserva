import { createSlice } from '@reduxjs/toolkit'
import sencilla from '../../assets/img/sencilla.jpg';
import suit1 from '../../assets/img/suit1.jpg';
import suit3 from '../../assets/img/suit3.jpg';


const initialState = {

    horaFecha: '2022-08-16',
    hotelSelect: 0,
    habitaciones: [],


    estadoReserva: {
        cuartoState: false,
        decoracionState: false,
        consumibleState: false
    },

    TotalDeGasto: {
        fehaReserva: '',
        nombreCuarto: '',
        valorCuarto: 0,
        ListaConsumo: [],
        totalConsumo: 0

    },
    decoracion: [
        {
            imagen: 'http://larutadelplacer.ec/wp-content/uploads/2019/09/SENCILLAB.jpg',
            nombreDecoracion: 'sencilla ',
            descripcion: 'cuarto normal con caja de preservativos',
            precio: 5
        },
        {
            imagen: 'https://decoratips.com/wp-content/uploads/2021/04/IMAGEN-4-26.jpg',
            nombreDecoracion: 'cumpleaños',
            descripcion: 'globos, botella Wisky, perfume, torta',
            precio: 10.00
        },
        {
            imagen: 'http://larutadelplacer.ec/wp-content/uploads/2019/09/suiteA.jpg',
            nombreDecoracion: '14 febero',
            descripcion: 'globos rosas',
            precio: 15.00
        },
        {
            imagen: 'http://larutadelplacer.ec/wp-content/uploads/2019/09/WhatsApp-Image-2016-11-12-at-20.45.40.jpeg',
            nombreDecoracion: 'Aniversario',
            descripcion: 'Globos amor, jacuzzis, peluche',
            precio: 20.00
        }
    ],
    consumible: [
        {
            id: 1,
            imagen: 'https://img.freepik.com/foto-gratis/resumen-superficie-texturas-muro-piedra-hormigon-blanco_74190-8189.jpg',
            nombre: 'No gracias',
            descripcion: '',
            precio: 0,
        },
        {
            id: 2,
            imagen: 'https://licoreschullavida.com/wp-content/uploads/2020/07/Papas-Ruffles.jpg',
            nombre: 'Ruffles',
            descripcion: 'Papas Ruffles naturales 100 gr',
            precio: 1.50,
        },
        {
            id: 3,
            imagen: 'https://www.farmaciasmedicity.com/3887-large_default/five-preservativos-steel-caja-con-5-unidades.jpg',
            nombre: 'Preservativos',
            descripcion: 'preservativos five condoms de 5 unidades',
            precio: 5.00,
        },
    ],
    h: [
        {
            id: 1,
            hotel: 'Green House',
            imagen: 'http://larutadelplacer.ec/wp-content/uploads/2019/09/f5.png',
            fecha: '',
            habitacion: [
                {
                    id: 1,
                    nombreCuarto: 'SENCILLA',
                    imagen: sencilla,
                    descripcion: 'Tv 25", 2 plazas, baño completo, AC',
                    disponible: 5,
                    reservado: false,
                    valor: 20.00
                },
            ],
        },
        {
            id: 2,
            hotel: 'Extasis Durán',
            imagen: 'http://larutadelplacer.ec/wp-content/uploads/2019/09/f1.jpg',
            fecha: '',
            habitacion: [
                {
                    id: 1,
                    nombreCuarto: 'SENCILLA',
                    imagen: sencilla,
                    descripcion: 'Tv 25", 2 plazas, baño completo, AC',
                    disponible: 5,
                    reservado: false,
                    valor: 20.00
                },
                {
                    id: 2,
                    nombreCuarto: 'MEDIA SUIT',
                    imagen: suit1,
                    descripcion: 'TV 50", 2 plazas, baño completo,AC, jacuzzi',
                    disponible: 5,
                    reservado: false,
                    valor: 30.00
                },
            ],
        },
        {
            id: 3,
            hotel: 'Extasis sur',
            imagen: 'http://larutadelplacer.ec/wp-content/uploads/2019/09/f2.jpg',
            fecha: '',
            habitacion: [
                {
                    id: 1,
                    nombreCuarto: 'SENCILLA',
                    imagen: sencilla,
                    descripcion: 'Tv 25", 2 plazas, baño completo, AC',
                    disponible: 5,
                    reservado: false,
                    valor: 20.00
                },
                {
                    id: 2,
                    nombreCuarto: 'MEDIA SUIT',
                    imagen: suit1,
                    descripcion: 'cuarto con media suit',
                    disponible: 5,
                    reservado: false,
                    valor: 30.00
                },
                {
                    id: 3,
                    nombreCuarto: 'SUIT COMPLETA',
                    imagen: suit3,
                    descripcion: 'tv 50", cama 2plza, sauna, jacuzzi, AC',
                    disponible: 5,
                    reservado: false,
                    valor: 50.00
                },
            ],
        },
    ]
}

const reservaSlice = createSlice({
    name: 'reserva',
    initialState: initialState,
    reducers: {
        fechaHora: (state, action) => {
            const fecha = action.payload

            state.horaFecha = fecha
        },

        buscarHotel: (state, action) => {

            const id = action.payload

            state.hotelSelect = id

            const postion = state.h.findIndex(item => item.id === id)

            state.habitaciones = []

            const habitaciones = state.h[postion].habitacion

            state.habitaciones.push(...habitaciones)
        },
        agregarListaConsumo: (state, action) => {

            //  state.TotalDeGasto.ListaConsumo = consumo
            const { precio, nombre, id } = action.payload

            console.log("Payload => ", action.payload)

            console.log("Longitud => ", state.TotalDeGasto.ListaConsumo.length)


            console.log("ID OBJETO =>", id)

            if (parseInt(id) !== 1) {

                if (state.TotalDeGasto.ListaConsumo.length === 0) {

                    console.log("Aqui")
                    state.TotalDeGasto.ListaConsumo.push({ id, precio, nombre })

                } else {


                    const existe = state.TotalDeGasto.ListaConsumo.find(item => item.id === id)

                    if (!existe) {
                        state.TotalDeGasto.ListaConsumo.push({ id, precio, nombre })
                    }

                    // state.TotalDeGasto.ListaConsumo.forEach((item)=>{
                    //     console.log("Items=> ",item.id)
                    //     // console.log("id", id)

                    //     // if( parseInt(id) !== parseInt(item.id) ){

                    //     //     state.TotalDeGasto.ListaConsumo.push({ id,precio, nombre  })
                    //     // }
                    // })
                }
            }
        },
        agregarfecha: (state, action) => {
            const fechaValor = action.payload
            state.TotalDeGasto.fehaReserva = fechaValor
        },
        agregarcuarto: (state, action) => {
            const cuartoValor = action.payload
            state.TotalDeGasto.valorCuarto = cuartoValor
        },
        agregarCuartoNombre: (state, action) => {
            const cuartoNombre = action.payload
            state.TotalDeGasto.nombreCuarto = cuartoNombre
        },
        agregardecoracion: (state, action) => {
            const decoracionValor = action.payload
            state.TotalDeGasto.valorDecoracion = decoracionValor
        },
        agregarDecoracionNombre: (state, action) => {
            const decoracionNombre = action.payload
            state.TotalDeGasto.nombreDecoracion = decoracionNombre
        },
        stateCuarto: (state, action) => {
            const stateCuarto = action.payload
            state.estadoReserva.cuartoState = stateCuarto
        },
        stateConsumible: (state, action) => {
            const stateConsumible = action.payload
            state.estadoReserva.consumibleState = stateConsumible
        },
        stateDecoracion: (state, action) => {
            const stateDecoracion = action.payload
            state.estadoReserva.decoracionState = stateDecoracion
        },

    }
})
export const { agregarListaConsumo, buscarHotel, fechaHora, agregarcuarto, agregardecoracion, agregarconsumible, stateCuarto, stateConsumible,
    stateDecoracion, agregarCuartoNombre, agregarDecoracionNombre,
}
    = reservaSlice.actions;
export default reservaSlice.reducer;

