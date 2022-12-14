import { createSlice } from "@reduxjs/toolkit";
import Sucursales from "../controllers/Sucursales";
import TipoHabitaciones from "../controllers/Tipohabitaciones";
import Decoracion from "../controllers/Decoracion";
import Consumibles from "../controllers/Consumibles";
const initialState = {

    stateComponent: {
        tipoHabitacionState: false,
        decoracionState: false,
        consumibleSate: false,
        comestiblesState: false,
        dropDownConsumible: false,
    },
    reserva: {
        ClienteNombres: '',
        clienteApellidos: '',
        clienteEmail: '',
        clienteTelefono: '',
        clienteDireccion: '',
        hotelCod: 0,
        hotelNombre: '',
        cuartoCod: 0,
        cuartoNombre: '',
        cuartoPrecio: 0,
        decoracionCod: 0,
        decoracionNombre: '',
        decoracionPrecio: 0,
        listaConsumibles: [
            {
                productoCod: 0,
                productoCantidad: 1,
                productoNombre: '',
                productoPrecio: 0,

            },
        ],
        datosCliente: {

            clienteNombre: '',
            clienteApellidos: '',
            clienteCedula: '',
            clientetelefono: '',
        },
    },
    isLoading: false,
    sucursales: [],
    tipoHabitaciones: [],
    decoracion: [],
    consumible: [],
    searchProduct: [],
    buscador: '',
    seleccionProductos: [
        {
            id: 1740,
            nombre: 'PLATOS A LA CARTA'
        },
        {
            id: 1741,
            nombre: 'BEBIDAS'
        },
        {
            id: 1742,
            nombre: 'OTROS'
        },
    ],
    arrayProductosSelect: [],
    ValoresASumar: 0,
    valorTotal: 0,
    arrayValores: [],
}

