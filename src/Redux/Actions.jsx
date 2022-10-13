import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, TOKEN } from "../../Api";
import axios from "axios";

export const User = createAsyncThunk("user", async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}//users/profile?populate=wallet&populate=bankAccounts&populate=avatar`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN} `,
        },
      }
    );

    return response.data.data;
  } catch (err) {
    throw err;
    // console.log(err);
  }
});

export const Users = createAsyncThunk("users", async () => {
  try {
    const response = await axios.get(`${BASE_URL}//admin/users`, {
      headers: {
        Authorization: `Bearer ${TOKEN} `,
      },
    });

    return response.data.data;
  } catch (err) {
    throw err;
    // console.log(err);
  }
});
