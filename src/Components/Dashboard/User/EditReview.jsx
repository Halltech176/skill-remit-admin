import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cancel from "../../../assets/cancel.png";
import { HandleError } from "../../Common/HandleError";
import ButtonComponent from "../../Common/ButtonComponent";
import { BASE_URL, HEADER } from "../../../../Api";
import { useDispatch } from "react-redux";
import axios from "axios";

const EditReview = ({ open, setOpen, review }) => {
  console.log(review);
  const [rating, setRating] = useState(review?.rating);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState(review?.description);
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

  const confirmEdit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = { rating, description };
      if (rating > 5) {
        throw "Rating should not be greater than 5";
      }
      const response = await axios.put(
        `${BASE_URL}//feedback/${review?._id}`,
        data,
        HEADER
      );
      setLoading(false);
      console.log(response);
    } catch (err) {
      setLoading(false);
      HandleError(err);
      console.log(err);
    }
  };

  return (
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
            <span
              onClick={() => setOpen(false)}
              className="flex flex-row-reverse"
            >
              <img className="md:w-10 w-6" src={cancel} alt="cancel" />
            </span>

            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ zIndex: "50" }}
            >
              <form className="my-10">
                <div className="my-8 flex">
                  <input
                    type="number"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    min="1"
                    max="5"
                    placeholder="Rating (1-5)"
                    className=" w-full text-normal text-sm md:text-xl font-medium p-2 md:p-5 bg-primary-200 md:rounded-xl rounded-sm"
                    rows="2"
                  />
                </div>
                <div className="my-8 flex">
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    className=" w-full text-normal text-sm md:text-xl font-medium p-2 md:p-5 bg-primary-200 md:rounded-xl rounded-sm"
                    rows="8"
                  />
                </div>
                <ButtonComponent
                  title="Update Review"
                  clickFunction={confirmEdit}
                  loading={loading}
                />
                {/* <button
                  onClick={confirmEdit}
                  className=" text-white rounded-md w-64 py-3  bg-normal"
                >
                  Update Review
                </button> */}
              </form>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default EditReview;
