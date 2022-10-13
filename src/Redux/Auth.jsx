import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { TOKEN } from "../../Api";
import { User } from "../Redux/Actions";

export const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log(selector.user);
  useEffect(() => {
    dispatch(User());
  }, []);
  if (TOKEN !== undefined) {
    return children;
  } else {
    useEffect(() => {
      navigate("/login");
    }, []);
  }
  //   adjkadsjk;
  console.log("yeah");
};
