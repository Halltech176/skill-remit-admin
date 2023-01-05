import { createSlice } from "@reduxjs/toolkit";
import { UserAccount } from "../Actions";

const initialState = {
  loading: false,
  user_account: null,
  error: false,
};
const UserAccountProfile = createSlice({
  name: "user_account",
  initialState,
  reducers: {},
  extraReducers: {
    [UserAccount.fulfilled]: (state, action) => {
      state.loading = false;
      state.user_account = action.payload;
      state.error = false;
    },
    [UserAccount.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.user_account = null;
    },
    [UserAccount.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.user_account = null;
    },
  },
});

export const UserAccountReducer = UserAccountProfile.reducer;
