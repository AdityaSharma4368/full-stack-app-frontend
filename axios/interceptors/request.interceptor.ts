import { InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

//ToDo: add intercepting logic
export const requestInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  // const token = Cookies.get("token");
  const token =""
  // config.headers.Authorization = `Bearer ${token}`;
  config.headers["Content-Type"] = "application/json, text/plain";
  return config;
};
