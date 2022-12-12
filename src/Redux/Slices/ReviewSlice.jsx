import { createSlice } from "@reduxjs/toolkit";
import { GetReview } from "../Actions";

const initialState = {
  loading: false,
  review: null,
  error: false,
};
const Review = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: {
    [GetReview.fulfilled]: (state, action) => {
      state.loading = false;
      state.review = action.payload;
      state.error = false;
    },
    [GetReview.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.review = null;
    },
    [GetReview.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.review = null;
    },
  },
});

export const GetReviewReducer = Review.reducer;
