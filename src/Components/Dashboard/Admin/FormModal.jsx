import Modal from "react-modal";
import cancel from "../../../assets/cancel.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { CreateAdmin, EditAdmin, Users } from "../../../Redux/Actions";
import { ErrorNotification, SuccessNotification } from "../../Common/Toastify";
import { HandleError } from "../../Common/HandleError";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL } from "../../../../Api";
import ModalComponent from "./Modal.component";
import { variants, backdrop } from "./animation";

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

export const CreateAccount = ({ open, ToggleModal, setIsOpen }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Users());
  }, []);
  const { user, loading, error } = useSelector((state) => state.users);

  console.log(user);

  const initialState = {
    email: "olayemi.ayomide642@gmail.com",
    firstName: "olajide",
    lastName: "Olayemi",
    password: "pass111",
  };
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(values)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsOpen(false);
    console.log(values);
    try {
      const response = await dispatch(CreateAdmin(values)).unwrap();
      console.log(response.data);
      if (response.status === 200) {
        const response2 = await axios.post(
          `${BASE_URL}//auth/request-email-verification`,
          { email: response?.data?.data?.email }
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

  return (
    <main>
      <ToastContainer transition={Zoom} autoClose={800} />
      <AnimatePresence exitBeforeEnter>
        {open && (
          <ModalComponent
            values={values}
            handleChange={handleChange}
            ToggleModal={ToggleModal}
            open={open}
            inputs={inputs}
            type="create"
            handleSubmit={handleSubmit}
            setIsOpen={setIsOpen}
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export const EditAccount = ({
  open,
  active,
  ToggleModal,
  setActiveUser,
  setIsOpen,
}) => {
  Modal.setAppElement("#root");
  const dispatch = useDispatch();
  console.log(active);
  const handleChange = (e) => {
    setActiveUser({ ...active, [e.target.name]: e.target.value });
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(EditAdmin(active));
      console.log(response);

      console.log(response);
    } catch (err) {
      HandleError(err);
      console.log(err);
    }
  };
  return (
    <main>
      <ToastContainer transition={Zoom} autoClose={800} />

      <AnimatePresence exitBeforeEnter>
        {open && (
          <ModalComponent
            type="edit"
            values={active}
            handleChange={handleChange}
            ToggleModal={ToggleModal}
            open={open}
            setIsOpen={setIsOpen}
            inputs={inputs.slice(0, -1)}
            handleSubmit={handleEdit}
          />
        )}
      </AnimatePresence>
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

      <AnimatePresence exitBeforeEnter>
        {open && (
          <motion.div variants={backdrop} intial="hidden" animate="animate">
            <motion.div
              variants={variants}
              intial="hidden"
              animate="animate"
              exit="exit"
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

                <div className="flex justify-center my-3">
                  <button onClick={handleVerify} className="btn w-32 ">
                    Verify
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};
