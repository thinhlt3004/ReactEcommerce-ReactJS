import axios from 'axios';


export const publicRequest = axios.create({
    baseURL :  process.env.REACT_APP_API_URL
});
