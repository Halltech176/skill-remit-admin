import { ErrorNotification } from "./Toastify";
export const HandleError = (err) => {
  console.log(err);
  if (err.message === "Network Error") {
    ErrorNotification("Please check your network connections");
  } else if (err?.response?.data?.message) {
    ErrorNotification(err?.response?.data?.message);
  }
  // else ig (err)
  else {
    ErrorNotification(err);
  }
};
