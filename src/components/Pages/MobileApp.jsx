import appstore from "../../assets/appstore.png";
import playstore from "../../assets/playstore.png";
const MobileApp = () => {
    return (
        <> 
        <div className="download-app w-100 md:max-w-4xl text-center mx-auto p-10 px-16 my-32 flex items-center flex-col justify-between">
        <h1 className="text-white md:tracking-wider md:leading-relaxed capitalize font-bold md:font-semibold md:text-4xl">
          Install our app to get Hired and Hire people for business faster{" "}
        </h1>
        <div className="flex my-10 justify-between">
          <span className="mx-4 md:mx-8">
            <img src={playstore} alt="playstore" />
          </span>
          <span className="mx-4 md:mx-8">
            <img src={appstore} alt="appstore" />
          </span>
        </div>
      </div>
        </>
    )
} 
export default MobileApp