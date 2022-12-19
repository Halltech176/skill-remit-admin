import { createSlice } from "@reduxjs/toolkit";
import { GetNotifications } from "../Actions";

const initialState = {
  loading: false,
  notifications: null,
  error: false,
};
const Notifications = createSlice({
  name: "notifications",
  initialState,
  reducers: {},
  extraReducers: {
    [GetNotifications.fulfilled]: (state, action) => {
      state.loading = false;
      state.notifications = action.payload;
      state.error = false;
    },
    [GetNotifications.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.notifications = null;
    },
    [GetNotifications.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.notifications = null;
    },
  },
});

export const GetNotificationsReducer = Notifications.reducer;
