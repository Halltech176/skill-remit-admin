import Modal from "react-modal";
import cancel from "../../../assets/cancel.png";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CreateAdmin, EditAdmin, Users } from "../../../Redux/Actions";
import { ErrorNotification, SuccessNotification } from "../../Common/Toastify";
import { HandleError } from "../../Common/HandleError";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL } from "../../../../Api";

const inputs = [
  {
    label: "First Name",
    type: "text",
    name: "firstName",
  },

  {
    label: "Last Name",
    type: "text",
    name: "lastName",
  },
  {
    label: "E-mail",
    type: "email",
    name: "email",
  },
  {
    label: "Password",
    type: "password",
    name: "password",
  },
];
export const CreateAccount = ({ open, ToggleModal, setIsOpen, setIsOpen2 }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Users());
  }, []);
  const { user, loading, error } = useSelector((state) => state.users);
  console.log(user);
  Modal.setAppElement("#root");
  const initialState = {
    email: "dev",
    firstName: "ola",
    lastName: "ayo",
    password: "pass111",
  };
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(values)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const response = await dispatch(CreateAdmin(values)).unwrap();
      console.log(response.data);
      if (response.status === 200) {
        const response2 = await axios.get(
          `${BASE_URL}//auth/request-email-verification?email=${response?.data?.data?.email}`
        );
        console.log(response2);
        SuccessNotification(response2.data.message);
        setTimeout(() => {
          setIsOpen(false);
          setIsOpen2(true);
        }, 1000);
      }
      console.log(response2);
    } catch (err) {
      HandleError(err);
      console.log(err);
    }
  };
  const renderInputs = inputs.map((data, index) => {
    return (
      <section className="my-5">
        <div className="relative">
          <input
            required
            name={data.name}
            onChange={handleChange}
            value={values[data.name]}
            className="border-light bg-info-100 px-3 pb-2 pt-8 text-md md:text-xl w-full rounded-md"
            type={data.type}
          />
          <span className="text-normal absolute top-2 left-3 text-primary">
            {data.label}
          </span>
        </div>
      </section>
    );
  });
  console.log(open);
  return (
    <main>
      <ToastContainer transition={Zoom} autoClose={800} />
      <Modal
        isOpen={open}
        onRequestClose={ToggleModal}
        className=" absolute md:h-4/12 relative shadow-md app_container  overflow-y-scroll bg-white border-2  rounded-xl p-14 md:w-2/4 w-full md:top-2/4   top-12 left-0 right-0 md:left-2/4 md:-translate-y-2/4 md:-translate-x-2/4"
      >
        <form className="    ">
          <span onClick={ToggleModal}>
            <img
              className="w-10 absolute top-5 right-5"
              src={cancel}
              alt="cancel"
            />
          </span>
          <h1 className="text-primary text-2xl">Create Admin</h1>
          <div className="flex flex-col">{renderInputs}</div>

          <div className="flex justify-center my-3">
            <button onClick={handleSubmit} className="btn w-32 ">
              Add
            </button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export const EditAccount = ({ open, active, ToggleModal }) => {
  Modal.setAppElement("#root");
  console.log(active);
  const initialState = {
    email: active?.email,
    firstName: active?.firstName,
    lastName: "222weqwek",
    password: "pass111",
  };
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(values)
  };
  const renderInputs = inputs.map((data, index) => {
    return (
      <section className="my-5">
        <div className="relative">
          <input
            value={values[data.name]}
            onChange={handleChange}
            className="border-light bg-info-100 px-3 pb-2 pt-8 text-xl w-full rounded-md"
            type={data.type}
          />
          <span className="text-normal absolute top-2 left-3 text-primary">
            {data.label}
          </span>
        </div>
      </section>
    );
  });
  console.log(open);
  return (
    <main>
      <Modal
        isOpen={open}
        onRequestClose={ToggleModal}
        contentLabel="Example Modal"
        className=" absolute md:h-4/12 relative shadow-md app_container  overflow-y-scroll bg-white border-2  rounded-xl p-14 md:w-2/4 w-full md:top-2/4   top-12 left-0 right-0 md:left-2/4 bottom-4 py-5 md:-translate-y-2/4 md:-translate-x-2/4"
      >
        <form className=" my-4   ">
          <span onClick={ToggleModal}>
            <img
              className="w-10 absolute top-6 right-6"
              src={cancel}
              alt="cancel"
            />
          </span>
          <h1 className="text-primary font-medium text-2xl">Edit Admin</h1>
          <div className="flex flex-col">{renderInputs}</div>
        </form>
        <div className="flex justify-center my-3">
          <button className="text-primary rounded-xl text-xl shadow-md p-4 w-32 mx-3">
            Save
          </button>
          <button className="bg-primary rounded-xl text-xl text-white w-32 mx-3">
            Delete
          </button>
        </div>
      </Modal>
    </main>
  );
};

export const VerifyAccount = ({ open, setOpen, ToggleModal }) => {
  const [token, setToken] = useState("");
  const dispatch = useDispatch();

  const handleVerify = async (e) => {
    e.preventDefault();
    console.log(token);
    try {
      const response = await axios.post(
        `${BASE_URL}//auth/verify-email-account`,
        { token: token }
      );
      if (response.status === 200) {
        SuccessNotification(response.data.message);
        setOpen(false);
        dispatch(Users());
      }

      console.log(response);
    } catch (err) {
      console.log(err);
      HandleError(err);
    }
  };
  return (
    <main>
      <ToastContainer transition={Zoom} autoClose={800} />
      <Modal
        isOpen={open}
        onRequestClose={ToggleModal}
        className=" absolute md:h-4/12 relative shadow-md app_container  overflow-y-scroll bg-white border-2  rounded-xl p-14 md:w-2/4 w-full md:top-2/4   top-12 left-0 right-0 md:left-2/4 md:-translate-y-2/4 md:-translate-x-2/4"
      >
        <form className="    ">
          <span onClick={ToggleModal}>
            <img
              className="w-10 absolute top-5 right-5"
              src={cancel}
              alt="cancel"
            />
          </span>
          <h1 className="text-primary text-2xl">
            Enter The Verification Token
          </h1>
          <input
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="border-light bg-info-100 p-3 my-2 md:px-3 text-md md:text-xl w-full rounded-md"
            type="number"
            name=""
            id=""
          />
          {/* <div className="flex flex-col">{renderInputs}</div> */}

          <div className="flex justify-center my-3">
            <button onClick={handleVerify} className="btn w-32 ">
              Verify
            </button>
          </div>
        </form>
      </Modal>
    </main>
  );
};
