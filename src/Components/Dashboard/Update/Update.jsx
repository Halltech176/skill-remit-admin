import { useState, useEffect } from "react";
import FirstTab from "./Tab1";
import SecondTab from "./Tab2";
import ThirdTab from "./Tab3";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tabs from "@mui/material/Tabs";
import { BASE_URL, HEADER } from "../../../../Api";
import axios from "axios";

const Update = () => {
  const [value, setValue] = useState(0);
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");

  const GetSaveData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}//data/data/`);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetSaveData();
  }, []);

  const AddSkills = async (e) => {
    e.preventDefault();
    try {
      const findDuplicate = skills.find((data) => data === skill);

      if (findDuplicate === undefined) {
        setSkills((prev) => [...prev, skill]);
      } else {
        console.log("skill already exist");
      }
      const response = await axios.put(
        `${BASE_URL}//data/data/633c273e05519899cf28a112`,
        { skills: skills },
        HEADER
      );
      GetSaveData();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // setValue(`${newValue}`);
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
      <button
        onClick={(e) => handleChange(e, index)}
        className={`
        ${
          `${value}` === `${index}`
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
      <div className="flex items-center flex-wrap overflow-x-scroll app_container my-5 justify-center">
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
        <TabPanel value={0} className="">
          <FirstTab
            AddSkills={AddSkills}
            skills={skills}
            setSkills={setSkills}
            skill={skill}
            setSkill={setSkill}
          />
        </TabPanel>

        <TabPanel value={1}>
          <SecondTab />
        </TabPanel>
        <TabPanel value={2}>
          <ThirdTab />
        </TabPanel>
      </TabContext>
    </main>
  );
};
export default Update;
