import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../Actions";

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
    [Users.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = false;
    },
    [Users.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.user = null;
    },
    [Users.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.user = null;
    },
  },
});

export const UsersReducer = UserProfile.reducer;
