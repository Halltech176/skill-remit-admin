import { useState, useEffect } from "react";
import search_sm from "../../../assets/search_sm.png";
import { useDispatch, useSelector } from "react-redux";
import { Users, GetUserStats } from "../../../Redux/Actions";
const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const location = window.location.pathname;
  const paths = [
    "/admin/allAccount",
    "/admin/transactions",
    "/admin/notifications",
    "/admin/admin-priviledges",
  ];
  const filter = paths.find((path) => {
    return path === location;
  });

  const handleSearch = (e) => {
    switch (location) {
      case "/admin/allAccount":
        dispatch(GetUserStats(e.target.value));
        break;

      default:
        console.log("yeah");
    }
    setSearchValue(e.target.value);
  };
  console.log(searchValue);
  return (
    <>
      {filter === undefined ? (
        ""
      ) : (
        <div className="flex md:my-0 my-3 relative">
          <input
            value={searchValue}
            onChange={(e) => handleSearch(e)}
            placeholder="Search"
            type="text"
            className="border text-dark bg-primary-100 w-96 rounded-md pr-9 pl-3 py-2"
          />
          <span className="absolute top-1/3 right-2">
            <img src={search_sm} alt="search" />
          </span>
        </div>
      )}
    </>
  );
};
export default Search;
