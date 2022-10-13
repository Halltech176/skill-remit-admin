import { useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate();
  const inputs = [
    {
      label: "E-mail",
      type: "email",
    },

    {
      label: "Password",
      type: "password",
    },
  ];
  const renderInputs = inputs.map((data, index) => {
    return (
      <section className="my-5">
        <div className="relative">
          <input
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
            onClick={() => navigate("/")}
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
