import * as React from "react";
import broadcast from "../../../assets/Broadcast.png";
import users2 from "../../../assets/users.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import RouteLinks from "./RouteLinks.json";

const drawerWidth = 240;
const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  const routes = RouteLinks.map((data, index) => {
    return (
      <Link
        to={data.route}
        key={index}
        className={` font-aeonik-light font-medium  text-xl`}
        // style={{ color: "white" }}
      >
        <li
          className={`${
            data.route === path
              ? "text-primary-100 font-black bg-white "
              : "text-white"
          } my-1 w-full z-10 flex p-3 items-center`}
        >
          <span>
            <img
              className="w-5 mr-2"
              src={data.route === path ? users2 : broadcast}
              alt="broadcast"
            />
          </span>{" "}
          <span>{data.name}</span>
        </li>
      </Link>
    );
  });
  return (
    <aside className=" hidden md:block overflow-y-scroll app_container h-full text-white z-20 p-7 top-0 left-0      absolute">
      <h1 onClick={() => navigate("/")} className="text-4xl mt-3 font-black">
        {" "}
        LOGO
      </h1>
      <span style={{ background: "grey" }} className="block w-36 h-0.5"></span>
      <ul
        className="font-aeonik flex flex-col my-3 font-semibold text-3xl"
        style={{ color: "white" }}
      >
        {routes}
      </ul>
    </aside>
  );
};
export default Sidebar;
