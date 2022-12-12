import { SuccessNotification } from "./Toastify";
export const HandleSuccess = ({ data }) => {
  console.log(data);
  SuccessNotification(data?.messaage);
};
