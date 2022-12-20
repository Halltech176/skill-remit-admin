import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cancel from "../../../assets/cancel.png";
import { HandleError } from "../../Common/HandleError";
import { ReadNotifications, GetAllNotifications } from "../../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { MdMarkunread } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";
import {
  ErrorNotification,
  SuccessNotification,
} from "../../../Components/Common/Toastify";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const NotificationsModal = ({ open, setOpen, contents }) => {
  const dispatch = useDispatch();
  const [read, setRead] = useState("");
  useEffect(() => {
    setRead(contents?.read);
  }, []);

  console.log(read);
  console.log(contents);
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

  const backdrop = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const MarkRead = async (id) => {
    try {
      const response = await dispatch(ReadNotifications(id)).unwrap();
      SuccessNotification(response.message);
      setRead(true);

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const NotificationContent = ({ title, content }) => {
    return (
      <div className="rounded-md border-b-2 p-3 my-3 shadow-sm">
        <label>{title}</label>
        <p className="md:text-xl text-sm font-bold text-normal">{content}</p>
      </div>
    );
  };

  return (
    <>
      <ToastContainer transition={Zoom} autoClose={800} />{" "}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="backdrop"
          >
            <div className="absolute bg-white top-1/2 h-4/5 overflow-y-scroll shadow-md md:max-w-xl w-full max-w-xl left-1/2 rounded-xl -translate-x-2/4 -translate-y-2/4 md:p-10 p-5">
              <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ zIndex: "50" }}
              >
                <div className="flex justify-between">
                  <span onClick={() => setOpen(false)} className="w-24">
                    <BsArrowLeft />
                  </span>
                  <p className="flex items-center">
                    Mark as read
                    <span
                      onClick={() => MarkRead(contents?._id)}
                      className="mx-2 cursor-pointer"
                    >
                      {read ? <IoMdCheckmarkCircle /> : <MdMarkunread />}
                    </span>
                  </p>
                </div>

                <section className="my-3">
                  <NotificationContent
                    title="Name"
                    content={`${contents?.payload?.createdBy?.firstName} ${contents?.payload?.createdBy?.lastName}`}
                  />
                  <NotificationContent
                    title="Service"
                    content={contents?.payload?.service}
                  />
                  <NotificationContent
                    title="Location"
                    content={contents?.payload?.location}
                  />
                  <NotificationContent
                    title="State"
                    content={contents?.payload?.state}
                  />
                  <NotificationContent
                    title="Budget"
                    content={contents?.payload?.budget}
                  />
                  <NotificationContent
                    title="Description"
                    content={contents?.payload?.description}
                  />
                  <NotificationContent
                    title="Email"
                    content={contents?.payload?.createdBy?.email}
                  />
                </section>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NotificationsModal;
