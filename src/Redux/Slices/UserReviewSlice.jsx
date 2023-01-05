import { createSlice } from "@reduxjs/toolkit";
import { GetUserReview } from "../Actions";

const initialState = {
  loading: false,
  user_review: null,
  error: false,
};
const Review = createSlice({
  name: "user_review",
  initialState,
  reducers: {},
  extraReducers: {
    [GetUserReview.fulfilled]: (state, action) => {
      state.loading = false;
      state.user_review = action.payload;
      state.error = false;
    },
    [GetUserReview.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.user_review = null;
    },
    [GetUserReview.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.user_review = null;
    },
  },
});

export const GetUserReviewReducer = Review.reducer;
