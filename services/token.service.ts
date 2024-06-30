// import cookieService from "./cookie.service";
import { post } from "./api";
import { API } from "./api/CONSTANTS";
// import decode from "jwt-decode";
// import { JwtPayloadExtra } from "contexts/auth-context/auth-context-provider.interace";

const TOKEN_KEY = "token";
const TokenService = {
  getToken: (key: string = TOKEN_KEY): string | undefined =>
    localStorage.getItem(key) as string,
  setToken: (key: string = TOKEN_KEY, token: string): string | undefined =>
    localStorage.setItem(key, token) as any,
  isTokenValid: async (token: string): Promise<boolean> => {
    const res = await post(`${API.USER.TOKEN.VALIDATE}`, {});
    return res?.data?.status === 401;
  },
  removeToken: (key: string = TOKEN_KEY): void => localStorage.removeItem(key),
};

export default TokenService;
