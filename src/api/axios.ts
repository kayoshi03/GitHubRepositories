import axios, {CreateAxiosDefaults} from "axios";

const options:CreateAxiosDefaults = {
    baseURL: "https://api.github.com",
    headers: {
        "Authorization" : `Bearer ${import.meta.env.VITE_KEY}`
    }
}
const API = axios.create(options)

export {API}