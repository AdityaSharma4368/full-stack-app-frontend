import { Action, configureStore } from "@reduxjs/toolkit";
import {thunk, ThunkAction, ThunkDispatch } from "redux-thunk";
import fakeData from "./slices/fake-data";
import userDataSlice from "./slices/user-slice";

//Configure redux store
const store = configureStore({
  reducer: { fakeData, userDataSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: thunk,
      },
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === "development",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<AppDispatch, any, any>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
