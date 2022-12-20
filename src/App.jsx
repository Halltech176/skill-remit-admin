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
import Notifications from "./Components/Dashboard/Notifications/Notifications";
import NoMatch from "./Components/Common/NoMatch";
import Login from "./Components/Form/Login";
import EmailVerification from "./Components/Form/EmailVerification";
import PasswordReset from "./Components/Form/PasswordReset";

import { RequireAuth } from "./Redux/Auth";

import "./App.css";

function App() {
  const location = useLocation();
  const path = location.pathname;

  const exemptedPaths = ["/login", "/email-verification", "/password-reset"];
  const checkPath = exemptedPaths.find((data, index) => {
    return data === path;
  });

  const title_text =
    path === "/"
      ? "Overview"
      : path.split("/")[2] === "admin-priviledges"
      ? "Admin"
      : path.split("/")[2] === "allAccount"
      ? "All Account"
      : path.split("/")[2];
  return (
    <div className="App       ">
      {checkPath ? "" : <Sidebar route={path.split("/")} />}

      <div
        style={{
          background: "#F8FDF9",
        }}
        className={` ${
          checkPath
            ? ""
            : "md:ml-60 scroll_container md:rounded-tl-3xl md:rounded-bl-3xl"
        }   overflow-x-hidden    app_container    px-5  md:px-8 `}
      >
        {checkPath ? "" : <Header title={title_text} />}

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
          <Route
            path="/admin/allAccount"
            element={
              <RequireAuth>
                <User />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin/commission"
            element={
              <RequireAuth>
                {" "}
                <Commission />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/admin-priviledges"
            element={
              <RequireAuth>
                {" "}
                <Admin />{" "}
              </RequireAuth>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <RequireAuth>
                <Settings />{" "}
              </RequireAuth>
            }
          />
          <Route
            path="/admin/broadcast"
            element={
              <RequireAuth>
                <Broadcast />{" "}
              </RequireAuth>
            }
          />
          <Route
            path="/admin/transactions"
            element={
              <RequireAuth>
                <Transactions />{" "}
              </RequireAuth>
            }
          />
          <Route
            path="/admin/notifications"
            element={
              <RequireAuth>
                <Notifications />{" "}
              </RequireAuth>
            }
          />

          <Route
            path="/admin/dispute"
            element={
              <RequireAuth>
                <Dispute />{" "}
              </RequireAuth>
            }
          />
          <Route
            path="/admin/update"
            element={
              <RequireAuth>
                <Update />
              </RequireAuth>
            }
          />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route
            path="/admin/allAccount/:id"
            element={
              <RequireAuth>
                {" "}
                <UserDetail />{" "}
              </RequireAuth>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
