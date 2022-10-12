import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";

import users1 from "../../../assets/users1.png";
import transaction1 from "../../../assets/transactions1.png";
import weight1 from "../../../assets/weight1.png";
import judge1 from "../../../assets/judge1.png";
import update1 from "../../../assets/update1.png";
import admin1 from "../../../assets/admin1.png";
import broadcast1 from "../../../assets/broadcast1.png";
import settings1 from "../../../assets/settings1.png";
import logout1 from "../../../assets/logout1.png";

import users2 from "../../../assets/users2.png";
import transaction2 from "../../../assets/transactions2.png";
import weight2 from "../../../assets/weight2.png";
import judge2 from "../../../assets/judge2.png";
import update2 from "../../../assets/update2.png";
import admin2 from "../../../assets/admin2.png";
import broadcast2 from "../../../assets/broadcast2.png";
import settings2 from "../../../assets/settings2.png";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import RouteLinks from "./RouteLinks.json";

const drawerWidth = 250;
const Sidebar = () => {
  const inactives = [
    users1,
    transaction1,
    judge1,
    weight1,
    update1,
    admin1,
    broadcast1,
    settings1,
    logout1,
  ];
  const actives = [
    users2,
    transaction2,
    judge2,
    weight2,
    update2,
    admin2,
    broadcast2,
    settings2,
    logout1,
  ];
  const [side, setSide] = useState("right");

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  console.log(path);
  const routes = RouteLinks.map((data, index) => {
    return (
      <Link
        to={data.route}
        key={data.name}
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
              src={data.route === path ? actives[index] : inactives[index]}
              alt="icons"
            />
          </span>{" "}
          <span>{data.name}</span>
        </li>
      </Link>
    );
  });
  console.log(RouteLinks.slice(0, RouteLinks.length - 1));
  return (
    <>
      <main className="flex md:hidden">
        <CssBaseline />
        <AppBar position="fixed" elevation={0} open={open}>
          <Toolbar className="bg-primary border-transparent">
            <Box noWrap sx={{ flexGrow: 1 }} component="div">
              <h1 onClick={() => navigate("/")}>Logo</h1>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          // variant="persistent"
          anchor="right"
          open={open}
        >
          {/* <DrawerHeader> */}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          {/* </DrawerHeader> */}
          <Divider />
          <List className="text-normal  font-black text-md">
            {RouteLinks.slice(0, RouteLinks.length - 1).map((data, index) => (
              <li
                className={` ${
                  data.route === path ? "bg-normal  text-white" : "text-norml"
                }  font-aeonik-light mx-1 font-medium  text-xl  p-2 `}
              >
                <Link
                  to={data.route}
                  key={data.name}
                  onClick={handleDrawerClose}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <img
                        className="w-5 mr-2"
                        src={
                          data.route === path
                            ? inactives[index]
                            : actives[index]
                        }
                        alt="icons"
                      />
                    </ListItemIcon>
                    <ListItemText primary={data.name} />
                  </ListItemButton>
                </Link>
              </li>
            ))}
          </List>
          <Divider />

          <button className="bg-primary m-3 px-3 py-2 rounded-md text-white text-md font-bold">
            Logout
          </button>
        </Drawer>
      </main>
      <aside className=" hidden md:block  overflow-y-scroll py-10 app_container h-full text-white z-20 p-7 top-0 left-0      absolute">
        <h1
          onClick={() => navigate("/")}
          className="text-6xl font-aeonik mt-3 font-light"
        >
          {" "}
          Logo
        </h1>
        <span
          style={{ background: "grey" }}
          className="block w-36 h-0.5"
        ></span>
        <ul
          className="font-aeonik flex flex-col my-8 font-semibold text-3xl"
          style={{ color: "white" }}
        >
          {routes}
        </ul>
      </aside>
    </>
  );
};
export default Sidebar;
