import { SiteData } from "../../../Redux/Actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader1 } from "../../Common/Loader";
import axios from "axios";
import { BASE_URL, TOKEN, HEADER } from "../../../../Api";
import { ErrorNotification, SuccessNotification } from "../../Common/Toastify";
import { HandleError } from "../../Common/HandleError";
import { HandleSuccess } from "../../Common/HandleSuccess";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Commission = () => {
  const dispatch = useDispatch();
  const { sitedata, loading, error } = useSelector((state) => state.sitedata);
  const [commissionPercent, setCommissionPercent] = useState(
    sitedata?.commissionPercent
  );

  const UpdateCommission = async (e) => {
    e.preventDefault();
    console.log("updating...");
    try {
      const response = await axios.post(
        `${BASE_URL}//settings`,
        { commissionPercent },
        HEADER
      );
      SuccessNotification(response?.data?.message);
      dispatch(SiteData());
      console.log(response);
    } catch (err) {
      console.log(err);
      HandleError(err);
    }
  };

  console.log(sitedata);
  return (
    <>
      <ToastContainer transition={Zoom} autoClose={800} />
      {loading ? (
        <Loader1 />
      ) : (
        <form className="h-screen overflow-hidden">
          <h2
            // style={{ color: "#001B87" }}
            className="font-aeonik-light my-5 text-normal text-base font-extralight md:text-2xl"
          >
            Percentage Commission on service delivery
          </h2>
          <p className="text-md font-bold">
            Percentage Commission : {sitedata?.commissionPercent}%
          </p>
          <section className="my-10">
            <input
              value={commissionPercent}
              onChange={(e) => setCommissionPercent(e.target.value)}
              className="border-primary text-md md:text-2xl font-medium py-2 px-2 bg-transparent md:py-3 md:px-2 rounded-md w-full md:w-2/5"
              type="number"
              // placeholder={`${sitedata?.sitedata?.commissionPercent}%`}
            />
          </section>
          <section className="md:my-32  my-16">
            <button
              onClick={UpdateCommission}
              className="btn w-56 md:mx:0  mx-auto md:w-64"
            >
              Update
            </button>
          </section>
        </form>
      )}
    </>
  );
};
export default Commission;
