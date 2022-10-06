import { motion } from "framer-motion";
import Features from "./Features";
import PhoneImage from "./PhoneImage";
import MobileApp from "./MobileApp";
import Category from "./Category";
import curve_line from "../../assets/curve_line.png";
import advert from "../../assets/advert.png";
const Home = () => {
  return (
    <>
      <div className=" home-container z-20 relative py-16 md:py-20 block md:flex items-center justify-evenly  px-16 ">
        <motion.div
          className="z-20 "
          initial={{ transform: "translateX(-20rem)" }}
          whileInView={{ transform: "translateX(0rem)" }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl  max-w-xl md:text-5xl relative font-dm font-black md:font-medium">
            We Help in getting{" "}
            <span className="text-secondary">Hired and Hire</span> people for
            business Faster
            <span>
              <img
                className="w-64 -mt-2 mx-5"
                src={curve_line}
                alt="curve_line"
              />
            </span>
          </h1>
          <button className="md:bg-white  my-10 px-3 py-2 rounded-md text-normal text-md font-bold">
            Download App
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, transform: "translateX(20rem)" }}
          whileInView={{ opacity: 1, transform: "translateX(0rem)" }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="block absolute -z-10 md:top-0 top-10  md:relative md:flex mr-10"
        >
          <PhoneImage />
        </motion.div>
      </div>
      <Features />
      <div className="flex flex-wrap mx-2 md:mx-16 my-10 items-center justify-evenly">
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-20rem)" }}
          whileInView={{ opacity: 1, transform: "translateX(0rem)" }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <span>
            <img src={advert} className="w-64   md:max-w-md" alt="advert" />
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, transform: "translateX(20rem)" }}
          whileInView={{ opacity: 1, transform: "translateX(0rem)" }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="my-16 md:my-0"
        >
          <h1 className="text-3xl md:text-5xl md:text-end font-semibold">
            <span className="text-primary">Find The Best</span> <br />
            <span className="text-secondary">Freelancer </span>
            <span className="text-primary">Here</span>
          </h1>
          <p className="text-dark-100 md:text-end">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Ut
            erat bibendum ornare urna, cursus <br /> eget convallis. Feugiat
            imperdiet posuere justo, <br /> ultrices interdum sed orci nunc,
            mattis. Ipsum viverra
          </p>
        </motion.div>
      </div>
      <Category />
      <div className="text-center">
        <button className="py-3 font-bold text-md font-dm text-white rounded-md bg-normal px-8">
          Download App{" "}
        </button>
      </div>
      <MobileApp />
    </>
  );
};
export default Home;
