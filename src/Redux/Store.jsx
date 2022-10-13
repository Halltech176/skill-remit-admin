import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { UserReducer } from "./Slices/UserSlice";
import { UsersReducer } from "./Slices/UsersSlice";

const reducers = combineReducers({
  user: UserReducer,
  users: UsersReducer,
});

const Store = configureStore({
  reducer: reducers,
  devTools: true,
});
export default Store;
