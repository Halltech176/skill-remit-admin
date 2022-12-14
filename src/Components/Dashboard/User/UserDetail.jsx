import { useNavigate } from "react-router";
import no_avatar from "../../../assets/no_avatar.png";
import { NoReview } from "../../Common/NoData";
import user_review from "../../../assets/user_review.png";
import toggle_arrow from "../../../assets/toggle_arrow.png";
import StarRatings from "./StarRatings";
import star1 from "../../../assets/Star.png";

import star4 from "../../../assets/Star-3.png";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Users, ClickedUser, GetUserReview } from "../../../Redux/Actions";
import { BASE_URL, TOKEN, HEADER } from "../../../../Api";
import { Loader1 } from "../../Common/Loader";
import { HandleError } from "../../Common/HandleError";
import { HandleSuccess } from "../../Common/HandleSuccess";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import NotificationComponent from "./Notification.component";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import EditReview from "./EditReview";
import DeleteReview from "./DeleteReview";

const UserDetail = () => {
  const navigate = useNavigate();
  const reviewss = new Array(4).fill(0);
  const selector = useSelector((state) => state?.clickeduser);
  const { review, loading } = useSelector((state) => state?.review);
  const [open, setOpen] = useState(false);
  const [reviewObj, setReviewObj] = useState({});
  const { user_review } = useSelector((state) => state?.user_review);
  console.log(user_review);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ClickedUser());
    dispatch(GetUserReview());
  }, []);
  console.log(selector?.user?.wallet?.balance);

  const stats = [
    {
      value: ` ₦ ${
        selector?.user?.wallet?.balance === undefined
          ? 0
          : selector?.user?.wallet?.balance
      }`,
      purpose: "Wallet Balance",
      status: "balance",
    },
    {
      value: 90,
      purpose: "Completed Job",
      status: "completed",
    },
    {
      value: 900,
      purpose: "Pending Job",
      status: "pending",
    },
  ];

  const ratingsSum = user_review?.docs?.reduce((acc, cur) => {
    console.log(cur?.rating);
    return acc + cur?.rating;
  }, 0);
  const averageRatings = user_review / user_review?.totalDocs;
  console.log(averageRatings);
  const activeRatings = new Array(4).fill(star1);
  const inactiveRatings = new Array(5 - 4).fill(star4);
  const starRatings = activeRatings.concat(inactiveRatings);

  const renderStats = stats.map((data, index) => {
    return (
      <section className="flex flex-col my-2 md:shadow-xl shadow-md bg-white md:py-8 p-3 md:w-64 w-40 rounded-md items-center">
        <h1
          className={`${
            data.status === "balance"
              ? "text-danger"
              : data.status === "completed"
              ? "text-info"
              : "text-primary"
          } text-2xl md:text-6xl`}
        >
          {data.value}
        </h1>
        <p
          style={{ color: "#111114" }}
          className="md:text-2xl text-center text-base my-2"
        >
          {data.purpose}
        </p>
      </section>
    );
  });
  const renderSkills = selector?.user?.skills?.map((data, index) => {
    return (
      <button
        style={{ color: "#524B6B" }}
        className="bg-primary-100 text-sm rounded-xl my-2 mr-2 py-2 px-5"
      >
        {data}
      </button>
    );
  });
  const renderRatings = starRatings.map((data, index) => {
    return (
      <span>
        <img className="w-8" src={data} alt="stars" />
      </span>
    );
  });

  const SpecificReview = (id) => {
    const response = user_review?.docs?.find((data) => {
      return data?._id === id;
    });
    setReviewObj(response);
  };
  console.log(reviewObj);

  const renderReviews = user_review?.docs?.map((data, index) => {
    console.log(data);
    return (
      <section
        style={{ background: "#F3F1FF" }}
        className="max-w-md my-5 mx-2  p-5 rounded-2xl "
        onClick={() => SpecificReview(data?._id)}
      >
        <div className="flex my-1 items-center justify-between">
          <span>
            <img
              className="w-10 h-10 rounded-full"
              src={
                data?.createdBy?.avatar
                  ? data?.createdBy?.avatar?.url
                  : no_avatar
              }
            />
          </span>
          <div className="flex">
            <StarRatings ratings={data?.rating} />
          </div>
        </div>
        <p>{data?.description}</p>
        <span className="block border-b-2 my-3"> </span>
        <div className="flex flex-row-reverse text-right">
          <span className="mx-2 cursor-pointer">
            <MdOutlineDelete
              onClick={() => setOpen2(true)}
              color="#f9896b"
              size="1.2rem"
            />
          </span>
          <span className=" cursor-pointer">
            <BiEdit
              onClick={() => setOpen1(true)}
              color="#130160"
              size="1.2rem"
            />
          </span>
        </div>
      </section>
    );
  });

  const changeState = async (status) => {
    try {
      const response = await axios.put(
        `${BASE_URL}//admin/users/${selector?.user?._id}`,
        { status: status === "active" ? "suspended" : "active" },
        HEADER
      );
      dispatch(ClickedUser());
      dispatch(Users());
      HandleSuccess(response);
      console.log(response);
    } catch (err) {
      HandleError(err);
      console.log(err);
    }
    console.log(status);
    // console.log("changing state");
  };
  return (
    <>
      <EditReview open={open1} setOpen={setOpen1} review={reviewObj} />
      <DeleteReview open={open2} setOpen={setOpen2} review={reviewObj} />
      <NotificationComponent
        user={selector?.user}
        open={open}
        setOpen={setOpen}
      />
      <ToastContainer transition={Zoom} autoClose={800} />
      {selector?.loading ? (
        <Loader1 />
      ) : (
        <main className="">
          <div className="md:flex block justify-between items-center">
            <div className="image w-56 rounded-full mx-auto white overflow-hidden shrink-0 h-56">
              <img
                className="object-cover w-full h-full  "
                src={
                  selector?.user?.avatar?.url
                    ? selector?.user?.avatar?.url
                    : no_avatar
                }
                alt="user"
              />
            </div>
            <div className="md:w-2/3 w-full pl-4  ">
              <div className="buttons justify-center mt-5 flex items-center">
                <button
                  onClick={() => changeState(selector?.user?.status)}
                  className={` ${
                    selector?.user?.status === "active"
                      ? "bg-info-normal"
                      : "bg-red-500"
                  }  flex   items-center justify-center text-white w-full md:w-44 text-md md:text-xl rounded-md p-2 md:p-4 mx-4 `}
                >
                  {selector?.user?.status?.toUpperCase()}
                  <span className="mx-3">
                    <img src={toggle_arrow} alt="arrow" />
                  </span>
                </button>
                <button
                  onClick={() => setOpen(true)}
                  className="bg-normal text-white w-full md:w-44 text-md md:text-xl rounded-md p-2 md:p-4 mx-4 "
                >
                  NOTIFICATION
                </button>
              </div>
              <div className="flex capitalize my-14">
                <div className="details ">
                  <p className="md:text-2xl text-md  my-3 flex items-center text-primary font-inter">
                    <span className="font-extralight">Full Name:</span>
                    <span className="font-bold mx-3">
                      {selector?.user?.firstName} {selector?.user?.lastName}
                    </span>
                  </p>
                  <p className="md:text-2xl text-md  my-3 flex items-center text-primary font-inter">
                    <span className="font-extralight">Phone Number:</span>
                    <span className="font-bold mx-3">08123456789</span>
                  </p>
                  <div className="flex md:text-2xl text-md  my-3 font-extralight items-center text-primary font-inter my-5">
                    <p>Ratings:</p>
                    {review?.docs?.length ? (
                      <div className="flex mx-3">{renderRatings}</div>
                    ) : (
                      <p className="mx-3 text-red-300">
                        No reviews available yet
                      </p>
                    )}
                  </div>

                  {selector?.user?.skills?.length === 0 ? (
                    ""
                  ) : (
                    <div className="md:text-2xl text-md  my-3 flex flex-col   font-inter">
                      {" "}
                      <p className="font-extralight text-primary">Skills:</p>
                      <div className="flex flex-wrap my-3">
                        {renderSkills}
                      </div>{" "}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between  flex-wrap md:flex-nowrap md:m-10">
            {renderStats}
          </div>
          <div className="flex flex-wrap  md:mb-10">
            {review?.docs?.length === 0 ? <NoReview /> : renderReviews}
          </div>
        </main>
      )}
    </>
  );
};
export default UserDetail;
