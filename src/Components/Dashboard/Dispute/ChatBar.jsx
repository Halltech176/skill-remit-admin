import user_vendor from "../../../assets/user_vendor.png";
const ChatBar = ({ barName, setBarName }) => {
  const user = barName?.users?.find((data, index) => {
    return data?.type === "user";
  });
  const vendor = barName?.users?.find((data, index) => {
    return data?.type === "vendor";
  });
  console.log(user, vendor);
  return (
    <>
      <div className="flex flex-row-reverse">
        <button className="border-white md:hidden block my-3 bg-normal text-white p-3 px-4 shrink-0 text-xs border-2 p-2 md:p-3 rounded-md">
          {" "}
          Resolve Disputes{" "}
        </button>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 w-full overflow-x-scroll app_container items-center bg-primary text-white p-3 md:p-5 rounded-md justify-between">
        <div className="flex shrink-0 items-center">
          <span>
            <img className="md:w-16 w-10" src={user_vendor} alt="arrow" />
          </span>
          <div className="mx-3">
            <h4 className="md:text-sm  text-xs  shrink-0">
              {vendor?.firstName} {vendor?.lastName}
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
              {user?.firstName} {user?.lastName}{" "}
            </h4>
            <p className="md:text-normal text-xs">user </p>
          </div>
        </div>

        <button className="border-white md:block hidden shrink-0 text-xs border-2 p-2 md:p-3 rounded-md">
          {" "}
          Resolve Disputes{" "}
        </button>
      </div>
    </>
  );
};
export default ChatBar;
