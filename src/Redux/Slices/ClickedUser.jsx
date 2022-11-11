import { createSlice } from "@reduxjs/toolkit";
import { ClickedUser } from "../Actions";

const initialState = {
  loading: false,
  user: null,
  error: false,
};
const ClickedUserProfile = createSlice({
  name: "clickeduser",
  initialState,
  reducers: {},
  extraReducers: {
    [ClickedUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = false;
    },
    [ClickedUser.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.user = null;
    },
    [ClickedUser.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.user = null;
    },
  },
});

export const ClickedUserReducer = ClickedUserProfile.reducer;
