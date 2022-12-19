import { createSlice } from "@reduxjs/toolkit";
import { AddBank } from "../Actions";
const initialState = {
  loading: false,
  addBank: null,
  error: false,
};
const Add = createSlice({
  name: "addBank",
  initialState,
  reducers: {},
  extraReducers: {
    [AddBank.fulfilled]: (state, action) => {
      state.loading = false;
      state.addBank = action.payload;
      state.error = false;
    },
    [AddBank.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.addBank = null;
    },
    [AddBank.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.addBank = null;
    },
  },
});

export const AddBankReducer = Add.reducer;
