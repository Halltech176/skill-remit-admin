import iphone1 from "../../assets/iphone1.png";
import iphone2 from "../../assets/iphone2.png";
const PhoneImage = () => {
  return (
    <>
      <div className="flex ">
        <span>
          <img className="w-72 -mr-16 mt-10 " src={iphone2} alt="iphone1" />
        </span>
        <span>
          <img className="w-48 -ml-10" src={iphone1} alt="iphone1" />
        </span>
      </div>
      {/* </div> */}
    </>
  );
};
export default PhoneImage;
