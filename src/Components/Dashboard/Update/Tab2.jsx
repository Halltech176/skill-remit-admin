import { useState } from "react";
import job1 from "../../../assets/job1.png";
import job2 from "../../../assets/job2.png";
import job3 from "../../../assets/job3.png";
import job4 from "../../../assets/job4.png";
import { UploadData, UpdateData } from "./FormModal1";
const Tab2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleModal = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const [isOpen2, setIsOpen2] = useState(false);
  const ToggleModal2 = (e) => {
    e.preventDefault();
    setIsOpen2(!isOpen2);
  };
  const sections = [
    {
      title: "Hairdresser",
      img: job1,
    },
    {
      title: "Electrician",
      img: job2,
    },
    {
      title: "Plumber",
      img: job3,
    },
    {
      title: "Cleaner",
      img: job4,
    },
    {
      title: "Cleaner",
      img: job4,
    },
    {
      title: "Electrician",
      img: job2,
    },
    {
      title: "Plumber",
      img: job3,
    },
    {
      title: "Cleaner",
      img: job4,
    },
    {
      title: "Cleaner",
      img: job4,
    },
  ];
  const renderSections = sections.map((data, index) => {
    return (
      <div
        onClick={ToggleModal2}
        className="w-52   flex flex-col h-48 items-center justify-center relative"
      >
        <div className="overlay"></div>
        <img
          className="absolute w-full h-full object-cover top-0 left-0 bottom-0 right-0"
          src={data.img}
          alt="img"
        />
        <span className=" z-10 font-bold text-md text-white">{data.title}</span>
      </div>
    );
  });
  return (
    <section>
      <UploadData open={isOpen} ToggleModal={ToggleModal} />
      <UpdateData open={isOpen2} ToggleModal={ToggleModal2} />
      <div className="flex d justify-end">
        <button onClick={ToggleModal} className="btn w-44 mb-3 ">
          Add
        </button>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-2  ">
        {renderSections}
      </div>
    </section>
  );
};
export default Tab2;
