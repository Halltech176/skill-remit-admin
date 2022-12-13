import { useEffect } from "react";
import { BankInputs, AdditionalInputs } from "./Inputs";
import { Banks } from "../../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
const OtherSettings = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(Banks());
  // }, []);
  const selector = useSelector((state) => state);
  console.log(selector?.banks);
  const renderInputs = BankInputs.map((data, index) => {
    return (
      <section key={index} className="my-5">
        <div className="relative">
          <input
            required
            name={data.name}
            // onChange={handleChange}
            // value={values[data.name]}
            value={data.value}
            className="border-light bg-info-100 px-3 pb-2 pt-8 text-md md:text-xl md:w-80 w-full rounded-md"
            type={data.type}
          />
          <span className="text-normal absolute top-2 left-3 text-primary">
            {data.label}
          </span>
        </div>
      </section>
    );
  });

  const renderAddtionalInputs = AdditionalInputs.map((data, index) => {
    return (
      <section className="my-5">
        <div className="relative">
          <input
            required
            name={data.name}
            // onChange={handleChange}
            // value={values[data.name]}
            value={data.value}
            className="border-light bg-info-100 px-3 pb-2 pt-8 text-md md:text-xl md:w-80 w-full rounded-md"
            type={data.type}
          />
          <span className="text-normal absolute top-2 left-3 text-primary">
            {data.label}
          </span>
        </div>
      </section>
    );
  });
  return (
    <main className="md:flex">
      <div>
        <h1 className="text-dark2 text-mono text-2xl font-medium">
          Bank Account
        </h1>
        <div className="flex flex-col">{renderInputs}</div>
      </div>
      <div className="md:ml-4">
        <h1 className="text-dark2 text-mono text-2xl font-medium">
          Additional Settings
        </h1>
        <div className="flex flex-col">{renderAddtionalInputs}</div>
      </div>
    </main>
  );
};
export default OtherSettings;
