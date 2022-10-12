import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import section1 from "../../../assets/section1.png";
import section2 from "../../../assets/section2.png";
import section3 from "../../../assets/section3.png";
import { UploadData, UpdateData } from "./FormModal2";

const Tab3 = () => {
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
  const settings = {
    dots: true,
    autoplay: true,
    infinite: false,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  const images = [section1, section2, section3, section2, section3, section1];
  const renderSections = images.map((data, index) => {
    return (
      <div onClick={ToggleModal2} className=" shrink-0 m-3 p-3">
        <img className="w-96 shrink-0" src={data} alt="images" />
      </div>
    );
  });
  return (
    <main className="">
      <UploadData open={isOpen} ToggleModal={ToggleModal} />
      <UpdateData open={isOpen2} ToggleModal={ToggleModal2} />
      <div className="flex d justify-end">
        <button onClick={ToggleModal} className="btn w-44 mb-3 ">
          Add
        </button>
      </div>
      {/* <Slider {...settings}>{renderSections}</Slider> */}
      <div className="flex app_container overflow-x-scroll items-center">
        {renderSections}
      </div>
    </main>
  );
};
export default Tab3;
