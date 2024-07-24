import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    
    params : {
        key: '73e4a277332242458600874d108c8c2c'
    }
    });