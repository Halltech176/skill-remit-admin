import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router";
import Sidebar from "./Components/Common/Sidebar/Sidebar";
import Header from "./Components/Common/Header/Header";

import User from "./Components/Dashboard/User/User";
import UserDetail from "./Components/Dashboard/User/UserDetail";
import Commission from "./Components/Dashboard/Commission/Commission";
import Admin from "./Components/Dashboard/Admin/Admin";
import Settings from "./Components/Dashboard/Settings/Settings";
import Broadcast from "./Components/Dashboard/Broadcast/Broadcast";
import Transactions from "./Components/Dashboard/Transactions/Transactions";
import Dispute from "./Components/Dashboard/Dispute/Dispute";
import Update from "./Components/Dashboard/Update/Update";
import Overview from "./Components/Dashboard/Overview/Overview";
import NoMatch from "./Components/Common/NoMatch";
import Login from "./Components/Form/Login";

import { RequireAuth } from "./Redux/Auth";

import "./App.css";

function App() {
  const location = useLocation();
  const path = location.pathname;
  console.log(path.split("/"));
  const title_text =
    path === "/"
      ? "Overview"
      : path.split("/")[2] === "admin-priviledges"
      ? "Admin"
      : path.split("/")[2] === "allAccount"
      ? "All Account"
      : path.split("/")[2];
  return (
    <div className="  ">
      <div className="App       ">
        {path === "/login" ? "" : <Sidebar route={path.split("/")} />}

        <div
          style={{
            background: "#F8FDF9",
            // borderTopLeftRadius: "4rem",
            // borderBottomLeftRadius: "4rem",
          }}
          className={` ${
            path === "/login"
              ? ""
              : "md:ml-60 scroll_container md:rounded-tl-3xl md:rounded-bl-3xl"
          }   overflow-x-hidden    app_container    px-3  md:px-8 `}
        >
          {path === "/login" ? "" : <Header title={title_text} />}

          <Routes>
            <Route
              path="/admin"
              element={
                <RequireAuth>
                  <Overview />{" "}
                </RequireAuth>
              }
            />

            <Route
              path="/"
              element={
                <RequireAuth>
                  <Overview />{" "}
                </RequireAuth>
              }
            />
            <Route path="/admin/allAccount" element={<User />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/commission" element={<Commission />} />
            <Route path="/admin/admin-priviledges" element={<Admin />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/admin/broadcast" element={<Broadcast />} />
            <Route path="/admin/transactions" element={<Transactions />} />

            <Route path="/admin/dispute" element={<Dispute />} />
            <Route path="/admin/update" element={<Update />} />
            <Route path="/admin/allAccount/:id" element={<UserDetail />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
