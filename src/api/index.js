import axios from "axios";


const $axios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'X-API-Key': process.env.CAT_API_KEY
    },
});

export default $axios;
