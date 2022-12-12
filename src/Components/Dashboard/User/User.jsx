import { useNavigate } from "react-router";
import TabValues from "./Tabs.json";
import Accounts from "./Accounts.json";
import person1 from "../../../assets/person1.png";
import person2 from "../../../assets/person2.png";
import person3 from "../../../assets/person3.png";
import person4 from "../../../assets/person4.png";
import arrowUp from "../../../assets/arrow-up.png";
import arrowDown from "../../../assets/arrow-down.png";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Users, ClickedUser } from "../../../Redux/Actions";
import { Loader1 } from "../../Common/Loader";
import { AllAccounts } from "./AccountsStatus";
import PaginateComponent from "../../Common/Paginate.component";

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user_credentials = useSelector((state) => state.users?.user);
  const { loading, user } = useSelector((state) => state.users);
  console.log(user_credentials);

  useEffect(() => {
    dispatch(Users({ status: "" }));
  }, []);

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
        }  font-nunito  text-center md:text-xl shrink-0 text-xs font-medium  rounded-md py-4  px-4  md:w-64 md:py-5 my-5  mx-2`}
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
          <section className="flex  overflow-x-scroll app_container md:flex-wrap items-center md:justify-center">
            {renderTabs}
          </section>
          <div className="app_container overflow-x-scroll">
            <section
              style={{ color: " #4C4C4C" }}
              className="flex font-manrope  my-1  md:my-5 justify-between items-center text-md
        font-bold"
            >
              <h2 className="w-48 md:mr-0 mr-5 shrink-0  md:p-0 p-4">User</h2>

              <h2 className="w-90 md:mr-0 mr-5 shrink-0 md:p-0 p-4  ">
                Ratings
              </h2>
              <h2 className="w-32 md:mr-0 mr-5 text-center shrink-0 md:p-0 p-4">
                Project
              </h2>
              <h2 className="w-36 md:mr-0 mr-5   shrink-0 md:p-0 p-4  ">
                Wallet balance
              </h2>
            </section>
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
