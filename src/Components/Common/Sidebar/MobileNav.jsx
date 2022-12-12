import * as React from "react";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";

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
const MobileNav = ({ actives, inactives, handleLogout }) => {
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

  return (
    <>
      <main className="flex md:hidden">
        <CssBaseline />
        <AppBar position="fixed" elevation={0} open={open}>
          <Toolbar className="bg-primary flex p-1 justify-bewteen border-transparent">
            <Box noWrap sx={{ flexGrow: 1 }} component="div">
              <span onClick={() => navigate("/")}>
                <img className="rounded-full w-8 h-8" src={logo} alt="logo" />
              </span>
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
