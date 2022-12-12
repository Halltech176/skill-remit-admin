import { createSlice } from "@reduxjs/toolkit";
import { Jobs } from "../Actions";

const initialState = {
  loading: false,
  jobs: null,
  error: false,
};
const Job = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: {
    [Jobs.fulfilled]: (state, action) => {
      state.loading = false;
      state.jobs = action.payload;
      state.error = false;
    },
    [Jobs.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.jobs = null;
    },
    [Jobs.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.jobs = null;
    },
  },
});

export const JobsReducer = Job.reducer;
