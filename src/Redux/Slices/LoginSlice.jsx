import { createSlice } from "@reduxjs/toolkit";
import { Login } from "../Actions";

const initialState = {
  loading: false,
  login: null,
  error: false,
};
const login = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [Login.fulfilled]: (state, action) => {
      state.loading = false;
      state.login = action.payload;
      state.error = false;
    },
    [Login.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.login = null;
    },
    [Login.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.login = null;
    },
  },
});

export const LoginReducer = login.reducer;
