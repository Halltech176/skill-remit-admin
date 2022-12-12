import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { AllTransactions, Users, SuspendedUsers } from "../../Redux/Actions";

const PaginateComponent = ({ action, count }) => {
  const status = window.localStorage.getItem("STATUS");

  const dispatch = useDispatch();
  const action_values = {
    transactions: "transactions",
    users: "user",
    suspended: "user",
  };

  const selector = useSelector(
    (state) => state?.[action]?.[action_values[action]]
  );

  console.log(action, count);

  const handleChange = (event, value) => {
    switch (action) {
      case "transactions":
        dispatch(AllTransactions({ page: value }));

        break;

      case "users":
        dispatch(Users({ status, page: value }));

        break;

      case "suspended":
        dispatch(SuspendedUsers({ page: value }));

        break;
      default:
        console.log("checking..");
    }
  };
  console.log(selector?.page);

  return (
    <div className="flex justify-center my-5 items-center">
      {count <= 1 ? (
        ""
      ) : (
        <Stack spacing={2}>
          <Pagination
            count={count}
            page={selector?.page}
            color="primary"
            onChange={handleChange}
          />
        </Stack>
      )}
    </div>
  );
};

export default PaginateComponent;
