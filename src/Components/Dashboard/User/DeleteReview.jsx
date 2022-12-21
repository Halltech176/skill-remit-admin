import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cancel from "../../../assets/cancel.png";
import { HandleError } from "../../Common/HandleError";
import { BASE_URL, HEADER } from "../../../../Api";
import axios from "axios";
const DeleteReviewComponent = ({ open, setOpen, review }) => {
  console.log(open);
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

  const DeleteReview = async () => {
    try {
      const response = await axios.delete(
        `${BASE_URL}//feedback/1234567890`,
        HEADER
      );
      console.log(response);
    } catch (err) {
      console.log(err);
      HandleError(err);
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
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
              >
                <div>
                  <h1 className="text-primary mb-10 text-center font-mono font-bold capitalize text-2xl">
                    {" "}
                    Are you sure you want to delete the review?
                  </h1>
                  <div className="my-10 flex justify-center">
                    <button
                      onClick={() => setOpen(!open)}
                      className="mx-3 bg-white md:w-48 w-24 rounded-md shadow-md"
                    >
                      No
                    </button>
                    <button
                      onClick={DeleteReview}
                      className="bg-normal md:w-48 w-24 mx-3 p-3 text-white text-md rounded-md"
                    >
                      Yes
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

export default DeleteReviewComponent;
