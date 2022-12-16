import * as React from "react";
import user_image from "../../../assets/no_avatar.png";
import { useState } from "react";

import { styled, useTheme } from "@mui/material/styles";
import bell from "../../../assets/bell.png";
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import { User } from "../../../Redux/Actions";

import logo from "../../../assets/logo_md.jpg";
import { LightLogo } from "../Logo";

import logout1 from "../../../assets/logout1.png";

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
import RouteLinks from "./RouteLinks.json";

const drawerWidth = 250;
const MobileNav = ({ actives, inactives, toggleLogout, setToggleLogout }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(User());
  }, []);
  const [side, setSide] = useState("right");
  const { user } = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const handleLogout = () => {
    document.body.style.overflow = "hidden";
    setOpen(false);

    setToggleLogout(true);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleProfile = () => {
    setOpen(false);
    navigate("/admin/settings");
  };

  return (
    <>
      <main className="flex md:hidden">
        <CssBaseline />
        <AppBar position="fixed" elevation={0} open={open}>
          <nav className="bg-primary flex p-2 px-4 items-center justify-between border-transparent">
            <div className="bg-white h-8 w-8 overflow-hidden rounded-full">
              {/* <LightLogo /> */}
              <span onClick={() => navigate("/")}>
                <img
                  className="h-full w-full object-cover"
                  src={logo}
                  alt="logo"
                />{" "}
              </span>
            </div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          </nav>
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
          <Divider />
          <div
            onClick={handleProfile}
            className=" flex items-center justify-around p-2 "
          >
            <div className="w-6 h-6 block bg-primary rounded-full overflow-hidden">
              <img
                src={user?.avatar ? user?.avatar?.url : user_image}
                className="w-full h-full object-cover "
                alt="user"
              />
            </div>
            <h3 style={{ color: "#0D0140" }} className="font-aeonik-light ml-1">
              {user?.firstName} {user?.lastName}
            </h3>
          </div>
          {/* </DrawerHeader> */}
          <Divider />
          <List className="text-normal  font-black text-md">
            {RouteLinks.slice(0, RouteLinks.length - 1).map((data, index) => (
              <li
                className={` ${
                  data.route === path
                    ? "bg-normal rounded-md text-white"
                    : "text-norml"
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

          <button
            onClick={handleLogout}
            className="bg-primary m-3 px-3 py-2 rounded-md text-white text-md font-bold"
          >
            Logout
          </button>
        </Drawer>
      </main>
    </>
  );
};

export default MobileNav;
