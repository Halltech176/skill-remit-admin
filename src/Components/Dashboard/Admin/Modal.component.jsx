import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cancel from "../../../assets/cancel.png";
import { variants, backdrop } from "./Animation";
import ButtonComponent from "../../Common/ButtonComponent";
const ModalComponent = ({
  inputs,
  ToggleModal,
  open,
  values,
  handleChange,
  handleSubmit,
  type,
  setIsOpen,
  loading,
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
        <div className="absolute bg-white top-1/2 h-4/5 overflow-y-scroll shadow-md md:max-w-xl w-full max-w-xl left-1/2 rounded-xl -translate-x-2/4 -translate-y-2/4 md:p-10 p-5">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ zIndex: "50" }}
            className="relative"
          >
            <form className="   relative ">
              <span onClick={() => setIsOpen(false)}>
                <img
                  className="md:w-10 w-8 absolute -md:top-20 cursor-pointer md:right-5 top-2 right-2"
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
                  <ButtonComponent
                    title="Add"
                    clickFunction={handleSubmit}
                    bgcolor="btn"
                    // width :
                    loading={loading}
                  />
                </div>
              ) : (
                <div className="flex capitalize justify-center md:my-10 my-2">
                  <ButtonComponent
                    title="Save"
                    clickFunction={handleSubmit}
                    // bgcolor="btn"
                    // width :
                    loading={loading}
                  />

                  {/* <button onClick={handleSubmit} className="btn mx-3 w-48 ">
                  Delete
                </button> */}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
export default ModalComponent;
