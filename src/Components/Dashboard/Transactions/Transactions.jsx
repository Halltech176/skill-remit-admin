import users_transactions from "./Transactions.json";
import debit from "../../../assets/debit.png";
import credit from "../../../assets/credit.png";
const Transactions = () => {
  const renderTransactions = users_transactions.map((data, index) => {
    return (
      <section
        style={{ color: " #2E303D" }}
        className="flex shrink-0 my-5 justify-between"
      >
        <p className="flex shrink-0 w-64 items-center">
          <span>
            <img
              className="w-10 mr-2"
              src={data.type === "credit" ? credit : debit}
            />
          </span>
          {data.name}
        </p>
        <p className="w-64 shrink-0 text-center">{data.date}</p>
        <p className="w-64 shrink-0 text-center">{data.reference}</p>
        <p className="w-64 shrink-0 text-end">
          {data.type === "credit" ? "+" : "-"}
          {data.amount}
        </p>
      </section>
    );
  });
  return (
    <main className="   ">
      <div className="bg-primary rounded-3xl w-full md:w-1/2 mx-auto py-5 md:py-10 px-5  md:px-22 text-center   text-white">
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
          className="flex font-nirmala shrink-0 justify-between items-center text-md md:text-3xl font-light"
        >
          <h2 className="w-64 md:py-0 py-3 ">Name</h2>
          <h2 className="w-64 shrink-0 md:py-0 py-3  text-center">
            Date & Time
          </h2>
          <h2 className="w-64 md:py-0 py-3  text-center">Transactions</h2>
          <h2 className="w-64 md:py-0 py-3  text-right">Amount</h2>
        </section>
        <div className=" my-5 ll items-center justify-between">
          {renderTransactions}
        </div>
      </div>
    </main>
  );
};
export default Transactions;
