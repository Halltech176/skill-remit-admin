import { summary, stats } from "./Statistics";
import { DoughnutChart, LineChart, AreaChart } from "./Visuals";
const Oveview = () => {
  const renderSummary = summary.map((data, index) => {
    return (
      <section
        style={{ background: "#4F46BA" }}
        className="flex shrink-0 text-white mr-5 w-56 md:w-44 p-4 rounded-md"
      >
        <div className="flex flex-col">
          <p className="capitalize">{data.title}</p>
          <p>{data.value}</p>
        </div>
      </section>
    );
  });

  const renderStats = stats.map((data, index) => {
    return (
      <section
        className={`${
          data.status === "completed"
            ? "bg-info-dark"
            : data.status === "active"
            ? "bg-secondary-dark"
            : "bg-primary-dark"
        } my-4 p-5 h-36 md:w-96 w-full flex justify-between text-white`}
      >
        <div className="">
          <h1 className="text-2xl ">{data.title}</h1>
          <p>{data.percent}%</p>
        </div>
        <span></span>
        <div className="w-24">
          <DoughnutChart />
        </div>
      </section>
    );
  });
  return (
    <main className="md:flex">
      <div className="max-w-xl  mr-4">
        <div className="flex md:overflow-x-hidden overflow-x-scroll justify-between">
          {renderSummary}
        </div>
        <div className="flex flex-col my-4">
          <div className="my-4">
            <LineChart />
          </div>

          <div className="my-4">
            <AreaChart />
          </div>
        </div>
      </div>
      <div className="w-full">
        <h1 className="font-bold  mb-3">statistics</h1>
        <div className="flex flex-col my-5">{renderStats}</div>
      </div>
    </main>
  );
};
export default Oveview;
