import axios from 'axios';


const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
    params:{
        "api_key" : "299f0174d405078e52f6aa0543dfbf85",
    }
});

api.get("tv/popular");

export default api;