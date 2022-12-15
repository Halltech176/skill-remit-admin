import user_image from "../../../assets/no_avatar.png";
import search_sm from "../../../assets/search_sm.png";
import Search from "./Search.component";
import bell from "../../../assets/bell.png";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { User } from "../../../Redux/Actions";
const Header = ({ title }) => {
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.user);
  const selector = useSelector((state) => state.user);
  const navigate = useNavigate();
  console.log(user?.firstName);
  console.log(selector);
  useEffect(() => {
    dispatch(User());
  }, []);
  return (
    <>
      <header className="md:flex md:py-10 md:pt-5 pt-24 justify-between items-center">
        <div className="flex justify-between">
          <h1 className="text-xl text-dark font-aeonik md:text-3xl capitalize font-medium">
            {title}
          </h1>
        </div>
        <Search />

        <div className="md:flex  hidden items-center justify-between ">
          <span>
            <img src={bell} alt="bell" />
          </span>
          {/* <input type="search" /> */}
          <div
            onClick={() => navigate("/admin/settings")}
            className="mx-2 w-8 h-8 rounded-full overflow-hidden"
          >
            <img
              src={user?.avatar ? user?.avatar?.url : user_image}
              className="w-full h-full object-cover "
              alt="user"
            />
          </div>
          <h3
            onClick={() => navigate("/admin/settings")}
            style={{ color: "#0D0140" }}
            className="font-aeonik-light ml-1"
          >
            {user?.firstName} {user?.lastName}
          </h3>
        </div>
      </header>
    </>
  );
};
export default Header;
