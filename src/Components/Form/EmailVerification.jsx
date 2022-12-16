import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import { BASE_URL, TOKEN } from "../../../Api";
import { ErrorNotification, SuccessNotification } from "../Common/Toastify";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HandleError } from "../Common/HandleError";
const EmailVerification = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const RequestToken = async () => {
    console.log(email);
    try {
      const response = await axios.post(
        `${BASE_URL}//auth/request-reset-password`,
        {
          email,
        }
      );
      console.log(response);
      SuccessNotification(response?.data?.message);
      if (response.status === 200) {
        setTimeout(() => {
          navigate("/password-reset");
        }, 1000);
      }
    } catch (err) {
      console.log(err);
      // if (err.response.status === 404) {
      //   ErrorNotification("An account with this email doesn't exist");
      //   return;
      // }
      HandleError(err);
    }
  };
  return (
    <main className="w-full my-10 h-screen">
      <ToastContainer transition={Zoom} autoClose={1000} />
      <div className="md:w-96 md:mx-auto ">
        <h3 className="md:text-3xl text-2xl text-normal font-mont font-bold capitalize">
          Find your account
        </h3>
        <div className="inputs flex my-6  flex-col">
          <label htmlFor="" className="font-medium text-sm md:text-xl text-">
            Enter Your Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-light bg-info-100 p-3 my-2 md:px-3 text-md md:text-xl w-full rounded-md"
            type="email"
            name=""
            id=""
          />
          <div className="buttons my-5 flex">
            <button
              onClick={() => navigate(-1)}
              className="md:text-xl text-xs md:p-4 p-2 w-full mr-2 font-semibold bg-info-light rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={RequestToken}
              className="md:text-xl text-xs md:p-4 p-2  w-full font-semibold bg-normal text-white rounded-md"
            >
              Send Mail
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default EmailVerification;
