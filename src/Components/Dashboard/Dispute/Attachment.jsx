import cancel from "../../../assets/cancel.png";
import alert from "../../../assets/alert.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { BASE_URL, TOKEN } from "../../../../Api";
import { useSelector, useDispatch } from "react-redux";
import send from "../../../assets/send.png";
import { HandleError } from "../../Common/HandleError";

const Attachment = ({
  open,
  setOpen,
  file,
  setContent,
  setMessage,
  message,
}) => {
  const { user } = useSelector((state) => state.user);
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

  const SendMessage = async (e) => {
    console.log(file);
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("content", "ywah");
    // formdata.append("type", "file");
    // Array.from(formdata());
    console.log(message);
    try {
      const CHAT_ID = JSON.parse(localStorage.getItem("CHAT_ID"));
      const response = await axios.post(
        `${BASE_URL}/chat/${CHAT_ID}/message`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${TOKEN} `,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      //   setMessage("");
      console.log(response);
      //   setContent([
      //     ...content,
      //     { content: message, sender: user, date: String(new Date(Date.now())) },
      //   ]);
      //   console.log(content);
      //   setMessage("");
    } catch (err) {
      HandleError(err);
      console.log(err);
    }
  };

  return (
    <main>
      <AnimatePresence exitBeforeEnter>
        {open && (
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="backdrop"
          >
            <div className=" absolute z-40 relative shadow-md app_container  overflow-scroll bg-white border-2  rounded-xl p-14 md:w-2/4 ms:h-2/4 w-full top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
              <span onClick={() => setOpen(false)}>
                <img
                  className="w-10 absolute top-10 right-5"
                  src={cancel}
                  alt="cancel"
                />
              </span>
              <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ zIndex: "50" }}
              >
                <form className="   ">
                  <div className="flex flex-col my-10">
                    <h2
                      style={{ color: "#18191F" }}
                      className="flex my-4 items-center"
                    >
                      <span className="mr-3">
                        <img className="w-5" src={alert} />
                      </span>
                      UPLOAD ATTACHMENT
                    </h2>
                    <div className="relative border-2 h-72 mx-auto w-72  ">
                      <img
                        className="object-fit"
                        src={file && URL.createObjectURL(file)}
                        alt="file upload"
                      />
                    </div>
                  </div>
                  <div className="input shrink-0 border-2 rounded-md bg-white p-1 md:p-2 flex items-center ">
                    <input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{ background: "#F7F7FD" }}
                      placeholder="send message..."
                      className="w-full text-sm p-2 md:px-5 py-3"
                      type="text"
                    />
                  </div>

                  <div className="flex justify-between my-3">
                    <button
                      onClick={() => setOpen(false)}
                      style={{ background: "#001B87" }}
                      className=" py-3 px-10 rounded-md bg-white text-xl text-white font-bold "
                    >
                      Discard
                    </button>
                    <button
                      onClick={(e) => SendMessage(e)}
                      style={{ background: "#001B87" }}
                      className=" py-3 px-10 rounded-md bg-normal text-xl text-white font-bold "
                    >
                      Upload
                    </button>
                  </div>
                </form>
              </motion.div>{" "}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Attachment;
