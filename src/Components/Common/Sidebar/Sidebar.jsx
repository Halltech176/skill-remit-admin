import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";
import broadcast from "../../../assets/Broadcast.png";
import users2 from "../../../assets/users.png";
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

const drawerWidth = 240;
const Sidebar = () => {
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
    <>
      <main className="flex md:hidden">
        <CssBaseline />
        <AppBar position="fixed" elevation={0} open={open}>
          <Toolbar className="bg-primary border-transparent">
            <Box noWrap sx={{ flexGrow: 1 }} component="div">
              <h1>Logo</h1>
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
          <List className="text-normal font-black text-md">
            {RouteLinks.map((data, index) => (
              <Link
                to={data.route}
                key={data.name}
                onClick={handleDrawerClose}
                disablePadding
              >
                <ListItemButton>
                  {/* <ListItemIcon>
                    {index % 2 === 0 ? (
                      <FaHome size="1.5rem" />
                    ) : (
                      <RiNodeTree size="1.5rem" />
                    )}
                  </ListItemIcon> */}
                  <ListItemText primary={data.name} />
                </ListItemButton>
              </Link>
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
