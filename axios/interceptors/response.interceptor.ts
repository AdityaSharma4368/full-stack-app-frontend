import { AxiosResponse } from "axios";

export const responseInterceptor = (config: AxiosResponse): AxiosResponse => {
  const headers = config.headers;
  if (headers?.location) {
    // ToDo: to check for config data as array
    const loc = headers.location.split("/");
    config.data = {id: loc[loc.length - 1], ...config.data} ;
  }
  
  return config;
};
