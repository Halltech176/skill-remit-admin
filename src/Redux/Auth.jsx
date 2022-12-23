import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { TOKEN, BASE_URL } from "../../Api";
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
  SiteData,
  Banks,
  Jobs,
} from "../Redux/Actions";
import { Loader1 } from "../Components/Common/Loader";

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
    dispatch(Banks());
    dispatch(SiteData());
    dispatch(Jobs());
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
    return children;
  }
};
