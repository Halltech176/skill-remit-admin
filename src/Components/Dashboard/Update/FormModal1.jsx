import cancel from "../../../assets/cancel.png";
import alert from "../../../assets/alert.png";
import { useState } from "react";
import { variants, backdrop } from "./variants";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { HEADER, BASE_URL } from "../../../../Api";

export const UploadData = ({ open, ToggleModal }) => {
  const AddOccupations = async () => {
    try {
      // const response = await axios.post(`${BASE_URL}/`)
      console.log("updating...");
    } catch (err) {
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
            <div className=" absolute h-2/3 z-40 relative shadow-md app_container  overflow-scroll bg-white border-2  rounded-xl p-14 md:w-2/6 w-full top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
              <span onClick={ToggleModal}>
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
                  <span onClick={ToggleModal}>
                    <img
                      className="w-10 absolute top-5 right-5"
                      src={cancel}
                      alt="cancel"
                    />
                  </span>{" "}
                  <div className="flex flex-col my-10">
                    <div className="relative">
                      <input
                        className="w-full pt-10 px-4 pb-2 bg-info-light rounded-sm"
                        type="text"
                        name=""
                        id=""
                      />
                      <span className="text-primary absolute top-2 left-3 capitalize font-medium text-md">
                        Category Name
                      </span>
                    </div>
                    <h2
                      style={{ color: "#18191F" }}
                      className="flex my-4 items-center"
                    >
                      <span className="mr-3">
                        <img className="w-5" src={alert} />
                      </span>
                      UPLOAD IMAGE
                    </h2>
                    <input
                      className="p-6 my-5 w-full"
                      type="file"
                      name=""
                      id=""
                    />
                  </div>
                </form>
                <div className="flex justify-center my-3">
                  <button
                    onClick={AddOccupations}
                    style={{ background: "#001B87" }}
                    className=" py-3 px-10 rounded-md bg-normal text-xl text-white font-bold "
                  >
                    Upload
                  </button>
                </div>
              </motion.div>{" "}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export const UpdateData = ({ open, ToggleModal }) => {
  return (
    <main className="relative">
      {" "}
      <AnimatePresence exitBeforeEnter>
        {open && (
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="backdrop"
          >
            <div className=" absolute h-2/3 z-40 relative shadow-md app_container  overflow-scroll bg-white border-2  rounded-xl p-14 md:w-2/6 w-full top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
              <span onClick={ToggleModal}>
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
                    <div className="relative">
                      <input
                        className="w-full pt-10 px-4 pb-2 bg-info-light rounded-sm"
                        type="text"
                        name=""
                        id=""
                      />
                      <span className="text-primary absolute top-2 left-3 capitalize font-medium text-md">
                        Category Name
                      </span>
                    </div>
                    <h2
                      style={{ color: "#18191F" }}
                      className="flex my-4 items-center"
                    >
                      <span className="mr-3">
                        <img className="w-5" src={alert} />
                      </span>
                      UPLOAD IMAGE
                    </h2>
                    <input
                      className="p-6 my-5 w-full"
                      type="file"
                      name=""
                      id=""
                    />
                  </div>
                </form>
                <div className="flex justify-center my-3">
                  <button
                    style={{ background: "#001B87" }}
                    className=" py-3 px-10 mx-4 rounded-md bg-normal text-xl text-white font-bold "
                  >
                    Update
                  </button>
                  <button
                    style={{ border: "1px solid #001B87", color: "#0D0140" }}
                    className=" py-3 px-10 mx-4 rounded-md bg-white text-xl text-normal font-bold "
                  >
                    Delete
                  </button>
                </div>
              </motion.div>{" "}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};
