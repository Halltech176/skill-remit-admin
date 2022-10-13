import { createSlice } from "@reduxjs/toolkit";
import { User } from "../Actions";

const initialState = {
  loading: false,
  user: null,
  error: false,
};
const UserProfile = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [User.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = false;
    },
    [User.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.user = null;
    },
    [User.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.user = null;
    },
  },
});

export const UserReducer = UserProfile.reducer;
