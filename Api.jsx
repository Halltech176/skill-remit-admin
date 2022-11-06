export const BASE_URL = "https://skill-remit.herokuapp.com/api";

export const TOKEN = JSON.parse(localStorage.getItem("token"));

export const HEADER = {
  headers: {
    Authorization: `Bearer ${TOKEN} `,
  },
};
