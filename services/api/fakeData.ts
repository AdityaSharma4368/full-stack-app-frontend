import { del, get, post, put } from "./index";
import { AxiosResponse } from "axios";
import { API } from "./CONSTANTS";

export const FakeDataAPI = {
  get: () => get(API.FAKE_DATA.INDEX) as Promise<AxiosResponse<any[]>>,
};
