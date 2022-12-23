import { useEffect, useState } from "react";
import user_vendor from "../../../assets/user_vendor.png";
const ChatHeader = ({ barName, setBarName }) => {
  const [userHeader, setUserHeader] = useState("");
  const [vendorHeader, setVendorHeader] = useState("");
  console.log(barName?.users);

  useEffect(() => {
    const user = barName?.users?.find((data, index) => {
      return data?.type === "user";
    });
    setUserHeader(user);
    const vendor = barName?.users?.find((data, index) => {
      return data?.type === "vendor";
    });
    setVendorHeader(vendor);
  }, [barName]);

  return (
    <>
      <div className="flex flex-row-reverse">
        <button className="border-white md:hidden block my-3 bg-normal text-white p-3 px-4 shrink-0 text-xs border-2 p-2 md:p-3 rounded-md">
          {" "}
          Resolve Disputes{" "}
        </button>
      </div>
      {barName === null ? (
        ""
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-2 w-full md:h-24 h-12 overflow-x-scroll app_container items-center bg-primary text-white p-3 md:p-5 rounded-md justify-between">
          <div className="flex shrink-0 items-center">
            <span>
              <img className="md:w-16 w-10" src={user_vendor} alt="arrow" />
            </span>
            <div className="mx-3">
              <h4 className="md:text-sm  text-xs  shrink-0">
                {vendorHeader?.firstName} {vendorHeader?.lastName}
              </h4>
              <p className="md:text-normal text-xs">Vendor </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center">
            <span>
              <img className="md:w-16 w-10" src={user_vendor} alt="arrow" />
            </span>
            <div className="mx-3">
              <h4 className="md:text-sm  text-xs shrink-0">
                {" "}
                {userHeader?.firstName} {userHeader?.lastName}{" "}
              </h4>
              <p className="md:text-normal text-xs">user </p>
            </div>
          </div>

          <button className="border-white md:block hidden shrink-0 text-xs border-2 p-2 md:p-3 rounded-md">
            {" "}
            Resolve Disputes{" "}
          </button>
        </div>
      )}
    </>
  );
};
export default ChatHeader;
