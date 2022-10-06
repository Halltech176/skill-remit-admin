import {motion} from 'framer-motion';
import lock from "../../assets/lock.png";
import create from "../../assets/create.png";
import search from "../../assets/search.png";
import features from "./Features.json";
const Features = () => {
  const featuresIcon = [lock, search, create];
  const renderFeatures = features.map((data, index) => {
    return (
      <motion.div key={index}    initial={{
                    opacity: 0,
                    transform: `${index % 2 === 0 ?  "translateX(-20rem)"  : "translateX(20rem)"} `
                  }}
                  whileInView={{
                    opacity: 1,
                    transform: " translateX(0rem)",
                  }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3 }} className="flex shadowmd items-center flex-col">
        <span className="my-3">
          <img src={featuresIcon[index]} atl="icons" />
        </span>
        <h3 className="text-primary my-2 text-xl font-semibold">{data.name}</h3>
        <p className="text-dark-100">{data.text}</p>
      </motion.div>
    );
  });
  return (
    <div className="flex my-1 md:my-28 py-4 flex-col md:flex-row  md:py-8 shadow-md mx-1 md:mx-12 justify-between md:justify-evenly items-center">
      {renderFeatures}
    </div>
  );
};
export default Features;
