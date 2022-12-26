import { useState, useEffect } from "react";
import { User } from "../../../Redux/Actions";
import { BASE_URL, HEADER } from "../../../../Api";
import { useDispatch, useSelector } from "react-redux";
import AddBankComponent from "./AddBank.component";
import { HandleError } from "../../Common/HandleError";
import { BsArrowLeft } from "react-icons/bs";
import {
  ErrorNotification,
  SuccessNotification,
} from "../../../Components/Common/Toastify";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const AddAccounts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);

  const DeleteBanks = async (id) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/wallet/bank-account/${id}`,
        HEADER
      );
      dispatch(User());
      console.log(response);
    } catch (err) {
      HandleError(err);
      console.log(err);
    }
  };

  const renderBanks = user?.bankAccounts?.map((data, index) => {
    return (
      <div className="flex justify-between items-center my-3">
        <p>{data?.accountName}</p>
        <p>{data?.accountNumber}</p>
        <p>{data?.bankName}</p>
        <button
          onClick={() => DeleteBanks(data?._id)}
          className="text-white font-base bg-red-500 px-2 w-32 py-2 rounded-md"
        >
          Delete
        </button>
      </div>
    );
  });
  console.log(user?.bankAccounts);
  return (
    <main>
      <ToastContainer transition={Zoom} autoClose={800} />
      <AddBankComponent open={open} setOpen={setOpen} />
      <div className="flex my-3 flex-row-reverse">
        <button onClick={() => setOpen(true)} className="text-right px-5 btn">
          Add Account
        </button>
      </div>
      <section>
        <div className="flex justify-between">
          <h3>Account Name</h3>
          <h3>Account Number</h3>
          <h3>Bank Name</h3>
        </div>
        {renderBanks}
      </section>
    </main>
  );
};
export default AddAccounts;
