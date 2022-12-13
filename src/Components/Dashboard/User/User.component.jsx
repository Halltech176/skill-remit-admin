import Accounts from "./Accounts.json";
import person1 from "../../../assets/no_avatar.png";
import arrowDown from "../../../assets/arrow-down.png";
import { Users, ClickedUser, GetReview } from "../../../Redux/Actions";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { NoUser } from "../../Common/NoData";
const UserComponent = ({ user_credentials }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log(selector?.clickeduser);

  const GetUserDetails = (id) => {
    console.log("Getting user details");
    window.localStorage.setItem("ACTIVE_USER_ID", JSON.stringify(id));

    dispatch(ClickedUser());
    dispatch(GetReview());
    const response = user_credentials?.docs.find((data) => {
      return data._id === id;
    });
    dispatch(ClickedUser());
    console.log(response);

    navigate(`/admin/allAccount/${response?._id}`);
  };

  const renderAccounts = user_credentials?.docs?.map((data, index) => {
    return (
      <section
        key={index}
        onClick={() => GetUserDetails(data?._id)}
        style={{ color: "#808080" }}
        className="flex  capitalize border-b-2 py-5 text-md font-bold font-manrope my-2 md:my-5 items-center justify-between"
      >
        <p className="flex mr-5 md:mr-0 shrink-0  items-center w-60">
          <span>
            {" "}
            <img
              src={data?.avatar?.url ? data?.avatar?.url : person1}
              className="w-8 rounded-full h-8"
              alt="user"
            />{" "}
          </span>
          <span className="mx-3">
            {data.firstName} {data.lastName}
          </span>
        </p>

        <div className="flex shrink-0 mr-5 md:mr-0 items-center  w-80 justify-between">
          {data.ratings === null ? (
            ""
          ) : (
            <meter
              className="w-36 hidden md:block  shrink-0"
              max={100}
              min={0}
              value={30}
              high={75}
              low={25}
              optimum={50}
            ></meter>
          )}
          <span className="mx-2 shrink-0">
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
        <p className="w-32 md:ml-14 text-center  md:mr-0 shrink-0 "> 200</p>
        <p className="w-36 mr-5 md:mr-0  text-center shrink-0 ">
          {" "}
          ${data?.wallet?.balance}
        </p>
      </section>
    );
  });
  return <>{user_credentials?.docs?.length ? renderAccounts : <NoUser />}</>;
};

export default UserComponent;
