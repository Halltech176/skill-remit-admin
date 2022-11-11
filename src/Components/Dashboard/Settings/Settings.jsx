import user_img from "../../../assets/user1.png";

import { DetailsInput, Passwords } from "./Inputs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tabs from "@mui/material/Tabs";
import { useState, useEffect } from "react";
import { User } from "../../../Redux/Actions";
import OtherSettings from "./OtherSettings";
import { useSelector, useDispatch } from "react-redux";
import { BASE_URL, HEADER } from "../../../../Api";
import { HandleError } from "../../../Components/Common/HandleError";
import { Loader1 } from "../../../Components/Common/Loader";
import {
  ErrorNotification,
  SuccessNotification,
} from "../../../Components/Common/Toastify";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Settings = () => {
  const { user, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(User());
  }, []);

  const initialState = {
    email: user?.email,
    firstName: user?.firstName,
    lastName: user?.lastName,
  };
  const initialPassword = {
    oldPassword: "Admin@1234",
    newPassword: "12345678",
  };
  const [values, setValues] = useState(initialState);
  const [passwords, setPasswords] = useState(initialPassword);
  const [value, setValue] = useState("1");

  const handlePaginate = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handlePassword = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const renderInputs = DetailsInput.map((data, index) => {
    return (
      <input
        value={values[data.name]}
        onChange={handleChange}
        name={data.name}
        placeholder={data.placeholder}
        className="bg-primary-200  text-sm md:text-2xl font-medium w-full rounded-md md:rounded-xl my-5 md:my-10  p-2 md:p-5"
        type={data.type}
      />
    );
  });
  const settingsType = ["Profile Settings", "Account Settings"];
  const renderSettings = settingsType.map((data, index) => {
    return <Tab label={data} value={`${index + 1}`} />;
  });
  const renderPasswords = Passwords.map((data, index) => {
    return (
      <input
        value={passwords[data.name]}
        onChange={handlePassword}
        name={data.name}
        placeholder={data.placeholder}
        className="bg-primary-200 text-sm md:text-2xl font-medium w-full rounded-md md:rounded-xl my-5 md:my-10  p-2 md:p-5"
        type={data.type}
      />
    );
  });

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${BASE_URL}/users/profile`,
        values,
        HEADER
      );
      console.log(response);
      if (response.status === 200) {
        SuccessNotification(response?.data?.message);
        dispatch(User());
      }
      console.log("updated");
    } catch (err) {
      HandleError(err);
      console.log(err);
    }
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    console.log(passwords);
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/change-password`,
        passwords,
        HEADER
      );
      console.log(response);
      if (response.status === 200) {
        SuccessNotification(response?.data?.message);
        dispatch(User());
      }
      console.log("updated");
    } catch (err) {
      HandleError(err);
      console.log(err);
    }
  };
  return (
    <>
      {loading ? (
        <Loader1 />
      ) : (
        <main>
          <div className="my-5">
            <ToastContainer transition={Zoom} autoClose={800} />
            <Tabs
              value={value}
              onChange={handlePaginate}
              aria-label="basic tabs example"
            >
              {renderSettings}
            </Tabs>
          </div>
          <TabContext value={value}>
            <TabPanel value="1">
              <main className="block  md:flex justify-between">
                <div className="">
                  <span>
                    <img
                      className="md:w-80 w-48 mx-auto"
                      src={user_img}
                      alt="user"
                    />
                  </span>
                </div>
                <div className="md:w-2/4 h-full overflow-scroll app_container md:mx-14">
                  <form className="flex  flex-col  items-center ">
                    {renderInputs}
                    <button
                      onClick={updateProfile}
                      style={{ background: "#001B87" }}
                      className="bg-normal font-inter font-semibold text-xl text-white py-4 rounded-md w-56 md:w-72"
                    >
                      Update Profile
                    </button>
                  </form>

                  <form className="flex flex-col  items-center ">
                    {renderPasswords}
                    <button
                      onClick={updatePassword}
                      style={{ background: "#001B87" }}
                      className="bg-normal font-inter font-semibold text-xl text-white my-5 py-4 rounded-md w-56 md:w-72"
                    >
                      Change Password
                    </button>
                  </form>
                </div>
              </main>
            </TabPanel>
            <TabPanel value="2">
              <OtherSettings />
            </TabPanel>
          </TabContext>
        </main>
      )}
    </>
  );
};
export default Settings;
