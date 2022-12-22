import Accounts from "./Accounts.json";
import person1 from "../../../assets/no_avatar.png";
import arrowDown from "../../../assets/arrow-down.png";
import { Users, ClickedUser, GetReview } from "../../../Redux/Actions";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { NoUser } from "../../Common/NoData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const UserComponent = ({ user_credentials }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log(selector?.clickeduser);

  const GetUserDetails = (id) => {
    console.log("Getting user details");
    window.localStorage.setItem("ACTIVE_USER_ID", JSON.stringify(id));

    const response = user_credentials?.find((data) => {
      return data._id === id;
    });
    dispatch(ClickedUser());
    console.log(response);

    navigate(`/admin/allAccount/${response?._id}`);
  };

  const renderAccounts = user_credentials?.map((data, index) => {
    return (
      <section
        key={index}
        onClick={() => GetUserDetails(data?._id)}
        style={{ color: "#808080" }}
        className="md:flex grid grid-cols-4 capitalize  cursor-pointer border-b-2 md:py-5 py-2 text-sm font-bold font-manrope my-2 md:my-5 items-center justify-between"
      >
        <p className="md:mr-0 md:block hidden shrink-0 ">{index + 1} </p>
        <p className="flex mr-5 md:mr-0 shrink-0  items-center md:w-60">
          <span>
            {" "}
            <LazyLoadImage
              alt="user"
              effect="blur"
              src={data?.avatar?.url ? data?.avatar?.url : person1}
              className="w-8 md:block hidden rounded-full h-8"
            />
          </span>
          <span className="mx-3">
            {data.firstName} {data.lastName}
          </span>
        </p>

        <div className="flex shrink-0 mr-5 md:mr-0 items-center  md:w-80 justify-between">
          {data.ratings === null ? (
            ""
          ) : (
            <meter
              className="md:w-36 hidden md:block  shrink-0"
              max={100}
              min={0}
              value={30}
              high={75}
              low={25}
              optimum={50}
            ></meter>
          )}
          {/* <span className="mx-2 shrink-0">
            {" "}
            {data.ratings === undefined
              ? "no ratings available"
              : data.ratings + "%"}{" "}
          </span> */}
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
        <p className="md:w-32 md:ml-14 text-center  md:mr-0 shrink-0 "> 200</p>
        <p className="md:w-36 mr-5 md:mr-0  text-center shrink-0 ">
          {" "}
          ${data?.wallet?.balance}
        </p>
      </section>
    );
  });

  return (
    <>
      {user_credentials?.length ? (
        <div>
          <section
            style={{ color: " #4C4C4C" }}
            className="md:flex grid grid-cols-4 font-manrope  my-1  md:my-5 justify-between items-center  text-sm md:text-md font-bold"
          >
            <h2 className="hidden md:block md:mr-0 mr-5 md:shrink-0  md:p-0 p-4">
              S/N
            </h2>
            <h2 className="md:w-60 md:mr-0 mr-5 md:shrink-0  md:p-0 p-4">
              User
            </h2>

            <h2 className="md:w-80 md:mr-0 mr-5 md:shrink-0 md:p-0 p-4  ">
              Ratings
            </h2>
            <h2 className="md:w-32 md:mr-0 md:ml-14  text-center md:shrink-0 md:p-0 p-4">
              Project
            </h2>
            <h2 className="md:w-36 md:mr-0 mr-5   md:shrink-0 md:p-0 p-4  ">
              Wallet balance
            </h2>
          </section>
          <div>{renderAccounts}</div>
        </div>
      ) : (
        <NoUser />
      )}
    </>
  );
};

export default UserComponent;
