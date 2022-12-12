import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cancel from "../../../assets/cancel.png";
import { variants, backdrop } from "./animation";
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
      <section className="my-6">
        <div className="relative">
          <input
            required
            name={data.name}
            onChange={handleChange}
            value={values[data?.name]}
            className="border-light bg-info-100 px-3 pb-2 pt-12 text-md md:text-xl w-full rounded-md"
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
          className=" backdrop absolute  bg-white rounded-xl shadow-md md:left-0 md:right-0 md:h-full md:w-auto    p-3 w-full  mx-auto md:p-14 md:max-w-3xl md:mx-auto   "
        >
          <form className="    ">
            <span onClick={() => setIsOpen(false)}>
              <img
                className="w-10 absolute top-5 right-5"
                src={cancel}
                alt="cancel"
              />
            </span>
            <h1 className="text-primary capitalize text-2xl">{type} Admin</h1>
            <div className="flex flex-col justify-between  h-full">
              {renderInputs}
            </div>

            {type === "create" ? (
              <div className="flex justify-center my-3">
                <button onClick={handleSubmit} className="btn w-32 ">
                  Add
                </button>
              </div>
            ) : (
              <div className="flex capitalize justify-center my-10">
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
