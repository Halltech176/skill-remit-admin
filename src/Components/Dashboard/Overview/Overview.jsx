import { summary } from "./Statistics";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  Users,
  SuspendedUsers,
  ActiveUsers,
  Feedbacks,
  Jobs,
  GetUserStats,
} from "../../../Redux/Actions";
import { DoughnutChart, LineChart, AreaChart } from "./Visuals";
const Oveview = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Users({ status: "" }));
    dispatch(SuspendedUsers());
    dispatch(ActiveUsers());
    dispatch(Feedbacks());
    dispatch(Jobs());
    dispatch(GetUserStats());
  }, []);

  const { user, loading, error } = useSelector((state) => state.users);
  const actives = useSelector((state) => state.actives);
  const suspended = useSelector((state) => state.suspended);
  const { feedbacks } = useSelector((state) => state.feedback);
  const { user_stats } = useSelector((state) => state.userstats);
  const { jobs } = useSelector((state) => state.jobs);
  const selector = useSelector((state) => state);

  const values = [
    actives?.user?.totalDocs,
    user?.totalDocs,
    feedbacks?.totalDocs,
    feedbacks?.totalDocs,
  ];

  const active_users_percent = Math.ceil(
    (actives?.user?.totalDocs / user?.totalDocs) * 100
  );

  const alljobs = jobs?.docs
    ?.map((data, index) => {
      return new Date(data?.createdAt).toLocaleDateString("default", {
        month: "long",
      });
    })
    ?.reduce((acc, cur) => ((acc[cur] = (acc[cur] || 0) + 1), acc), {});

  const job_counts = alljobs && Object.values(alljobs)?.reverse();
  const job_months = alljobs && Object.keys(alljobs)?.reverse();
  console.log(job_counts, job_months);

  const stats = [
    {
      title: "work completed",
      percent: 25,
      status: "completed",
      label: "Archieved",
    },
    {
      title: "Active User",
      percent: active_users_percent,
      status: "active",
      label: " Active",
    },
    {
      title: "pending job",
      percent: 75,
      status: "pending",
      label: " Pending Job",
    },
  ];

  const date_created = user_stats?.docs?.map((data, index) => {
    return new Date(data?.createdAt).toLocaleDateString("default", {
      month: "long",
    });
  });

  const labels = Array.from(new Set(date_created))?.reverse();

  const users_data = user_stats?.docs
    ?.filter((data, index) => {
      return data?.type === "user";
    })
    ?.map((data, index) => {
      return new Date(data?.createdAt).toLocaleDateString("default", {
        month: "long",
      });
    })
    ?.reduce((acc, cur) => ((acc[cur] = (acc[cur] || 0) + 1), acc), {});

  const vendors_data = user_stats?.docs
    ?.filter((data, index) => {
      return data?.type === "vendor";
    })
    ?.map((data, index) => {
      return new Date(data?.createdAt).toLocaleDateString("default", {
        month: "long",
      });
    })
    ?.reduce((acc, cur) => ((acc[cur] = (acc[cur] || 0) + 1), acc), {});

  const users_arr =
    users_data &&
    Object.entries(users_data).map((data, index) => {
      return { x: data[0], y: data[1] };
    });

  const vendors_arr =
    users_data &&
    Object.entries(vendors_data).map((data, index) => {
      return { x: data[0], y: data[1] };
    });

  console.log(users_arr);

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
            {values[index]}
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
    return (
      <section
        className={`${
          data.status === "completed"
            ? "bg-info-dark"
            : data.status === "active"
            ? "bg-secondary-dark"
            : "bg-primary-dark"
        } my-4 p-5 h-36  w-full  rounded-xl flex items-center justify-between text-white`}
      >
        <div className="">
          <h1 className="text-mds font-aeonik-light capitalize tracking-widest font-medium ">
            {data.title}
          </h1>
          <p className="my-3">
            {data.percent}% {data?.label}
          </p>
        </div>
        <span
          style={{ background: "#F6F6FC" }}
          className="block  w-0.5 mx-2 h-full"
        ></span>
        <div className="w-24 relative">
          <DoughnutChart percent={data.percent} />
          <span className="absolute top-14 left-12 text-2xl -translate-x-2/4 -translate-y-2/4 ">
            {data.percent}%
          </span>
        </div>
      </section>
    );
  });
  return (
    <main className="md:flex flex-wrap   lg:flex-nowrap  w-full">
      <div className=" mr-4 md:h-1/5 md:overflow-x-scroll grow ">
        <div className="flex app_container pb-5 overflow-x-scroll justify-between">
          {renderSummary}
        </div>

        <div className="flex flex-col  h-96 app_container my-4">
          <div className="my-4">
            <h1
              className="font-aeonik-light mb-4 text-xl tracking-widest font-bold"
              style={{ color: "#141414" }}
            >
              Job Create
            </h1>
            <div className="my-4 bg-white s md:p-5 p-3 h-64 rounded-xl md:rounded-3xl">
              <h1 className="text-primary">Job </h1>
              <div className="">
                <AreaChart job_counts={job_counts} job_months={job_months} />
              </div>
            </div>
            <div className="bg-white md:p-5 p-3 h-64 rounded-xl md:rounded-3xl">
              <h1 className="text-primary">Users </h1>
              <LineChart
                label={labels}
                users_data={users_arr}
                vendors_data={vendors_arr}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        <h1 className="font-black text-xl text-dark font-aeonik-light mb-2">
          Statistics
        </h1>
        <div className="flex  flex-col md:w-96 w-full justify-evenly my-2">
          {renderStats}
        </div>
      </div>
    </main>
  );
};
export default Oveview;
