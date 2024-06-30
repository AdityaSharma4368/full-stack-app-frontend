import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginData, UserDataAPI } from "../../services/api/user";

export const userDataLogin = createAsyncThunk(
  "user/login",
  async (data: LoginData, thunkApi) => {
    try {
      const res = await UserDataAPI.post(data);
      return res.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error?.message);
    }
  }
);
