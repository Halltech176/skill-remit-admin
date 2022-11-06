import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import { BASE_URL, TOKEN } from "../../../Api";
import { ErrorNotification, SuccessNotification } from "../Common/Toastify";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HandleError } from "../Common/HandleError";
const PasswordReset = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("dev");
  const [token, setToken] = useState("12345");

  const ChangePassword = async () => {
    try {
      const data = {
        token,
        newPassword: password,
      };
      const response = await axios.post(
        `${BASE_URL}//auth/reset-password`,
        data
      );
      console.log(response);
      SuccessNotification(response.data.message);
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 404) {
        ErrorNotification("An account with this email doesn't exist");
        return;
      }
      HandleError(err);
    }
  };
  return (
    <main className="w-full my-10 h-screen">
      <ToastContainer transition={Zoom} autoClose={1000} />
      <div className="md:w-96 mx-auto ">
        <h3 className="md:text-3xl text-xl text-normal font-mont font-bold capitalize">
          Reset Password
        </h3>
        <div className="inputs flex my-6 flex-col">
          <label htmlFor="" className="font-medium md:text-xl  text-md">
            Enter the token sent to your email
          </label>
          <input
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="border-light bg-info-100 p-3 my-2 md:px-3 text-md md:text-xl w-full rounded-md"
            type="password"
            name=""
            id=""
          />
          <label htmlFor="" className="font-medium md:text-xl  text-md">
            Enter your new password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-light bg-info-100 p-3 my-2 md:px-3 text-md md:text-xl w-full rounded-md"
            type="email"
            name=""
            id=""
          />
          <div className="buttons my-5 flex">
            <button
              onClick={() => navigate(-1)}
              className="md:text-xl text-md w-full md:p-4 p-2 mr-2 font-semibold bg-info-light rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={ChangePassword}
              className="md:text-xl text-md w-full md:p-4 p-2 w-full font-semibold bg-normal text-white rounded-md"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default PasswordReset;
