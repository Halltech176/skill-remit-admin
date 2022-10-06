import { motion } from "framer-motion";
import job1 from "../../assets/job1.png";
import job2 from "../../assets/job2.png";
import job3 from "../../assets/job3.png";
import job4 from "../../assets/job4.png";
import job5 from "../../assets/job5.png";
import job6 from "../../assets/job6.png";
import job7 from "../../assets/job7.png";
import job8 from "../../assets/job8.png";

const Category = () => {
  const images = [job8, job2, job3, job4, job5, job6, job7, job1];
  const jobs = [
    "Hairdresser",
    "Electrician",
    "Plumber",
    "Cleaner",
    "Chef/Cook",
    "Driver",
    "Errand/Personal Shopper",
    "Makeup Artist",
  ];
  const renderJobs = jobs.map((job, index) => {
    return (
      <motion.div key={index} className="m-4 category_image relative">
        <span>
          <img className="md:w-64 w-40" src={images[index]} alt="images" />
        </span>
        <span className="md:text-xl text-md text-white absolute top-1/2 left-1/2 -translate-y-1/2 text-center -translate-x-1/2 font-semibold">
          {job}
        </span>
      </motion.div>
    );
  });

  return (
    <div className="mt-32 mb-12">
      <h1 className="text-center my-10 text-4xl font-semibold">
        <span className="text-primary">Choose Different</span>{" "}
        <span className="text-secondary">Catergory</span>{" "}
      </h1>
      <div className="flex items-center justify-center flex-wrap">
        {renderJobs}
      </div>
    </div>
  );
};
export default Category;
