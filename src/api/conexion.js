// npm install axios

import axios from "axios"

const instaciaAxios = axios.create({
    baseURL: "http://192.168.10.73:81/reserva/api",
    headers:{
        "Content-Type" : "application/json",
    },
})
export default instaciaAxios;