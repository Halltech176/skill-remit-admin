import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { TOKEN } from "../../Api";
import {
  User,
  AllTransactions,
  SuspendedUsers,
  GetWithdrawalRequests,
  GetAllNotifications,
  Users,
  GetUserStats,
  GetReview,
  FetchChat,
} from "../Redux/Actions";
import { Loader1 } from "../Components/Common/Loader";
import { io } from "socket.io-client";

export const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(User());
    dispatch(SuspendedUsers());
    dispatch(GetWithdrawalRequests());
    dispatch(GetAllNotifications());
    dispatch(Users({ status: "" }));
    dispatch(GetUserStats());
    dispatch(GetReview());
    dispatch(FetchChat());
  }, [dispatch]);

  const trans = useSelector((state) => state);
  const { loading, user, error } = useSelector((state) => state.user);
  // console.log(loading, error, user);
  console.log(user);

  if (TOKEN === null) {
    navigate("/login");
  } else if (TOKEN !== null && loading) {
    return <Loader1 />;
  } else {
    const socket = io(`https://skill-remit.herokuapp.com?userId=${user?._id}`, {
      transports: ["websocket"],
    });
    socket.on("connect", () => {
      console.log(`you are connected  to id ${socket.id}`);
    });
    socket.on("disconnect", () => {
      console.log(socket.id);
    });

    console.log(socket);
    return children;
  }
};
