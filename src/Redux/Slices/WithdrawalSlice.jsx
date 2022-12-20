import { createSlice } from "@reduxjs/toolkit";
import { GetWithdrawalRequests } from "../Actions";
const initialState = {
  loading: false,
  withdrawal: null,
  error: false,
};
const Withdrawal = createSlice({
  name: "withdrawal",
  initialState,
  reducers: {},
  extraReducers: {
    [GetWithdrawalRequests.fulfilled]: (state, action) => {
      state.loading = false;
      state.withdrawal = action.payload;
      state.error = false;
    },
    [GetWithdrawalRequests.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.withdrawal = null;
    },
    [GetWithdrawalRequests.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.withdrawal = null;
    },
  },
});

export const WithdrawalReducer = Withdrawal.reducer;
