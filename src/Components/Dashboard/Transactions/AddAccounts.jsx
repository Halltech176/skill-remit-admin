import { useState, useEffect } from "react";
import { User, SiteData } from "../../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import AddBankComponent from "./AddBank.component";
const AddAccounts = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.bankAccounts);
  const [open, setOpen] = useState(false);
  //   useEffect(() => {
  //     dispatch(User());
  //   }, []);
  console.log(user);
  return (
    <main>
      <AddBankComponent open={open} setOpen={setOpen} />
      <div className="flex flex-row-reverse">
        <button onClick={() => setOpen(true)} className="text-right px-5 btn">
          Add Account
        </button>
      </div>
      <div>Added Accounts</div>
    </main>
  );
};
export default AddAccounts;
