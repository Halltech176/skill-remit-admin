import users_transactions from "./Transactions.json";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { AllTransactions } from "../../../Redux/Actions";
import PaginateComponent from "../../Common/Paginate.component";
import { Loader1 } from "../../Common/Loader";
import Pattern1 from "../../../assets/Pattern1.png";
import Pattern2 from "../../../assets/Pattern2.png";
import Pattern3 from "../../../assets/Pattern3.png";
import Pattern4 from "../../../assets/Pattern4.png";
import Pattern5 from "../../../assets/Pattern5.png";
import Pattern6 from "../../../assets/Pattern6.png";
import { NoUser } from "../../Common/NoData";
import DetailTransactions from "./Transactions.component";
import AddAccounts from "./AddAccounts";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tabs from "@mui/material/Tabs";
const TransactionsComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllTransactions());
  }, []);

  const { transactions, loading, error } = useSelector(
    (state) => state?.transactions
  );
  const [value, setValue] = useState("1");
  const handlePaginate = (event, newValue) => {
    setValue(newValue);
  };

  const SectionValues = ["Transaction History", "Add Accounts"];
  const renderSettings = SectionValues.map((data, index) => {
    return <Tab label={data} value={`${index + 1}`} />;
  });

  const trans = useSelector((state) => state);
  console.log(trans);

  return (
    <>
      {/* {loading ? (
        <Loader1 />
      ) : ( */}
      <main className="   app_container   ">
        <div className="bg-primary relative rounded-3xl  overflow-hidden w-full md:w-1/2 mx-auto py-5 md:py-10 px-5  md:px-22 text-center   text-white">
          <div className="flex flex-col absolute -top-3 -left-24 md:-left-14  -bottom-3">
            <img src={Pattern1} alt="pattern" />
            <img src={Pattern2} alt="pattern" />
            <img src={Pattern3} alt="pattern" />
          </div>
          <div className="flex flex-col absolute top-2 -right-24 md:-right-14  -bottom-3">
            <img src={Pattern4} alt="pattern" />
            <img src={Pattern5} alt="pattern" />
            <img src={Pattern6} alt="pattern" />
          </div>
          <p className="text-xl">Available balance</p>
          <h1 className="md:text-6xl text-4xl font-medium py-8">5,000,000</h1>
          <div>
            <button className="text-normal rounded-md px-7 font-medium py-3 bg-white">
              Withdraw
            </button>
          </div>
        </div>

        <div className="my-3">
          <Tabs
            value={value}
            onChange={handlePaginate}
            aria-label="basic tabs example"
            // className="flex justify-between"
          >
            {renderSettings}
          </Tabs>
        </div>

        <div className="my-3">
          <TabContext value={value}>
            <TabPanel value="1">
              {" "}
              <DetailTransactions users_transactions={users_transactions} />
            </TabPanel>
            <TabPanel value="2">
              {" "}
              <AddAccounts />
            </TabPanel>
          </TabContext>
        </div>
        {/* </div> */}

        <div>
          <PaginateComponent
            action="transactions"
            count={transactions?.docs?.length}
          />
        </div>
      </main>
      {/* )} */}
    </>
  );
};
export default TransactionsComponent;
