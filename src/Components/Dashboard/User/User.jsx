import { useNavigate } from "react-router";
import Tabs from "./Tabs.json";
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
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user_credentials = useSelector((state) => state.users?.user);
  const { loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(Users());
  }, []);
  const [page, setPage] = useState("1");
  const handlePaginate = (e, value) => {
    setPage(value);
    dispatch(Users({ page: value }));
  };

  const GetUserDetails = (id) => {
    console.log("Getting user details");
    window.localStorage.setItem("ACTIVE_USER_ID", JSON.stringify(id));
    dispatch(Users());
    dispatch(ClickedUser());
    const clickedUser = user_credentials?.docs.find((data) => {
      return data._id === id;
    });
    console.log(clickedUser);
    console.log(id);
    navigate(`/admin/allAccount/${clickedUser?._id}`);
  };

  const renderAccounts = user_credentials?.docs?.map((data, index) => {
    return (
      <section
        key={index}
        onClick={() => GetUserDetails(data?._id)}
        // onClick={() => navigate(`/admin/allAccount/${data.username}`)}
        style={{ color: "#808080" }}
        className="flex  capitalize border-b-2 py-5 text-md font-bold font-manrope my-2 md:my-5 items-center justify-between"
      >
        <p className="flex mr-5 md:mr-0 shrink-0  items-center w-48">
          <span>
            {" "}
            <img
              src={index % 2 === 0 ? person1 : person2}
              className="w-8"
              alt="user"
            />{" "}
          </span>
          <span className="mx-3">
            {data.firstName} {data.lastName}
          </span>
        </p>
        <p
          className={`${data.status} mr-5 md:mr-0  shrink-0 text-center  rounded-md w-36  py-1 px-3`}
        >
          {" "}
          {data.status}
        </p>
        <div className="flex shrink-0 mr-5 md:mr-0 items-center  w-72 justify-between">
          {data.ratings === null ? (
            ""
          ) : (
            <meter
              className="w-36"
              max={100}
              min={0}
              value={30}
              high={75}
              low={25}
              optimum={50}
            ></meter>
          )}
          <span className="mx-2">
            {" "}
            {data.ratings === undefined
              ? "no ratings available"
              : data.ratings + "%"}{" "}
          </span>
          <p
            className={`${data.size} mr-7 shrink-0 mx-2 flex p-1 rounded-md items-center`}
          >
            <span>
              {" "}
              <img src={data.size === "increase" ? arrowUp : arrowDown} />{" "}
            </span>
            <span> 30%</span>
          </p>
        </div>
        <p className="w-36 mr-5  md:mr-0 shrink-0 "> 200</p>
        <p className="w-36 mr-5 md:mr-0 shrink-0 "> $500,000</p>
      </section>
    );
  });

  const renderTabs = Tabs.map((data, index) => {
    return (
      <div
        key={index}
        // style={{ flexShrink: "0" }}
        className={`${
          data.active
            ? "bg-normal text-white"
            : "bg-white text-normal border-primary-100  "
        }  font-nunito  text-center md:text-xl shrink-0 text-xs font-medium  rounded-md py-4  px-4  md:w-64 md:py-5 my-5  mx-2 `}
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
              <h2 className="w-36 text-center md:mr-0 mr-5 shrink-0  md:p-0 p-4 ">
                Status
              </h2>
              <h2 className="w-72 md:mr-0 mr-5 shrink-0 md:p-0 p-4  ">
                Ratings
              </h2>
              <h2 className="w-36 md:mr-0 mr-5  shrink-0 md:p-0 p-4">
                Project
              </h2>
              <h2 className="w-36 md:mr-0 mr-5   shrink-0 md:p-0 p-4  ">
                Wallet balance
              </h2>
            </section>
            <div className=" md:mr-0 mr-5 md:p-0 p-4 mb-5">
              {renderAccounts}
            </div>
            <div className="flex justify-center my-5 items-center">
              <Stack spacing={2}>
                <Pagination
                  count={user_credentials?.totalPages}
                  onChange={handlePaginate}
                  renderItem={(item) => (
                    <PaginationItem
                      components={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                      }}
                      {...item}
                    />
                  )}
                />
              </Stack>
            </div>
          </div>
        </main>
      )}
    </>
  );
};
export default User;
