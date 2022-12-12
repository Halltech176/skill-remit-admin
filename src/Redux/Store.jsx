import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { UserReducer } from "./Slices/UserSlice";
import {
  UsersReducer,
  SuspendedReducer,
  ActiveReducer,
} from "./Slices/UsersSlice";
import {
  EditAdminReducer,
  CreateAdminReducer,
} from "./Slices/CreateAdminSlice";
import { LoginReducer } from "./Slices/LoginSlice";
import { TransactionsReducer } from "./Slices/TransactionsSlice";
import { SiteDataReducer } from "./Slices/SiteSlice";
import { FetchChatReducer } from "./Slices/ChatSlice";
import { ClickedUserReducer } from "./Slices/ClickedUser";
import { banksReducer } from "./Slices/BanksSlice";
import { FeedbacksReducer } from "./Slices/FeedbackSlice";
import { JobsReducer } from "./Slices/JobSlice";
import { GetReviewReducer } from "./Slices/ReviewSlice";

const reducers = combineReducers({
  user: UserReducer,
  users: UsersReducer,
  login: LoginReducer,
  actives: ActiveReducer,
  suspended: SuspendedReducer,
  transactions: TransactionsReducer,
  editadmin: EditAdminReducer,
  createadmin: CreateAdminReducer,
  sitedata: SiteDataReducer,
  feedback: FeedbacksReducer,
  chats: FetchChatReducer,
  clickeduser: ClickedUserReducer,
  banks: banksReducer,
  jobs: JobsReducer,
  review: GetReviewReducer,
});

const Store = configureStore({
  reducer: reducers,
  devTools: true,
});
export default Store;
