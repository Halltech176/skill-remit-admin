import { useEffect, useState } from "react";
import { AdditionalInputs } from "./Inputs";
import { Banks } from "../../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import InputComponent from "./Input.component";
const OtherSettings = ({ sitedata }) => {
  const dispatch = useDispatch();

  const { banks } = useSelector((state) => state.banks);
  const [selectedOption, setSelectedOption] = useState(sitedata?.bankName);
  console.log(sitedata);

  const HandleSelectedOptions = (e) => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
  };

  console.log(banks);

  const renderOptions = banks?.map((data, index) => {
    return <option value={data?.name}>{data?.name}</option>;
  });

  return (
    <main className="md:flex">
      <div>
        <h1 className="text-dark2 text-mono text-2xl font-medium">
          Bank Account
        </h1>
        <div className="flex flex-col">
          <select
            onChange={(e) => HandleSelectedOptions(e)}
            className="border-light bg-info-100 px-3 py-3 text-md md:text-xl md:w-80 outline-none border-none w-full rounded-md"
            value={selectedOption}
          >
            {renderOptions}
          </select>
          <InputComponent
            status="bankName"
            label="Bank Name"
            value={sitedata?.bankName}
            type="text"
          />
          <InputComponent
            status="accountName"
            label="Account Name"
            value={sitedata?.accountName}
            type="text"
          />
          <InputComponent
            status="accountNumber"
            label="Account Number"
            value={sitedata?.accountNumber}
            type="text"
          />
          <InputComponent
            status="bankCode"
            label="Bank Code"
            value={sitedata?.bankCode}
            type="text"
          />
        </div>
        {/* <div className="flex flex-col">{renderInputs}</div> */}
      </div>
      <div className="md:ml-4">
        <h1 className="text-dark2 text-mono text-2xl font-medium">
          Additional Settings
        </h1>
        <div className="flex flex-col">
          <InputComponent
            status="Referral Bonus percent"
            label="Referral Bonus percent"
            value={sitedata?.chargePercent}
            type="number"
          />
          <InputComponent
            status="Minimum Bonus Payout"
            label="Minimum Bonus Payout"
            value={sitedata?.minimumBonusPayout}
            type="number"
          />
          <InputComponent
            status="deliveryFee"
            label="Delivery Fee"
            value={sitedata?.deliveryFee}
            type="number"
          />
        </div>
      </div>
    </main>
  );
};
export default OtherSettings;