const SucursalesSlice = createSlice({
    name: "sucursales",
    initialState: initialState,
    reducers: {
        // todos los reduceers aqui 
        sucursalesState: (state, action) => {
            const id = 2

            state.sucursales.id = id
        },
        consumiblesState: (state, action) => {
            const id = 2
            state.consumible.id = id
        },
        setBuscador: (state, action) => {
            const algo = action.payload
            // state.buscador = algo

            state.searchProduct = state.consumible.filter((elemento) => {

                // console.log(elemento.prod_nom_prod)
                if (elemento.prod_nom_prod != null) {
                    return elemento.prod_nom_prod.toString().toLowerCase().includes(algo.toLowerCase())
                }
            })
        },
        setClienteNombre: (state, action) => {
            const algo = action.payload
            state.reserva.clienteNombres = algo
        },
        setClienteApellidos: (state, action) => {
            const algo = action.payload
            state.reserva.clienteApellidos = algo
        },
        setClienteEmail: (state, action) => {
            const algo = action.payload
            state.reserva.clienteEmail = algo
        },
        setclienteTelefono: (state, action) => {
            const algo = action.payload
            state.reserva.clienteTelefono = algo
        },
        setClienteDireccion: (state, action) => {
            const algo = action.payload
            state.reserva.clienteDireccion = algo
        },
        setProductosPage: (state, action) => {
            let { pagina, limite } = action.payload

            if (parseInt(limite) == 0) limite = 10

            state.searchProduct = state.consumible.slice((pagina - 1) * limite, pagina * limite)

        },
        tipoHabitacionesState: (state, action) => {
            const id = 2
            state.tipoHabitaciones.id = id
            console.log(state.tipoHabitaciones)
        },
        decoracionState: (state, action) => {
            const id = 2

            state.decoracion.id = id
        },
        stateCuarto: (state, action) => {
            const stateCuarto = action.payload
            state.stateComponent.tipoHabitacionState = stateCuarto
        },
        stateDecoracion: (state, action) => {
            const stateDecoracion = action.payload
            state.stateComponent.decoracionState = stateDecoracion
        },
        stateDropDownConsumible: (state, action) => {
            const stateDropDownConsumible = action.payload
            state.stateComponent.dropDownConsumible = stateDropDownConsumible
        },
        changeProducto: (state, action) => {
            const { prod_cod_prod, prod_cant, columna } = action.payload,
                position = 0

            const existe = state.arrayProductosSelect.find(item => parseInt(item.prod_cod_prod) === parseInt(prod_cod_prod))

            if (!existe) {
                state.arrayProductosSelect.push(action.payload)
            } else {
                position = state.arrayProductosSelect.findIndex(item => parseInt(item.prod_cod_prod) === parseInt(prod_cod_prod))

                let item = action.payload

                item.prod_can_prod = item.prod_can_prod + 1

                state.arrayProductosSelect[position] = { ...item }

            }

            if (existe) {
                state.arrayValores[position] = columna * prod_cant
            } else {
                state.arrayValores.push(columna * prod_cant)
            }

        },
        datosCuarto: (state, action) => {
            const tpHb = state.tipoHabitaciones[action.payload]
            state.reserva.cuartoCod = tpHb.tiha_cod_tiha
            state.reserva.cuartoNombre = tpHb.tiha_nom_tiha
            state.reserva.cuartoPrecio = tpHb.tiha_cos_maxi

        },
        datosHotelCod: (state, action) => {
            const dh = action.payload
            state.reserva.hotelCod = dh
        },
        datosHotelNombre: (state, action) => {
            const dh = action.payload
            state.reserva.hotelNombre = dh
        },
        datosDecoracion: (state, action) => {
            const tpD = state.decoracion[action.payload]
            state.reserva.decoracionCod = tpD.decora_decora
            state.reserva.decoracionNombre = tpD.decora_nombre
            state.reserva.decoracionPrecio = tpD.decora_cosmax
        },
        sumaTotCons: (state) => {

            if (state.arrayValores.length > 0) {
                state.valorTotal = state.arrayValores.reduce((x, i) => parseFloat(x) + parseFloat(i))
            }

        },
        sumarItem: (state, action) => {

            let { prod_cod_prod, prod_cant } = action.payload

            const existe = state.arrayProductosSelect.find(c => parseInt(c.prod_cod_prod) === parseInt(prod_cod_prod))

            if (existe) {
                const position = state.arrayProductosSelect.findIndex(c => parseInt(c.prod_cod_prod) === parseInt(prod_cod_prod))

                existe.prod_cant += 1

                state.consumible[position] = { ...existe }

                let ValoresASumar = existe.columna * existe.prod_cant

                if (state.consumible[position]) {
                    state.arrayValores[position] = ValoresASumar
                }

            }

        },
        restarItem: (state, action) => {
            let { prod_cod_prod, prod_cant } = action.payload

            const existe = state.arrayProductosSelect.find(c => parseInt(c.prod_cod_prod) === parseInt(prod_cod_prod))

            if (existe) {
                if (existe.prod_cant > 1) {
                    const position = state.arrayProductosSelect.findIndex(c => parseInt(c.prod_cod_prod) === parseInt(prod_cod_prod))

                    existe.prod_cant = prod_cant - 1

                    state.consumible[position] = { ...existe }

                    let ValoresARestar = existe.columna * existe.prod_cant

                    if (state.consumible[position]) {
                        state.arrayValores[position] = ValoresARestar
                    }
                }


            }
        },
        eliminarItem: (state, action) => {
            let { prod_cod_prod, prod_cant } = action.payload

            const existe = state.arrayProductosSelect.find(c => parseInt(c.prod_cod_prod) === parseInt(prod_cod_prod))

            if (existe) {
                const position = state.arrayProductosSelect.findIndex(c => parseInt(c.prod_cod_prod) === parseInt(prod_cod_prod))
                state.arrayProductosSelect.splice(position, 1);
                state.arrayValores.splice(position, 1);
            }
        },
    },
    extraReducers: {
        [Sucursales.pending]: (state, action) => {
            state.isLoading = true
        },
        [Sucursales.fulfilled]: (state, action) => {
            state.isLoading = false

            // console.log(action.payload)
            const { estado, mensaje, data } = action.payload

            if (estado === 1) {

                const { sucursales } = data
                state.sucursales = [...sucursales]
            }
        },
        [Consumibles.pending]: (state, action) => {
            state.isLoading = true
        },
        [Consumibles.fulfilled]: (state, action) => {
            state.isLoading = false

            const { estado, mensaje, data } = action.payload

            if (estado === 1) {
                // consumible es el nombre que se le dio al array en la clase CConsumible array('consumible' => $exec));
                const { consumible } = data
                // console.log(consumible) para mapear el array de objeto y traer los campos con valor
                consumible.map((i)=>{
                    if(i.columna){
                        state.consumible.push(i)
                    }
                })
                // state.consumible = [...consumible]
            }
        },
        [Decoracion.pending]: (state, action) => {
            state.isLoading = true
        },
        [Decoracion.fulfilled]: (state, action) => {
            state.isLoading = false
            const { estado, mensaje, data } = action.payload

            // console.log(action.payload)
            if (estado === 1) {
                const { decoracion } = data
                state.decoracion = [...decoracion]
                // console.log(state.decoracion)
            } else {
            }
        },

        [TipoHabitaciones.pending]: (state, action) => {
            state.isLoading = true
        },
        [TipoHabitaciones.fulfilled]: (state, action) => {
            state.isLoading = false
            const { estado, mensaje, data } = action.payload

            if (estado === 1) {
                const { Tipo_de_habitaciones } = data
                state.tipoHabitaciones = [...Tipo_de_habitaciones]
            }

        },
    }

})
export const { sucursalesState, consumiblesState, setProductosPage,
    tipoHabitacionesState, decoracionState, stateCuarto, stateDecoracion,
    setBuscador,
    changeProducto, datosCuarto, datosHotelCod, datosHotelNombre, datosDecoracion,
    sumarItem, restarItem, sumaTotCons, eliminarItem,
    setClienteNombre, setClienteApellidos, setClienteEmail, setclienteTelefono, setClienteDireccion,
}
    = SucursalesSlice.actions;
export default SucursalesSlice.reducer;

