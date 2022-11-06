import { useNavigate } from "react-router";
import { useState } from "react";
import { BASE_URL } from "../../../Api";
import { Login as SignIn } from "../../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import { Loader2 } from "../../Components/Common/Loader";
import { ErrorNotification, SuccessNotification } from "../Common/Toastify";
import { HandleError } from "../Common/HandleError";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
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

  const navigate = useNavigate();
  const inputs = [
    {
      label: "E-mail",
      type: "email",
      name: "username",
    },

    {
      label: "Password",
      type: "password",
      name: "password",
    },
  ];
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(SignIn(values)).unwrap();
      console.log(response);

      if (response?.status === 200) {
        window.localStorage.setItem(
          "token",
          JSON.stringify(response?.data?.data.token)
        );

        console.log(response.data);
        SuccessNotification(response.data.message);
        navigate("/");
      }
    } catch (err) {
      HandleError(err);

      console.log(err?.response?.data?.message);
    }
  };
  const renderInputs = inputs.map((data, index) => {
    return (
      <section key={data.name} className="my-5">
        <div className="relative">
          <input
            onChange={handleChange}
            value={values[data.name]}
            name={data.name}
            className="border-light bg-info-100 md:px-3 px-2 pb-2 pt-8 text-md md:text-xl w-full rounded-md"
            type={data.type}
          />
          <span className="text-normal absolute top-2 md:left-3 left-2 text-primary">
            {data.label}
          </span>
        </div>
      </section>
    );
  });

  const ResetPasswords = () => {
    console.log("forgotten password");
    navigate("/email-verification");
  };
  return (
    <>
      {loading ? (
        <Loader2 />
      ) : (
        <main className=" md:w-96 w-full py-10 mx-auto  h-screen">
          <ToastContainer transition={Zoom} autoClose={800} />
          <form className="    ">
            <h1 className="text-primary font-bold text-4xl">Login</h1>
            <div className="flex flex-col mt-6">{renderInputs}</div>
            <p onClick={ResetPasswords} className="text-dark pointer text-end ">
              Forgotten Password?
            </p>
            <div className="flex justify-center my-3">
              <button
                onClick={handleLogin}
                className="bg-normal p-3 rounded-md text-white w-32 "
              >
                Sign In
              </button>
            </div>
          </form>
        </main>
      )}
    </>
  );
};
export default Login;
