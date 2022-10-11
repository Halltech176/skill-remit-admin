import { sendTo, sendAs } from "./SentMessage";
const Commission = () => {
  const renderSentTO = sendTo.map((data, index) => {
    return (
      <section className="flex text-center">
        <input className="" name="snedTo" type="radio" />
        <label className="mx-3 text-dark font-medium text-xl">
          {data.label}
        </label>
      </section>
    );
  });

  const renderSentAs = sendAs.map((data, index) => {
    return (
      <section className="flex text-center">
        <input className="" name="sentAs" type="radio" />
        <label className="mx-3 text-dark font-medium text-xl">
          {data.label}
        </label>
      </section>
    );
  });
  return (
    <main className=" ">
      <h1 style={{ color: "#001B87" }} className="text-primary  text-5xl">
        send Broadcast
      </h1>
      <form className="my-10">
        <h1 className="text-dark text-3xl">send To</h1>
        <div className="my-8 flex">{renderSentTO}</div>
      </form>
      <form className="my-10">
        <h1 className="text-dark text-3xl">send As</h1>
        <div className="my-8 flex">{renderSentAs}</div>
      </form>

      <form className="my-10">
        <div className="my-8 flex">
          <textarea
            placeholder="Title"
            className="w-2/3 text-normal text-xl font-medium p-5 bg-primary-200 rounded-xl"
            rows="2"
          />
        </div>
        <div className="my-8 flex">
          <textarea
            placeholder="Message"
            className="w-2/3 text-normal text-xl font-medium p-5 bg-primary-200 rounded-xl"
            rows="8"
          />
        </div>
        <button className=" text-white rounded-md w-64 py-3  bg-normal">
          Send Message
        </button>
      </form>
    </main>
  );
};
export default Commission;
