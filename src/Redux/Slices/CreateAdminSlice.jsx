import { createSlice } from "@reduxjs/toolkit";
import { CreateAdmin, EditAdmin } from "../Actions";

const initialState = {
  loading: false,
  user: null,
  error: false,
};
const Create = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [CreateAdmin.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = false;
    },
    [CreateAdmin.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.user = null;
    },
    [CreateAdmin.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.user = null;
    },
  },
});

const Edit = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [EditAdmin.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = false;
    },
    [EditAdmin.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.user = null;
    },
    [EditAdmin.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.user = null;
    },
  },
});

export const CreateAdminReducer = Create.reducer;
export const EditAdminReducer = Edit.reducer;
