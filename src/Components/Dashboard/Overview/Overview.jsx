import { summary, stats } from "./Statistics";
import { DoughnutChart, LineChart, AreaChart } from "./Visuals";
const Oveview = () => {
  // const shapes =
  const renderSummary = summary.map((data, index) => {
    return (
      <section
        style={{ background: "#4F46BA" }}
        className="flex shrink-0 items-center relative text-white mr-5 w-56 rounded-md"
      >
        <div className="flex p-5 shrink-0 flex-col">
          <p className="font-aeonik-light  tracking-widest text-md opacity-40 shrink-0 uppercase">
            {data.title}
          </p>
          <p className="font-aeonik-light  tracking-widest py-1">
            {data.value}
          </p>
        </div>

        <span>
          <img
            src={data.img}
            className="absolute  -bottom-20 top-0 h-full right-0"
            alt="shape"
          />
        </span>
        <span className="absolute right-4 top-3/2">
          <img className="z-40" src={data.icon} alt="icon" />
        </span>
      </section>
    );
  });

  const renderStats = stats.map((data, index) => {
    console.log(data.percent);
    return (
      <section
        className={`${
          data.status === "completed"
            ? "bg-info-dark"
            : data.status === "active"
            ? "bg-secondary-dark"
            : "bg-primary-dark"
        } my-4 p-5 h-36 md:w-96 w-full flex items-center justify-between text-white`}
      >
        <div className="">
          <h1 className="text-2xl font-aeonik-light capitalize tracking-widest font-medium ">
            {data.title}
          </h1>
          <p>{data.percent}%</p>
        </div>
        <span></span>
        <div className="w-24">
          <DoughnutChart percent={data.percent} />
        </div>
      </section>
    );
  });
  return (
    <main className="md:flex">
      <div className="max-w-xl  mr-4">
        <div className="flex app_container pb-5 overflow-x-scroll justify-between">
          {renderSummary}
        </div>
        <div className="flex flex-col my-4">
          <div className="my-4">
            <h1
              className="font-aeonik-light mb-4 text-xl tracking-widest font-bold"
              style={{ color: "#141414" }}
            >
              Job Create
            </h1>
            <div className="bg-white md:p-5 p-3 rounded-xl md:rounded-3xl">
              <LineChart />
            </div>
          </div>

          <div className="my-4 bg-white  md:p-5 p-3 rounded-xl md:rounded-3xl">
            <AreaChart />
          </div>
        </div>
      </div>
      <div className="w-full">
        <h1 className="font-black text-xl text-dark font-aeonik-light mb-2">
          Statistics
        </h1>
        <div className="flex flex-col my-2">{renderStats}</div>
      </div>
    </main>
  );
};
export default Oveview;
