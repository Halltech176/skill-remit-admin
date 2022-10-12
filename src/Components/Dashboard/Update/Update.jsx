import { useState } from "react";
import FirstTab from "./Tab1";
import SecondTab from "./Tab2";
import ThirdTab from "./Tab3";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tabs from "@mui/material/Tabs";

const Update = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    console.log(value);
    setValue(`${newValue}`);
  };
  console.log(value);
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
      // <Tab
      //   textColor="secondary"
      //   indicatorColor="secondary"
      //   scrollButtons={false}
      //   label={data.name}
      //   value={`${index + 1}`}
      //   className={`
      //     md:w-64 w-48 p-3 text-md  md:text-xl capitalize font-bold font-nunito rounded-md mx-4`}
      // />
      <button
        onClick={(e) => handleChange(e, index + 1)}
        className={`
        ${
          `${value}` === `${index + 1}`
            ? "bg-normal text-white"
            : "bg-white text-normal"
        } md:w-64 w-48 shrink-0 p-3 text-md md:text-xl capitalize font-bold font-nunito rounded-md mx-4`}
      >
        {data.name}
      </button>
    );
  });

  return (
    <main className="">
      <div className="flex items-center flex-wrap overflow-x-scroll my-5 justify-center">
        <Tabs
          value={value}
          variant="scrollable"
          scrollButtons={false}
          onChange={handleChange}
        >
          {renderTitles}
        </Tabs>
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
