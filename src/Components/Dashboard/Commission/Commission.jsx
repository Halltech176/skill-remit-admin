import { SiteData } from "../../../Redux/Actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader1 } from "../../Common/Loader";
import axios from "axios";
import { BASE_URL, TOKEN, HEADER } from "../../../../Api";
const Commission = () => {
  const dispatch = useDispatch();
  const { sitedata, loading, error } = useSelector((state) => state);
  const [value, setValue] = useState(sitedata?.sitedata?.commissionPercent);
  useEffect(() => {
    dispatch(SiteData());
  }, []);

  const UpdateCommission = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${BASE_URL}//settings`,
        {
          referralBonusPercent: 50,
          minimumBonusPayout: 3000,
          bankName: "UBA",
          accountName: "Viscio",
          accountNumber: "2344",
          bankCode: "081",
          chargePercent: 10,
          deliveryFee: 20,
        },
        HEADER
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    e.preventDefault();
    console.log("commission updated");
  };

  console.log(sitedata?.sitedata);
  return (
    <>
      {loading ? (
        <Loader1 />
      ) : (
        <form className="h-screen overflow-hidden">
          <p
            // style={{ color: "#001B87" }}
            className="font-aeonik-light my-5 text-normal text-2xl font-extralight md:text-4xl"
          >
            Percentage Commission on service delivery
          </p>
          <section className="my-10">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="border-primary text-md md:text-2xl font-medium py-2 px-2 bg-transparent md:py-4 md:px-3 rounded-md w-full md:w-2/3"
              type="number"
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
