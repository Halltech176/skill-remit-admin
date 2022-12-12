import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, TOKEN, HEADER } from "../../Api";
import axios from "axios";
import { HandleError } from "../Components/Common/HandleError";

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

export const ClickedUser = createAsyncThunk("clickeduser", async () => {
  try {
    const user_id = JSON.parse(localStorage.getItem("ACTIVE_USER_ID"));
    const response = await axios.get(
      `${BASE_URL}//data/user/${user_id}?populate=wallet.histories&populate=avatar`,
      HEADER
    );
    // /profile?populate=wallet&populate=bankAccounts&populate=avatar&populate=wallet&populate=wallet.histories
    return response.data.data;
  } catch (err) {
    throw err;
    // console.log(err);
  }
});

export const Users = createAsyncThunk("users", async (value) => {
  try {
    let user_values = "user" || "vendor";
    const request = `${BASE_URL}//admin/users?${
      value?.status === ""
        ? ""
        : value?.status === user_values
        ? `type=${value?.status}`
        : `status=${value?.status}`
    }&populate=wallet.histories&populate=avatar&page=${
      value?.page || 1
    }&limit=${value?.limit || 10}`;

    console.log(request);
    console.log(value);

    const response = await axios.get(
      `${BASE_URL}//admin/users?${
        value?.status === ""
          ? ""
          : value?.status === "user"
          ? `type=${value?.status}`
          : value?.status === "vendor"
          ? `type=${value?.status}`
          : `status=${value?.status}`
      }&populate=avatar&populate=wallet.histories&page=${
        value?.page || 1
      }&limit=${value?.limit || 10}`,
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

export const AllTransactions = createAsyncThunk(
  "transactions",
  async ({ page = 1 }) => {
    try {
      // const response = await axios.get(`${BASE_URL}//transaction/`, HEADER);
      const response = await axios.get(
        "https://skill-remit.herokuapp.com/api//transaction/",
        HEADER
      );
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

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

// Note the following action would be changed later, its  for gettin the admins
export const SuspendedUsers = createAsyncThunk(
  "admins",
  async (value, THUNKAPI) => {
    try {
      // const response = await axios.get(
      //   `${BASE_URL}//admin/users?type=admin&page=${page}`,
      //   HEADER
      // );

      const response = await axios.get(
        `${BASE_URL}//admin/users?type=admin&page=${
          value?.page ? value?.page : 1
        }`,
        HEADER
      );

      return response.data.data;
    } catch (err) {
      console.log(err);
      // HandleError(err)
      throw THUNKAPI.rejectWithValue(err);
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
    const response = await axios.get(
      `${BASE_URL}/chat?populate=users.avatar`,
      HEADER
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
});
