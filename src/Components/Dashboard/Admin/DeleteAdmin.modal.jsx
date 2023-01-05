import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";
import axios from "axios";
import { HEADER, BASE_URL } from "../../../../Api";
import { HandleError } from "../../Common/HandleError";
import { ErrorNotification, SuccessNotification } from "../../Common/Toastify";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SuspendedUsers } from "../../../Redux/Actions";
import { useDispatch } from "react-redux";

const DeleteAdminComponent = ({
  deleteID,
  confirmDelete,
  setConfirmDelete,
}) => {
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

  const backdrop = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const navigate = useNavigate();
  const DeleteAccount = async () => {
    try {
      const response = await axios.delete(
        `${BASE_URL}//users/${deleteID}`,
        HEADER
      );

      SuccessNotification(response.data.message);
      setTimeout(() => {
        dispatch(SuspendedUsers());
      }, 2000);
      console.log(response);

      setConfirmDelete(!confirmDelete);
    } catch (err) {
      HandleError(err);
      console.log(err);
    }
  };
  return (
    <>
      <ToastContainer transition={Zoom} autoClose={800} />
      <AnimatePresence>
        {confirmDelete && (
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="backdrop"
          >
            <div className="absolute bg-white top-1/2 shadow-md md:max-w-md max-w-xl left-1/2 rounded-xl -translate-x-2/4 -translate-y-2/4 p-5">
              <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ zIndex: "50" }}
                // className="absolute bg-white top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4"
                //   className=" backdrop absolute overflow-scroll bg-white rounded-xl shadow-md md:left-0 md:right-0 md:top-0 top-20 md:h-full h-3/4 md:w-auto    p-5   md:p-14 md:max-w-3xl md:mx-auto   "
              >
                <div>
                  <h1 className=" text-red-500 mb-10 text-center font-mono font-bold capitalize text-2xl">
                    {" "}
                    Proceed to delete account
                  </h1>
                  <div className="my-10 flex justify-center">
                    <button
                      onClick={() => setConfirmDelete(!confirmDelete)}
                      className="mx-3 bg-white md:w-48 w-24 rounded-md shadow-md"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={DeleteAccount}
                      className="bg-red-400 md:w-48 w-24 mx-3 p-3 text-white text-md rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DeleteAdminComponent;
