// importando axios
import axios from "axios";

// criando uma const que exporta a base do axios
const api = axios.create ({
    baseURL: 'https://fakestoreapi.com'
})