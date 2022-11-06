import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { TOKEN } from "../../Api";
import { User } from "../Redux/Actions";
import { Loader1 } from "../Components/Common/Loader";

export const RequireAuth = ({ children }) => {
  const val = JSON.parse(localStorage.getItem("val"));
  console.log(val);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.user);
  console.log(user);
  useEffect(() => {
    dispatch(User());
  }, []);
  if (TOKEN === null) {
    useEffect(() => {
      navigate("/login");
    }, []);
  } else if (TOKEN !== null && loading) {
    return <Loader1 />;
  } else {
    return children;
  }
};
