import user from "../../../assets/user1.png";
import { DetailsInput, Passwords } from "./Inputs";
const Settings = () => {
  const renderInputs = DetailsInput.map((data, index) => {
    return (
      <input
        placeholder={data.placeholder}
        className="bg-primary-200  text-sm md:text-2xl font-medium w-full rounded-md md:rounded-xl my-5 md:my-10  p-2 md:p-5"
        type={data.type}
      />
    );
  });

  const renderPasswords = Passwords.map((data, index) => {
    return (
      <input
        placeholder={data.placeholder}
        className="bg-primary-200 text-sm md:text-2xl font-medium w-full rounded-md md:rounded-xl my-5 md:my-10  p-2 md:p-5"
        type={data.type}
      />
    );
  });
  return (
    <main className="block  md:flex justify-between">
      <div className="">
        <span>
          <img className="md:w-80 w-48 mx-auto" src={user} alt="user" />
        </span>
      </div>
      <div className="md:w-2/4 h-full overflow-scroll app_container md:mx-14">
        <form className="flex  flex-col  items-center ">
          {renderInputs}
          <button
            style={{ background: "#001B87" }}
            className="bg-normal font-inter font-semibold text-xl text-white py-4 rounded-md w-56 md:w-72"
          >
            Update Profile
          </button>
        </form>

        <form className="flex flex-col  items-center ">
          {renderPasswords}
          <button
            style={{ background: "#001B87" }}
            className="bg-normal font-inter font-semibold text-xl text-white my-5 py-4 rounded-md w-56 md:w-72"
          >
            Change Password
          </button>
        </form>
      </div>
    </main>
  );
};
export default Settings;
