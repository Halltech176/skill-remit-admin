import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cancel from "../../../assets/cancel.png";
import { variants, backdrop } from "./Animation";
const ModalComponent = ({
  inputs,
  ToggleModal,
  open,
  values,
  handleChange,
  handleSubmit,
  type,
  setIsOpen,
}) => {
  console.log(values);
  const renderInputs = inputs?.map((data, index) => {
    return (
      <section className="md:my-6 my-6 ">
        <div className="relative">
          <input
            required
            name={data.name}
            onChange={handleChange}
            value={values[data?.name]}
            className="border-light bg-info-100 px-3 pb-2 md:pt-10 pt-8 text-md md:text-xl w-full rounded-md"
            type={data.type}
          />
          <span className="text-normal absolute top-2 left-3 text-primary">
            {data.label}
          </span>
        </div>
      </section>
    );
  });

  return (
    <>
      <motion.div
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="backdrop"
      >
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ zIndex: "50" }}
          className=" backdrop absolute app_container overflow-scroll bg-white rounded-xl shadow-md md:left-0 md:right-0 md:top-0 top-20 md:h-full h-3/4 md:w-auto    p-5   md:p-14 md:max-w-2xl md:mx-auto   "
        >
          <form className="    ">
            <span onClick={() => setIsOpen(false)}>
              <img
                className="md:w-10 w-8 absolute md:top-5 md:right-5 top-2 right-2"
                src={cancel}
                alt="cancel"
              />
            </span>
            <h1 className="text-primary capitalize md:text-2xl text-xl">
              {type} Admin
            </h1>
            <div className="flex flex-col justify-between  h-full">
              {renderInputs}
            </div>

            {type === "create" ? (
              <div className="flex justify-center my-5">
                <button onClick={handleSubmit} className="btn w-32 ">
                  Add
                </button>
              </div>
            ) : (
              <div className="flex capitalize justify-center md:my-10 my-2">
                <button
                  onClick={handleSubmit}
                  className="bg-white text-primary shadow-md rounded-md py-3 mx-3 w-48 "
                >
                  Save
                </button>
                {/* <button onClick={handleSubmit} className="btn mx-3 w-48 ">
                  Delete
                </button> */}
              </div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </>
  );
};
export default ModalComponent;
