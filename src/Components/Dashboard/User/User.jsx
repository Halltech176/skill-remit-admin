import { useNavigate } from "react-router";
import TabValues from "./Tabs.json";
import Accounts from "./Accounts.json";
import arrowUp from "../../../assets/arrow-up.png";
import arrowDown from "../../../assets/arrow-down.png";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  Users,
  ClickedUser,
  Feedbacks,
  GetUserStats,
  GetReview,
} from "../../../Redux/Actions";
import { Loader1 } from "../../Common/Loader";
import { AllAccounts } from "./AccountsStatus";
import PaginateComponent from "../../Common/Paginate.component";

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user_credentials = useSelector((state) => state.users?.user);
  const { loading, user } = useSelector((state) => state.users);
  const selector = useSelector((state) => state.review);
  const selector1 = useSelector((state) => state.users?.user);
  console.log(selector);
  console.log(selector1);

  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {};

  const handleState = (status, newValue) => {
    dispatch(Users({ status }));
    window.localStorage.setItem("STATUS", status);
    setValue(newValue);
  };
  console.log(user);

  const renderTabs = TabValues.map((data, index) => {
    return (
      <div
        onClick={(e) => handleState(data.state, index)}
        key={index}
        className={`
        ${
          `${value}` === `${index}`
            ? "bg-normal text-white"
            : "bg-white text-normal"
        }  font-nunito  text-center cursor-pointer  md:text-xl  text-xs font-medium  rounded-md py-4  px-3  md:w-64 md:py-5 md:my-5 my-2 mx-2`}
      >
        {data.name}
      </div>
    );
  });
  return (
    <>
      {loading ? (
        <Loader1 />
      ) : (
        <main className="  ">
          <section className="md:flex grid grid-cols-2 flex-wrap md:justify-center">
            {renderTabs}
          </section>
          <div className="md:app_container md:overflow-x-scroll">
            <AllAccounts />
            <PaginateComponent
              action="users"
              count={user_credentials?.totalPages}
            />
          </div>
        </main>
      )}
    </>
  );
};
export default User;
