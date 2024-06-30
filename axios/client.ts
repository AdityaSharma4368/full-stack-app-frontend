import axios from "axios";
import { requestInterceptor } from "./interceptors/request.interceptor";
import { responseInterceptor } from "./interceptors/response.interceptor";
const client = axios.create();
// client.defaults.baseURL = process.env.REACT_APP_API_URL;
client.defaults.baseURL = "http://localhost:8000";
client.defaults.withCredentials = true;
client.interceptors.request.use(requestInterceptor);
client.interceptors.response.use(responseInterceptor);

export default client;
