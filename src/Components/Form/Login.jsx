import { useNavigate } from "react-router";
import { useState } from "react";
import { BASE_URL } from "../../../Api";
import { Login as SignIn, User } from "../../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import { Loader2 } from "../../Components/Common/Loader";
import { LightLogo } from "../Common/Logo";
import { ErrorNotification, SuccessNotification } from "../Common/Toastify";
import { HandleError } from "../Common/HandleError";
import { HandleSuccess } from "../Common/HandleSuccess";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";
import { BiHide, BiShow } from "react-icons/bi";
import InputComponent from "./Input.component";

const Login = () => {
  console.log(BASE_URL);
  const { loading, login, error } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  console.log(loading);
  const initial_values = {
    username: "admin@SkillRemit.com",
    password: "Admin@1234",
  };
  const [values, setValues] = useState(initial_values);

  const [toggleStates, setToggleStates] = useState({
    show: false,
    type: "password",
  });

  const TogglePassword = () => {
    if (toggleStates.show) {
      setToggleStates({ show: false, type: "text" });
      // setToggleStates({ show: !toggleStates.show });
    } else {
      setToggleStates({ show: true, type: "password" });
      // setToggleStates({ show: !toggleStates.show });
    }
  };
  console.log(toggleStates);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(SignIn(values)).unwrap();
      console.log(response);

      if (
        (response && response?.data?.user?.type === "super") ||
        response?.data?.user?.type === "admin"
      ) {
        window.localStorage.setItem(
          "token",
          JSON.stringify(response?.data?.token)
        );

        // console.log(response.data.data.user.type);

        SuccessNotification(response?.message);
        // const check = await dispatch(User());
        // console.log(check);

        setTimeout(() => {
          console.log("LOG....");
          window.location.href = "/";
          // navigate("/");
          // window.location.reload();
        }, 500);
      } else if (
        response?.data?.user?.type !== "super" &&
        response?.data?.user?.type !== "admin"
      ) {
        console.log(response.data);
        throw "not super";
      }
    } catch (err) {
      if (err === "not super") {
        ErrorNotification("Dashboard Not accessible for this user");
      } else {
        HandleError(err);
      }

      console.log(err);
    }
  };

  const ResetPasswords = () => {
    console.log("forgotten password");
    navigate("/email-verification");
  };
  return (
    <>
      <main className="max-w-md w-full  py-10 mx-auto  h-screen">
        <ToastContainer transition={Zoom} autoClose={600} />
        <div className="border-2 p-4 px-10 shadow-md py-5 rounded-md">
          <div className="flex items-center justify-center">
            <LightLogo />
          </div>
          <form className="    ">
            <h1 className="text-primary font-bold py-3 text-4xl">Login</h1>
            <div className="flex flex-col mt-6">
              <InputComponent
                handleChange={handleChange}
                label="Email"
                type="email"
                name="username"
                value={values.username}
              />
              <div className="relative">
                <span
                  onClick={TogglePassword}
                  className="absolute  top-16 z-10 right-2 bottom-1/2 "
                >
                  {toggleStates.show ? <BiHide /> : <BiShow />}
                </span>

                <InputComponent
                  label="Password"
                  type={toggleStates.type}
                  name="password"
                  handleChange={handleChange}
                  value={values.password}
                />
              </div>
            </div>
            <p onClick={ResetPasswords} className="text-dark pointer text-end ">
              Forgotten Password?
            </p>
            <div className="flex justify-center my-3">
              {loading ? (
                <LoadingButton
                  loading
                  loadingPosition="start"
                  startIcon={<SaveIcon />}
                  variant="contained"
                >
                  Logging in
                </LoadingButton>
              ) : (
                <button
                  onClick={handleLogin}
                  className="bg-normal p-3 rounded-md my-3 text-white md:w-32 w-full"
                >
                  Sign In
                </button>
              )}
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
export default Login;
