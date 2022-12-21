import Tab from "@mui/material/Tab";
import { useEffect, useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tabs from "@mui/material/Tabs";
import NotificationBody from "./NotificationBody";
import WithdrawalApproval from "./WithdrawalApproval";
import {
  GetAllNotifications,
  GetWithdrawalRequests,
} from "../../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
const Notifications = () => {
  const dispatch = useDispatch();

  const { allnotifications } = useSelector((state) => state.allnotifications);
  const { withdrawal } = useSelector((state) => state.withdrawal);

  const pagetabs = ["Notifications", "Withdrawals"];
  const renderNotificationsTabs = pagetabs.map((data, index) => {
    return <Tab label={data} value={`${index + 1}`} />;
  });
  const [value, setValue] = useState("1");
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <main>
        <div className="my-3">
          <Tabs
            value={value}
            onChange={handleTabChange}
            aria-label="basic tabs example"
            // className="flex justify-between"
          >
            {renderNotificationsTabs}
          </Tabs>
        </div>

        <div className="my-3">
          <TabContext value={value}>
            <TabPanel value="1">
              {" "}
              <NotificationBody notifications={allnotifications} />
            </TabPanel>
            <TabPanel value="2">
              {" "}
              <WithdrawalApproval withdrawal={withdrawal} />
            </TabPanel>
          </TabContext>
        </div>
      </main>
    </>
  );
};
export default Notifications;
