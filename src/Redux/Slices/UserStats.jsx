import { createSlice } from "@reduxjs/toolkit";
import { GetUserStats } from "../Actions";
const initialState = {
  loading: false,
  user_stats: null,
  error: false,
};
const User_stats = createSlice({
  name: "user_stats",
  initialState,
  reducers: {},
  extraReducers: {
    [GetUserStats.fulfilled]: (state, action) => {
      state.loading = false;
      state.user_stats = action.payload;
      state.error = false;
    },
    [GetUserStats.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.user_stats = null;
    },
    [GetUserStats.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.user_stats = null;
    },
  },
});

export const UserStatsReducer = User_stats.reducer;
