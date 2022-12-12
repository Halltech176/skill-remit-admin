import { useSelector, useDispatch } from "react-redux";
import RenderAccounts from "./User.component";
import { useEffect } from "react";
export const AllAccounts = () => {
  const { loading, user, error } = useSelector((state) => state.users);
  // console.log(user);
  return <RenderAccounts user_credentials={user} />;
};
