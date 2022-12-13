import { SuccessNotification } from "./Toastify";
export const HandleSuccess = ({ data }) => {
  SuccessNotification(data?.message);
};
