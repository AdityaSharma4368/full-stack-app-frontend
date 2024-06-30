import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getFakeData } from "../actions/fake-data";

type EntityState = {
  loading: boolean;
  error: string | null;
  data: any;
  skeletonLoading: boolean;
};

const initialState: EntityState = {
  loading: false,
  skeletonLoading: false,
  error: null,
  data: [],
};

const fakeDataSlice = createSlice({
  name: "fakeData",
  initialState,
  reducers: {
    setFakeData: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getFakeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFakeData.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getFakeData.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFakeData } = fakeDataSlice?.actions;
export default fakeDataSlice.reducer;
