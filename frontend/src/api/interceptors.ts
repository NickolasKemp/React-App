import axios, {type CreateAxiosDefaults} from 'axios';

const options:CreateAxiosDefaults = {
  baseURL: 'http://localhost:5000/api',
  headers: {
    "Content-Type" : 'application/json'
  }
}

const axiosInstance = axios.create(options)

export {axiosInstance}