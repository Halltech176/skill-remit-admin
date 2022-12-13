import users_transactions from "./Transactions.json";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { AllTransactions } from "../../../Redux/Actions";
import PaginateComponent from "../../Common/Paginate.component";
import { Loader1 } from "../../Common/Loader";
import debit from "../../../assets/debit.png";
import credit from "../../../assets/credit.png";
import Pattern1 from "../../../assets/Pattern1.png";
import Pattern2 from "../../../assets/Pattern2.png";
import Pattern3 from "../../../assets/Pattern3.png";
import Pattern4 from "../../../assets/Pattern4.png";
import Pattern5 from "../../../assets/Pattern5.png";
import Pattern6 from "../../../assets/Pattern6.png";
import { NoUser } from "../../Common/NoData";
const TransactionsComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllTransactions());
  }, []);
  const { transactions, loading, error } = useSelector(
    (state) => state?.transactions
  );
  const trans = useSelector((state) => state);
  console.log(trans);
  const renderTransactions = users_transactions.map((data, index) => {
    return (
      <section
        style={{ color: " #2E303D" }}
        className="flex shrink-0 my-5 items-center md:justify-between"
      >
        <p className="flex shrink-0 md:w-64 w-48 items-center">
          <span>
            <img
              className="w-10 mr-2"
              src={data.type === "credit" ? credit : debit}
            />
          </span>
          {data.name}
        </p>
        <p className="md:w-64 w-48 shrink-0 md:text-center">{data.date}</p>
        <p className="md:w-64 w-48 shrink-0 md:text-center">{data.reference}</p>
        <p className="md:w-48 w-24 shrink-0 md:text-end">
          {data.type === "credit" ? "+" : "-"}
          {data.amount}
        </p>
      </section>
    );
  });
  return (
    <>
      {loading ? (
        <Loader1 />
      ) : (
        <main className="   ">
          <div className="bg-primary relative  rounded-3xl  overflow-hidden w-full md:w-1/2 mx-auto py-5 md:py-10 px-5  md:px-22 text-center   text-white">
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
                Wallet draw
              </button>
            </div>
          </div>
          <h1 className="text-center text-dark font-medium text-2xl md:text-4xl my-8">
            Transaction history
          </h1>
          <div className="overflow-x-scroll ">
            <section
              style={{ color: " #828282" }}
              className="flex font-nirmala shrink-0 md:justify-between items-center text-md md:text-2xl font-light"
            >
              <h2 className="md:w-64 shrink-0 w-48 md:py-0 py-3 ">Name</h2>
              <h2 className="md:w-64 w-48 shrink-0 md:py-0 py-3  md:text-center">
                Date & Time
              </h2>
              <h2 className="md:w-64 w-48 shrink-0 md:py-0 py-3  md:text-center">
                Transactions
              </h2>
              <h2 className="md:w-48 w-24  shrink-0 md:py-0 py-3  md:text-end">
                Amount
              </h2>
            </section>
            <div className=" my-5 items-center app_container items-center md:justify-between">
              {renderTransactions}
            </div>
          </div>
          <div>
            <PaginateComponent
              action="transactions"
              count={transactions?.docs?.length}
            />
          </div>
        </main>
      )}
    </>
  );
};
export default TransactionsComponent;
