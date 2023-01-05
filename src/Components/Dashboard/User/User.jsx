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
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import MailIcon from "@mui/icons-material/Mail";

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [datas, setDatas] = useState([]);
  const [value, setValue] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const datas_per_page = 9;
  const user_credentials = useSelector((state) => state.users?.user);
  const { loading, user } = useSelector((state) => state.users);
  const { user_stats } = useSelector((state) => state?.userstats);
  const { jobs } = useSelector((state) => state?.jobs);
  const { review } = useSelector((state) => state?.review);
  console.log(review?.docs);

  const job_ids = jobs?.docs?.map((data, index) => {
    return data?.createdBy?._id;
  });

  const createdJobs = jobs?.docs
    ?.map((data, index) => {
      return data?.createdBy?._id;
    })
    ?.reduce((acc, cur) => ((acc[cur] = (acc[cur] || 0) + 1), acc), {});

  const createdReviews = review?.docs
    ?.map((data, index) => {
      return data?.receiver?._id;
    })
    ?.reduce((acc, cur) => ((acc[cur] = (acc[cur] || 0) + 1), acc), {});

  const processedIds = new Set();

  const results = review?.docs?.reduce((acc, item) => {
    if (!processedIds.has(item?.receiver?._id)) {
      processedIds.add(item?.receiver?._id);
      acc.push({ _id: item?.receiver?._id, sum: item.rating });
    } else {
      const result = acc.find(
        (result) => result?.receiver?._id === item?.receiver?._id
      );
      result.sum += item.rating;
    }
    return acc;
  }, []);

  const unique_reviews =
    createdReviews &&
    Object.entries(createdReviews).map((data, index) => {
      return { _id: data[0], review: data[1] };
    });

  const unique_jobs =
    createdJobs &&
    Object.entries(createdJobs).map((data, index) => {
      return { _id: data[0], project: data[1] };
    });

  const mergedReviews = results
    ?.reduce((acc, item) => {
      const marchResult = unique_reviews?.find(
        (data) => data?._id === item?._id
      );
      return acc.concat({ ...item, ...marchResult });
    }, [])
    ?.map((data, index) => {
      return {
        ...data,
        averageReviewPercentage: Math.floor(
          (data?.sum / data?.review) * (100 / 5)
        ),
      };
    });

  const mergedData = user_stats?.docs?.reduce((acc, item) => {
    const matchingJob = unique_jobs?.find((data) => data?._id === item?._id);
    const matchingReview = mergedReviews?.find(
      (data) => data?._id === item?._id
    );

    return acc.concat({ ...item, ...matchingJob, ...matchingReview });
  }, []);

  const GetSumType = (type) => {
    const response = user_stats?.docs?.filter(
      (data, index) => data.type === type
    );
    return response?.length;
  };

  const GetSumStatus = (status) => {
    const response = user_stats?.docs?.filter(
      (data, index) => data.status === status
    );
    return response?.length;
  };

  const GetData = (value, type) => {
    window.localStorage.setItem("STATUS", status);
    setCurrentPage(1);
    setValue(value);

    if (type === "") {
      const response = mergedData;

      setDatas(response);
      return response;
    } else if (type === "user" || type === "vendor") {
      const response = mergedData?.filter((data, index) => data.type === type);
      setDatas(response);
      return response;
    }
    const response = mergedData?.filter((data, index) => data.status === type);
    console.log(response);
    setDatas(response);
    return response;
  };
  useEffect(() => {
    GetData(0, "");
  }, [user_stats]);
  const paginatedData = datas?.slice(0, currentPage * datas_per_page + 1);

  const handlePaginage = () => {
    setCurrentPage(currentPage + 1);
  };

  const alluserssum = user_stats?.docs?.length;
  const user_type = GetSumType("user");
  const vendor_type = GetSumType("vendor");
  const active_status = GetSumStatus("active");
  const pending_status = GetSumStatus("pending");
  const suspended_status = GetSumStatus("suspended");

  const numofusers = [
    alluserssum,
    pending_status,
    suspended_status,
    active_status,
    user_type,
    vendor_type,
  ];

  const handleState = (status, newValue) => {
    dispatch(Users({ status }));
    window.localStorage.setItem("STATUS", status);
    setValue(newValue);
  };

  const renderTabs = TabValues.map((data, index) => {
    return (
      <button
        // onClick={(e) => handleState(data.state, index)}
        onClick={(e) => GetData(index, data.state)}
        key={index}
        className={`
        ${
          `${value}` === `${index}`
            ? "bg-normal text-white"
            : "bg-white text-normal"
        }  font-nunito  relative text-center cursor-pointer shrink-0  md:text-base  text-xs font-medium rounded-md py-4  px-3  md:w-52 md:py-5 md:my-5 my-2 mx-2`}
      >
        <span className="absolute -top-2 -right-0">
          <Badge
            badgeContent={numofusers[index]}
            color="primary"
            showZero
            max={999}
          ></Badge>
        </span>
        {data.name}
      </button>
    );
  });
  return (
    <>
      {loading ? (
        <Loader1 />
      ) : (
        <main className="  ">
          <section className="md:grid md:grid-cols-3 grid grid-cols-2 flex-wrap md:justify-center">
            {renderTabs}
          </section>
          <div className="md:app_container md:overflow-x-scroll">
            <AllAccounts datas={paginatedData} />
            <div className="flex dummyData-center justify-center">
              <button
                onClick={handlePaginage}
                className="bg-normal p-3 md:w-52 w-44 md:rounded-xl rounded-md text-sm text-white md:text-xl my-4 px-4"
              >
                Load more data
              </button>
            </div>
            {/* <PaginateComponent
              action="users"
              count={user_credentials?.totalPages}
            /> */}
          </div>
        </main>
      )}
    </>
  );
};
export default User;
