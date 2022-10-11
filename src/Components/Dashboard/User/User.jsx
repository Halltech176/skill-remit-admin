import { useNavigate } from "react-router";
import Tabs from "./Tabs.json";
import Accounts from "./Accounts.json";
import person1 from "../../../assets/person1.png";
import person2 from "../../../assets/person2.png";
import person3 from "../../../assets/person3.png";
import person4 from "../../../assets/person4.png";
import arrowUp from "../../../assets/arrow-up.png";
import arrowDown from "../../../assets/arrow-down.png";

const User = () => {
  const navigate = useNavigate();
  const images = [person1, person3, person3, person4];
  const renderAccounts = Accounts.map((data, index) => {
    return (
      <section
        onClick={() => navigate(`/admin/${index}`)}
        style={{ color: "#808080" }}
        className="flex capitalize border-b-2 py-5 text-md font-bold font-manrope my-5 items-center justify-between"
      >
        <p className="flex  mr-6 items-center w-64">
          <span>
            {" "}
            <img src={images[index]} className="w-32" alt="user" />{" "}
          </span>
          <span className="mx-3">{data.username} </span>
        </p>
        <p
          className={`${data.status} text-center mr-7 rounded-md w-64  py-1 px-3`}
        >
          {" "}
          {data.status}
        </p>
        <p className="flex items-center mr-7 w-2/3 justify-between">
          {data.ratings === null ? (
            ""
          ) : (
            <meter
              className="w-36"
              max={100}
              min={0}
              value={data.ratings}
              high={75}
              low={25}
              optimum={50}
            ></meter>
          )}
          <span className="mx-2">
            {" "}
            {data.ratings === null
              ? "no ratings available"
              : data.ratings + "%"}{" "}
          </span>
          <p
            className={`${data.size} mr-7 mx-2 flex p-1 rounded-md items-center`}
          >
            <span>
              {" "}
              <img src={data.size === "increase" ? arrowUp : arrowDown} />{" "}
            </span>
            <span> {data.percent}%</span>
          </p>
        </p>
        <p className="w-64 mr-7"> {data.projects}</p>
        <p className="w-64 mr-7"> ${data.balance}</p>
      </section>
    );
  });

  const renderTabs = Tabs.map((data, index) => {
    return (
      <button
        className={`${
          data.active
            ? "bg-normal text-white"
            : "bg-white text-normal border-primary-100  "
        } md:py-5 font-nunito text-sm md:text-md font-medium w-32 my-2  md:px-10 md:w-64 rounded-md md:my-5   md:mx-2 `}
      >
        {data.name}
      </button>
    );
  });
  return (
    <main className="  ">
      <section className="flex  justify-between flex-wrap items-center md:justify-center">
        {renderTabs}
      </section>
      <section
        style={{ color: " #4C4C4C" }}
        className="flex font-manrope my-5 justify-between items-center text-md
        font-bold"
      >
        <h2 className="w-64">User</h2>
        <h2 className="w-64 ">Status</h2>
        <h2 className="w-2/3 text-center ">Ratings</h2>
        <h2 className="w-64 ">Project</h2>
        <h4 className="w-64 ">Wallet balance</h4>
      </section>
      <div className=" mb-5">{renderAccounts}</div>
      <div className=" mb-5">{renderAccounts}</div>
    </main>
  );
};
export default User;
