import { useNavigate } from "react-router";
import { useState } from "react";
import { BASE_URL } from "../../../Api";
import axios from "axios";
const Login = () => {
  console.log(BASE_URL);
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

  // const GetValue = (key) => {
  //   const decode = document.cookie.split(" ").join("").trim().split(";");
  //   const mp = decode.map((data, index) => {
  //     return data.split("=");
  //   });

  //   // console.log(mp);

  //   const fd = mp.flat().findIndex((data, index) => {
  //     return data === key;
  //   });
  //   if (fd === -1) {
  //     return undefined;
  //   }
  //   console.log(fd);
  //   return mp.flat()[fd + 1];
  // };
  // console.log(GetValue("toke"));
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(values);
      const response = await axios.post(`${BASE_URL}/auth/login`, values);

      console.log(response.status);
      if (response?.status === 200) {
        document.cookie = `token=${response?.data?.data.token}`;
        navigate("/");
        console.log(response?.data?.data.token);
      }
    } catch (err) {
      console.log(err);
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
  return (
    <main className=" md:w-96 w-full py-10 mx-auto  h-screen">
      <form className="    ">
        <h1 className="text-primary font-bold text-4xl">Login</h1>
        <div className="flex flex-col my-6">{renderInputs}</div>

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
  );
};
export default Login;
