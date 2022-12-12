import user_image from "../../../assets/user.png";
import search_sm from "../../../assets/search_sm.png";
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
          <div className="flex md:my-0 my-3 relative">
            <input
              //   style={{ background: "rgba(19, 1, 96, 0.2)" }}
              placeholder="Search"
              type="text"
              className="border text-dark bg-primary-100 w-96 rounded-md pr-9 pl-3 py-2"
            />
            <span className="absolute top-1/3 right-2">
              <img src={search_sm} alt="search" />
            </span>
          </div>

          <div className="md:flex  hidden items-center justify-between ">
            <span>
              <img src={bell} alt="bell" />
            </span>
            {/* <input type="search" /> */}
            <span onClick={() => navigate("/admin/settings")} className="mx-2">
              <img src={user_image} className="w-12" alt="user" />
            </span>
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
