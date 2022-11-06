import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, TOKEN, HEADER } from "../../Api";
import axios from "axios";

export const Login = createAsyncThunk("login", async (data, THUNKAPI) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, data);
    console.log(THUNKAPI.fulfillWithValue(response.data.data));
    return THUNKAPI.fulfillWithValue(response);
  } catch (err) {
    // console.log(err);
    throw THUNKAPI.rejectWithValue(err);
  }
});

export const User = createAsyncThunk("user", async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}//users/profile?populate=wallet&populate=bankAccounts&populate=avatar&populate=wallet&populate=wallet.histories`,
      HEADER
    );

    return response.data.data;
  } catch (err) {
    throw err;
    // console.log(err);
  }
});

export const Users = createAsyncThunk("users", async (value) => {
  try {
    const response = await axios.get(
      `${BASE_URL}//admin/users?wallet.histories&page=${
        value?.page || 1
      }$limit=${value?.limit || 10}`,
      HEADER
    );
    return response.data.data;
  } catch (err) {
    throw err;
    // console.log(err);
  }
});

export const ActiveUsers = createAsyncThunk("activeusers", async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}//admin/users?status=active`,
      HEADER
    );
    return response.data.data;
  } catch (err) {
    throw err;
    // console.log(err);
  }
});

export const SuspendedUsers = createAsyncThunk("suspendedusers", async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}//admin/users?status=suspended`,
      HEADER
    );
    return response.data.data;
  } catch (err) {
    throw err;
    // console.log(err);
  }
});

export const Transactions = createAsyncThunk("transactions", async () => {
  try {
    const response = await axios.get(`${BASE_URL}//transaction`, HEADER);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
});

export const CreateAdmin = createAsyncThunk(
  "createaccount",
  async (data, THUNKAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL}//admin/users`,
        data,
        HEADER
      );

      return THUNKAPI.fulfillWithValue(response);
    } catch (err) {
      console.log(err);
      throw THUNKAPI.rejectWithValue(err);
    }
  }
);

export const EditAdmin = createAsyncThunk(
  "editaccount",
  async (data, THUNKAPI) => {
    try {
      const response = await axios.put(
        `${BASE_URL}//transaction`,
        data,
        HEADER
      );
      return response.data.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

export const SiteData = createAsyncThunk("sitedata", async () => {
  try {
    const response = await axios.get(`${BASE_URL}//settings`, HEADER);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
});

export const FetchChat = createAsyncThunk("chat", async () => {
  try {
    const response = await axios.get(`${BASE_URL}chat?populate=users`, HEADER);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
});
