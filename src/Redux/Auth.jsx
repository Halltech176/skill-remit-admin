import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { TOKEN } from "../../Api";
import { User, AllTransactions } from "../Redux/Actions";
import { Loader1 } from "../Components/Common/Loader";

export const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(User());
  }, [dispatch]);

  const trans = useSelector((state) => state);
  const { loading, user, error } = useSelector((state) => state.user);
  // console.log(loading, error, user);
  console.log(user);

  if (TOKEN === null) {
    navigate("/login");
  } else if (TOKEN !== null && loading) {
    return <Loader1 />;
  }
  // else if(TOKEN !== null && !loading && error) {
  //   return <h1> Please Check your internet coonections  </h1>
  // }
  else {
    return children;
  }
};
