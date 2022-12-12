import { createSlice } from "@reduxjs/toolkit";
import { AllTransactions } from "../Actions";
const initialState = {
  loading: false,
  transactions: null,
  error: false,
};
const Transaction = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: {
    [AllTransactions.fulfilled]: (state, action) => {
      state.loading = false;
      state.transactions = action.payload;
      state.error = false;
    },
    [AllTransactions.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.transactions = null;
    },
    [AllTransactions.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.transactions = null;
    },
  },
});

export const TransactionsReducer = Transaction.reducer;
