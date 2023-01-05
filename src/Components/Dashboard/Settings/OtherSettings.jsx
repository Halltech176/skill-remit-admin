import { useEffect, useState } from "react";
import { AdditionalInputs } from "./Inputs";
import { Banks, SiteData } from "../../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import InputComponent from "./Input.component";
import axios from "axios";
import { BASE_URL, TOKEN, HEADER } from "../../../../Api";
import { ErrorNotification, SuccessNotification } from "../../Common/Toastify";
import { HandleError } from "../../Common/HandleError";
import { HandleSuccess } from "../../Common/HandleSuccess";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OtherSettings = ({ sitedata }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [target, setTarget] = useState(null);

  const initialValues = {
    deliveryFee: sitedata?.deliveryFee,
    chargePercent: sitedata?.chargePercent,
    minimumBonusPayout: sitedata?.minimumBonusPayout,
    minimumIOSVersion: sitedata?.minimumIOSVersion,

    minimumAndroidVersion: sitedata?.minimumAndroidVersion,
  };
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({ [e.target.name]: e.target.value });
  };

  const { banks } = useSelector((state) => state.banks);
  const [selectedOption, setSelectedOption] = useState(sitedata?.bankName);

  const HandleSelectedOptions = (e) => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
  };

  const RenderValues = ({ name, value }) => {
    return (
      <p className="mb-3">
        {" "}
        <span>
          {" "}
          {name} : {value}{" "}
        </span>
      </p>
    );
  };

  const Update = async (e, key, value) => {
    e.preventDefault();
    console.log(value);

    setLoading(true);
    setTarget(e.target.name);
    try {
      const response = await axios.post(`${BASE_URL}//settings`, value, HEADER);
      SuccessNotification(response?.data?.message);
      dispatch(SiteData());
      setLoading(false);
      console.log(response);
    } catch (err) {
      setLoading(false);

      HandleError(err);
    }
  };

  const renderOptions = banks?.map((data, index) => {
    return <option value={data?.name}>{data?.name}</option>;
  });

  return (
    <main className="">
      <ToastContainer transition={Zoom} autoClose={800} />
      <div>
        <RenderValues name="Delivery Fee" value={sitedata?.deliveryFee} />
        <RenderValues
          name="Minimum Bonus Payout"
          value={sitedata?.minimumBonusPayout}
        />
        <RenderValues name="Charge Percent" value={sitedata?.chargePercent} />
        <RenderValues
          name="Miniumium IOS version"
          value={sitedata?.minimumIOSVersion}
        />
        <RenderValues
          name="Miniumium Android version"
          value={sitedata?.minimumAndroidVersion}
        />
      </div>

      <div className="flex justify-evenly items-center flex-wrap">
        <InputComponent
          status="deliveryFee"
          label="Delivery Fee"
          value={values}
          type="number"
          handleChange={handleChange}
          Update={Update}
          loading={loading}
          target={target}
        />
        <InputComponent
          status="minimumBonusPayout"
          label="Minimum Bonus Payout"
          type="number"
          value={values}
          handleChange={handleChange}
          Update={Update}
          loading={loading}
          target={target}
        />
        <InputComponent
          status="chargePercent"
          label="Charge Percent"
          value={values}
          type="number"
          handleChange={handleChange}
          Update={Update}
          target={target}
          loading={loading}
        />

        <InputComponent
          status="minimumIOSVersion"
          label="Minimum IOS Version"
          value={values}
          type="number"
          handleChange={handleChange}
          Update={Update}
          target={target}
          loading={loading}
        />
        <InputComponent
          status="minimumAndroidVersion"
          label="Minimum Android Version"
          value={values}
          type="number"
          handleChange={handleChange}
          Update={Update}
          target={target}
          loading={loading}
        />
      </div>
    </main>
  );
};
export default OtherSettings;
