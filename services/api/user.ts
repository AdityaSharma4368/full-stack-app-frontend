import { del, get, post, put } from "./index";
import { AxiosResponse } from "axios";
import { API } from "./CONSTANTS";

export interface LoginData {
  email: string;
  password: string;
}

export const UserDataAPI = {
  //   get: () => get(API.USER.LOGIN) as Promise<AxiosResponse<any[]>>,
  post: (data: LoginData) => post(API.USER.LOGIN, data),
};
