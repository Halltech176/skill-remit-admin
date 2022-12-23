import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cancel from "../../../assets/cancel.png";
import { HandleError } from "../../Common/HandleError";
import { GetNotifications, Banks, AddBank } from "../../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";
import {
  ErrorNotification,
  SuccessNotification,
} from "../../../Components/Common/Toastify";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const AddBanks = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const { banks } = useSelector((state) => state.banks);
  const [bankCode, setBankCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const [bankName, setBankName] = useState("");
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

  const HandleSelectedOptions = (e) => {
    console.log(e.target.value);
    setBankName(e.target.value);

    const findCode = banks?.find((data, index) => {
      return data.name === e.target.value;
    });
    setBankCode(findCode?.code);
  };

  const handleBank = async (e) => {
    e.preventDefault();
    const data = { accountNumber, bankCode };
    console.log(data);
    const TOKEN = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await axios.post(
        "https://skill-remit.herokuapp.com/api//wallet/bank-account",
        { data },
        {
          headers: {
            Authorization: `Bearer ${TOKEN} `,
          },
        }
      );

      // const response = await dispatch(AddBank(data)).unwrap();
      console.log(response);
      console.log(data);
    } catch (err) {
      HandleError(err);
    }
  };

  console.log(bankCode);

  const renderOptions = banks?.map((data, index) => {
    return <option value={data?.name}>{data?.name}</option>;
  });

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
            <div className="absolute bg-white top-1/2 shadow-md md:max-w-xl w-full max-w-xl left-1/2 rounded-xl -translate-x-2/4 -translate-y-2/4 md:p-10 p-5">
              <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ zIndex: "50" }}
              >
                <span
                  onClick={() => setOpen(false)}
                  className="w-24 cursor-pointer"
                >
                  <BsArrowLeft />
                </span>
                <h1 className="my-5 md:text-3xl text-md text-normal my-4 font-semibold">
                  Add Bank Account
                </h1>
                <div className="my-5">
                  <select
                    onChange={(e) => HandleSelectedOptions(e)}
                    className="border-light bg-info-100 px-3 py-3 text-md md:text-xl  outline-none border-2 w-full rounded-md"
                    value={bankName}
                  >
                    {renderOptions}
                  </select>
                </div>
                <section className="my-7">
                  <div className="relative">
                    <input
                      required
                      name="account Number"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      className="border-light bg-info-100 px-3 pb-2 pt-8 text-md md:text-xl  w-full rounded-md"
                      type="number"
                    />
                    <span className="text-normal absolute top-2 left-3 text-primary">
                      Account Number
                    </span>
                  </div>
                </section>
                <div className="flex justify-center">
                  <button
                    onClick={handleBank}
                    className="bg-normal md:w-56 w-48 rounded-md text-xl p-3 text-white"
                  >
                    Send
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AddBanks;
