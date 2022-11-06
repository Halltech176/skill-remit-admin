import { createSlice } from "@reduxjs/toolkit";
import { SiteData } from "../Actions";

const initialState = {
  loading: false,
  sitedata: null,
  error: false,
};
const Site = createSlice({
  name: "sitedata",
  initialState,
  reducers: {},
  extraReducers: {
    [SiteData.fulfilled]: (state, action) => {
      state.loading = false;
      state.sitedata = action.payload;
      state.error = false;
    },
    [SiteData.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.sitedata = null;
    },
    [SiteData.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.sitedata = null;
    },
  },
});

export const SiteDataReducer = Site.reducer;
