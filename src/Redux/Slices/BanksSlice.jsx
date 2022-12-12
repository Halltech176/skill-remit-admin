import { createSlice } from "@reduxjs/toolkit";
import { Banks } from "../Actions";
const initialState = {
  loading: false,
  banks: null,
  error: false,
};
const Bank = createSlice({
  name: "banks",
  initialState,
  reducers: {},
  extraReducers: {
    [Banks.fulfilled]: (state, action) => {
      state.loading = false;
      state.banks = action.payload;
      state.error = false;
    },
    [Banks.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.banks = null;
    },
    [Banks.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.banks = null;
    },
  },
});

// const initialState = {
//     loading: false,
//     user: null,
//     error: false,
//   };
//   const UserProfile = createSlice({
//     name: "user",
//     initialState,
//     reducers: {},
//     extraReducers: {
//       [User.fulfilled]: (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.error = false;
//       },
//       [User.pending]: (state) => {
//         state.loading = true;
//         state.error = false;
//         state.user = null;
//       },
//       [User.rejected]: (state) => {
//         state.loading = false;
//         state.error = true;
//         state.user = null;
//       },
//     },
//   });
export const banksReducer = Bank.reducer;
