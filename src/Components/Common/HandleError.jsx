import { ErrorNotification } from "./Toastify";
export const HandleError = (err) => {
  if (err.message === "Network Error") {
    ErrorNotification("Please check your network connections");
  }
  ErrorNotification(err?.response?.data?.message);
};
