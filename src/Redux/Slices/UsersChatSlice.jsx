import { createSlice } from "@reduxjs/toolkit";
import { UserChat } from "../Actions";
const initialState = {
  loading: false,
  chat: null,
  error: false,
};
const Chat = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: {
    [UserChat.fulfilled]: (state, action) => {
      state.loading = false;
      state.chat = action.payload;
      state.error = false;
    },
    [UserChat.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.chat = null;
    },
    [UserChat.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.chat = null;
    },
  },
});

export const UserChatReducer = Chat.reducer;
