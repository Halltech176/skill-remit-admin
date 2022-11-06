import { createSlice } from "@reduxjs/toolkit";
import { Users, SuspendedUsers, ActiveUsers } from "../Actions";

const initialState = {
  loading: false,
  user: null,
  error: false,
};
const UsersProfile = createSlice({
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

const Suspended = createSlice({
  name: "suspendedusers",
  initialState,
  reducers: {},
  extraReducers: {
    [SuspendedUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = false;
    },
    [SuspendedUsers.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.user = null;
    },
    [SuspendedUsers.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.user = null;
    },
  },
});

const Actives = createSlice({
  name: "activeusers",
  initialState,
  reducers: {},
  extraReducers: {
    [ActiveUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = false;
    },
    [ActiveUsers.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.user = null;
    },
    [ActiveUsers.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.user = null;
    },
  },
});

export const UsersReducer = UsersProfile.reducer;
export const SuspendedReducer = Suspended.reducer;
export const ActiveReducer = Actives.reducer;
