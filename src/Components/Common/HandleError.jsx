import { ErrorNotification } from "./Toastify";
export const HandleError = (err) => {
  console.log(err)
  if (err.message === "Network Error") {
    ErrorNotification("Please check your network connections");
  }
  ErrorNotification(err?.response?.data?.message);
};
