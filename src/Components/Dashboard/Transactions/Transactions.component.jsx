import debit from "../../../assets/debit.png";
import credit from "../../../assets/credit.png";
const TransactionComponent = ({ users_transactions }) => {
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
    <div className="overflow-x-scroll  app_container   ">
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
  );
};
export default TransactionComponent;
