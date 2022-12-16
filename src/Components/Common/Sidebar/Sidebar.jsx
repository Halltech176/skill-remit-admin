import * as React from "react";

import { useState } from "react";
import ConfirmLogout from "./ConfirmLogout";

import MobileNav from "./MobileNav";

import logo from "../../../assets/logo_md.jpg";
import { LightLogo } from "../Logo";

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

import RouteLinks from "./RouteLinks.json";

const Sidebar = ({ route }) => {
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

  const navigate = useNavigate();
  const location = useLocation();
  const [toggleLogout, setToggleLogout] = useState(false);
  const path = location.pathname;

  const handleLogout = () => {
    setToggleLogout(!toggleLogout);
    console.log("logging...");
  };

  const routes = RouteLinks.map((data, index) => {
    return (
      <div
        key={data.name}
        className={` font-aeonik-light font-medium  text-xl`}
        // style={{ color: "white" }}
      >
        <li
          onClick={
            data.name === "Logout" ? handleLogout : () => navigate(data.route)
          }
          className={`${
            data.route.split("/")[2] === undefined
              ? "text-white"
              : data.route.split("/")[2] === route[2]
              ? "text-primary-100 font-black bg-white "
              : "text-white"
          } my-1 w-full z-10 flex p-3 items-center`}
        >
          <span>
            <img
              className="w-5 mr-2"
              src={
                data.route.split("/")[2] === route[2]
                  ? actives[index]
                  : inactives[index]
              }
              alt="icons"
            />
          </span>{" "}
          <span>{data.name}</span>
        </li>
      </div>
    );
  });

  return (
    <>
      <ConfirmLogout
        toggleLogout={toggleLogout}
        setToggleLogout={setToggleLogout}
      />

      <main className="flex md:hidden">
        <MobileNav
          actives={actives}
          inactives={inactives}
          toggleLogout={toggleLogout}
          setToggleLogout={setToggleLogout}
        />
      </main>

      <aside className=" hidden md:block  overflow-y-scroll py-2 app_container h-full text-white z-20 p-5 top-0 left-0      absolute">
        <div className="h-20 flex items-center justify-center mt-10 ">
          <span onClick={() => navigate("/")}>
            <LightLogo />
          </span>
        </div>

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
