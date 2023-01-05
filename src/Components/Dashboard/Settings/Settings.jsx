import user_img from "../../../assets/no_avatar.png";
import Button from "./Button.component";
import { DetailsInput, Passwords } from "./Inputs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tabs from "@mui/material/Tabs";
import { useState, useEffect } from "react";
import { User, SiteData } from "../../../Redux/Actions";
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
import InputComponent from "./Input1.component";
import ButtonComponent from "../../Common/ButtonComponent";

import axios from "axios";
const Settings = () => {
  const { user, loading, error } = useSelector((state) => state.user);
  const { sitedata } = useSelector((state) => state.sitedata);
  const [profileLoading, setProfileLoading] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const dispatch = useDispatch();
  // console.log(selector);

  const initialState = {
    email: user?.email,
    firstName: user?.firstName,
    lastName: user?.lastName,
  };
  const initialPassword = {
    oldPassword: "Admin@12345678",
    newPassword: "Admin@1234",
  };
  const [values, setValues] = useState(initialState);
  const [passwords, setPasswords] = useState(initialPassword);
  const [value, setValue] = useState("1");
  const [profileImage, setProfileImage] = useState("");

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
      <InputComponent handleChange={handleChange} data={data} values={values} />
    );
  });
  const settingsType = ["Profile Settings", "Account Settings"];
  const renderSettings = settingsType.map((data, index) => {
    return <Tab label={data} value={`${index + 1}`} />;
  });
  const renderPasswords = Passwords.map((data, index) => {
    return (
      <InputComponent
        handleChange={handlePassword}
        data={data}
        values={passwords}
      />
    );
  });

  const updateProfile = async (e) => {
    setProfileLoading(true);
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
        setTimeout(() => {
          dispatch(User());
        }, 1500);
      }
      setProfileLoading(false);
    } catch (err) {
      setProfileLoading(false);
      HandleError(err);
      console.log(err);
    }
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    setPasswordLoading(true);
    console.log(passwords);
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/change-password`,
        passwords,
        HEADER
      );
      console.log(response);
      setPasswordLoading(false);
      SuccessNotification(response?.data?.message);
      dispatch(User());
    } catch (err) {
      HandleError(err);
      setPasswordLoading(false);
      console.log(err);
    }
  };

  const GetImage = (e) => {
    setProfileImage(e.target.files[0]);
  };
  console.log(user?.avatar?.url);

  const updateProfileImage = async () => {
    setImageLoading(true);
    try {
      let formData = new FormData();
      formData.append("image", profileImage);
      console.log("profile image updating");
      const response = await axios.post(
        `${BASE_URL}/users/profile-image`,
        formData,
        HEADER
      );
      console.log(response);
      setImageLoading(false);
      if (response.status === 200) {
        SuccessNotification(response?.data?.message);
        setTimeout(() => {
          dispatch(User());
        }, 2000);
      }
    } catch (err) {
      setImageLoading(false);
      console.log(err);
      HandleError(err);
    }
  };
  return (
    <>
      <main>
        <div className="my-5">
          <ToastContainer transition={Zoom} autoClose={800} />
          <Tabs value={value} onChange={handlePaginate} aria-label="settings">
            {renderSettings}
          </Tabs>
        </div>
        <TabContext value={value}>
          <TabPanel value="1">
            <main className="block  md:flex justify-between">
              <div className="flex flex-col">
                <div className="md:w-52 md:h-52 w-48 my-3 h-48 mx-auto relative  my-3 overflow-hidden rounded-full bg-white">
                  {/* <h1>logo</h1> */}
                  <img
                    className=" object-cover h-full  w-full"
                    src={user?.avatar ? user?.avatar?.url : user_img}
                    alt="logo"
                  />
                </div>

                <div className="flex items-center flex-col">
                  {" "}
                  <input
                    onChange={(e) => GetImage(e)}
                    className="p-5 my-5 w-52"
                    type="file"
                    name=""
                    id=""
                  />
                  <ButtonComponent
                    bgcolor="bg-primary-300"
                    width="w-40 md:w-52"
                    clickFunction={updateProfileImage}
                    title="Update Image"
                    loading={imageLoading}
                  />
                </div>
              </div>
              <div className="md:w-2/4 h-full overflow-scroll app_container md:mx-14">
                <form className="flex  flex-col  items-center ">
                  {renderInputs}
                  <ButtonComponent
                    bgcolor="bg-primary-300"
                    width="w-40 md:w-52"
                    clickFunction={updateProfile}
                    title="Update Profile"
                    loading={profileLoading}
                  />
                </form>

                <form className="flex flex-col  items-center ">
                  {renderPasswords}
                  <ButtonComponent
                    bgcolor="bg-primary-300"
                    width="w-40 md:w-52"
                    clickFunction={updatePassword}
                    title="Change Password"
                    loading={passwordLoading}
                  />
                </form>
              </div>
            </main>
          </TabPanel>
          <TabPanel value="2">
            <OtherSettings sitedata={sitedata} />
          </TabPanel>
        </TabContext>
      </main>
    </>
  );
};
export default Settings;
