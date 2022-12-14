import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cancel from "../../../assets/cancel.png";
import { HandleError } from "../../Common/HandleError";
import ButtonComponent from "../../Common/ButtonComponent";
import { GetNotifications } from "../../../Redux/Actions";
import { useDispatch } from "react-redux";
import { ErrorNotification, SuccessNotification } from "../../Common/Toastify";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationComponent = ({ open, setOpen, user }) => {
  const dispatch = useDispatch();
  const variants = {
    hidden: {
      opacity: 0,
      y: "100vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "string",
        mass: 0.4,
        damping: 8,
      },
    },
    exit: {
      y: -1000,
      transition: {
        duration: 0.5,
      },
    },
  };
  console.log(user);

  const backdrop = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [userIds, setUserIds] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setUserIds([user?._id]);
  }, [user]);
  console.log(userIds);

  const SendBroadcast = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { title, message, userIds, as: "notification" };

    try {
      if (data?.title === "") {
        throw "Title should not be empty";
      }
      if (data?.message === "") {
        throw "Message should not be empty";
      }
      const response = await dispatch(GetNotifications(data)).unwrap();
      console.log(response);
      setTitle("");
      setMessage("");
      setLoading(false);
      SuccessNotification(response?.message);
      setOpen(false);

      console.log(response);
    } catch (err) {
      setLoading(false);
      HandleError(err);
      console.log(err?.response?.data?.message);
    }
  };
  return (
    <>
      <ToastContainer transition={Zoom} autoClose={600} />
      <AnimatePresence>
        {open && (
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="backdrop"
          >
            <div className="absolute bg-white top-1/2 shadow-md md:max-w-xl w-full max-w-xs left-1/2 rounded-xl -translate-x-2/4 -translate-y-2/4 md:p-10 p-5">
              <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ zIndex: "50" }}
              >
                <form className="my-10 relative">
                  <span onClick={() => setOpen(false)}>
                    <img
                      className="md:w-10 w-6 absolute md:-top-14 -top-10 -right-3 md:-right-5"
                      src={cancel}
                      alt="cancel"
                    />
                  </span>
                  <div className="my-8 flex">
                    <textarea
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Title"
                      className=" w-full text-normal text-sm md:text-xl rounded-md font-medium p-2 md:p-5 bg-primary-200 md:rounded-xl"
                      rows="2"
                    />
                  </div>
                  <div className="my-8 flex">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message"
                      className=" w-full text-normal text-sm md:text-xl font-medium p-2 md:p-5 bg-primary-200 md:rounded-xl rounded-md"
                      rows="8"
                    />
                  </div>
                  <ButtonComponent
                    title="Send Message"
                    clickFunction={SendBroadcast}
                    loading={loading}
                  />
                </form>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default NotificationComponent;
