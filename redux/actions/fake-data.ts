import { createAsyncThunk } from "@reduxjs/toolkit";
import { FakeDataAPI } from "../../services/api/fakeData";

export const getFakeData = createAsyncThunk(
  "user/data",
  async (data, thunkApi) => {
    try {
      const res = await FakeDataAPI.get();
      return res.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error?.message);
    }
  }
);