import { createSlice } from "@reduxjs/toolkit";
import { Feedbacks } from "../Actions";

const initialState = {
  loading: false,
  feedbacks: null,
  error: false,
};
const Feedback = createSlice({
  name: "feedbacks",
  initialState,
  reducers: {},
  extraReducers: {
    [Feedbacks.fulfilled]: (state, action) => {
      state.loading = false;
      state.feedbacks = action.payload;
      state.error = false;
    },
    [Feedbacks.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.feedbacks = null;
    },
    [Feedbacks.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.feedbacks = null;
    },
  },
});

export const FeedbacksReducer = Feedback.reducer;
