import debit from "../../../assets/debit.png";
import credit from "../../../assets/credit.png";
const TransactionComponent = ({ users_transactions }) => {
  const renderTransactions = users_transactions.map((data, index) => {
    return (
      <section
        style={{ color: " #2E303D" }}
        className="md:flex  grid grid-cols-4 border-b-2 pb-2 shrink-0 my-5 text-xs md:text-base items-center md:justify-between"
      >
        <p className="flex shrink-0 md:w-64  items-center">
          <span className="md:block hidden">
            <img
              className="w-10 mr-2"
              src={data.type === "credit" ? credit : debit}
            />
          </span>
          {data.name}
        </p>
        <p className="md:w-64  shrink-0 md:text-center">{data.date}</p>
        <p className="md:w-64  shrink-0 md:text-center">{data.reference}</p>
        <p className="md:w-48  shrink-0 md:text-end">
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
        className="md:flex grid grid-cols-4 font-nirmala md:shrink-0 md:justify-between items-center text-md md:text-2xl font-light"
      >
        <h2 className="md:w-64 md:shrink-0  md:py-0 py-3 ">Name</h2>
        <h2 className="md:w-64 md:shrink-0 md:py-0 py-3  md:text-center">
          Date & Time
        </h2>
        <h2 className="md:w-64  md:shrink-0 md:py-0 py-3  md:text-center">
          Transactions
        </h2>
        <h2 className="md:w-48   md:shrink-0 md:py-0 py-3  md:text-end">
          Amount
        </h2>
      </section>
      <div className=" my-5 ">{renderTransactions}</div>
    </div>
  );
};
export default TransactionComponent;
