import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getFakeData } from "../actions/fake-data";
import { userDataLogin } from "../actions/user";

type UserSliceState = {
  loading: boolean;
  error: string | null;
  userData: any;
};

const initialState: UserSliceState = {
  loading: false,
  error: null,
  userData: [],
};

const userSlice = createSlice({
  name: "userDataSlice",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = [...state.userData, action.payload];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(userDataLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userDataLogin.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(userDataLogin.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUserData } = userSlice?.actions;
export default userSlice.reducer;
