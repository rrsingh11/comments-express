import axios from 'axios'

const server = axios.create ({
    baseURL: "http://localhost:2969",
})

export default server