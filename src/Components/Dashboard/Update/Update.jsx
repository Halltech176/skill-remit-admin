import { useState } from "react";
import FirstTab from "./Tab1";
import SecondTab from "./Tab2";
import ThirdTab from "./Tab3";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const Update = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const titles = [
    {
      name: "skills",
      status: "active",
    },
    {
      name: "Category Section",
      status: "inactive",
    },
    {
      name: "slide",
      status: "inactive",
    },
  ];
  const renderTitles = titles.map((data, index) => {
    return (
      <Tab
        textColor="secondary"
        indicatorColor="secondary"
        label={data.name}
        value={`${index + 1}`}
        className={`
          w-64 p-3 text-xl capitalize font-bold font-nunito rounded-md mx-4`}
      />
    );
  });

  return (
    <main className="">
      <div className="flex items-center my-5 justify-center">
        <TabContext value={value}>
          <TabList onChange={handleChange}>{renderTitles}</TabList>
        </TabContext>
      </div>
      <TabContext value={value}>
        <TabPanel value="1" className="">
          <FirstTab />
        </TabPanel>

        <TabPanel value="2">
          <SecondTab />
        </TabPanel>
        <TabPanel value="3">
          <ThirdTab />
        </TabPanel>
      </TabContext>
    </main>
  );
};
export default Update;
