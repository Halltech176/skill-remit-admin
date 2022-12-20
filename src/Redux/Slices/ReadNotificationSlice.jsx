import { createSlice } from "@reduxjs/toolkit";
import { ReadNotifications } from "../Actions";

const initialState = {
  loading: false,
  read_notifications: null,
  error: false,
};
const Notifications = createSlice({
  name: "read_notifications",
  initialState,
  reducers: {},
  extraReducers: {
    [ReadNotifications.fulfilled]: (state, action) => {
      state.loading = false;
      state.read_notifications = action.payload;
      state.error = false;
    },
    [ReadNotifications.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.read_notifications = null;
    },
    [ReadNotifications.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.read_notifications = null;
    },
  },
});

export const ReadNotificationReducer = Notifications.reducer;
