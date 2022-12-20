import { createSlice } from "@reduxjs/toolkit";
import { GetAllNotifications } from "../Actions";
const initialState = {
  loading: false,
  allnotifications: null,
  error: false,
};
const AllNotifications = createSlice({
  name: "allnotifications",
  initialState,
  reducers: {},
  extraReducers: {
    [GetAllNotifications.fulfilled]: (state, action) => {
      state.loading = false;
      state.allnotifications = action.payload;
      state.error = false;
    },
    [GetAllNotifications.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.allnotifications = null;
    },
    [GetAllNotifications.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.allnotifications = null;
    },
  },
});

export const AllNotificationsReducer = AllNotifications.reducer;
