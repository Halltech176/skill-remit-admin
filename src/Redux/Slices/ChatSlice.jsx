import { createSlice } from "@reduxjs/toolkit";
import { FetchChat } from "../Actions";
const initialState = {
  loading: false,
  chats: null,
  error: false,
};
const Chat = createSlice({
  name: "chats",
  initialState,
  reducers: {},
  extraReducers: {
    [FetchChat.fulfilled]: (state, action) => {
      state.loading = false;
      state.chats = action.payload;
      state.error = false;
    },
    [FetchChat.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.chats = null;
    },
    [FetchChat.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.chats = null;
    },
  },
});

export const FetchChatReducer = Chat.reducer;
