import user_vendor from "../../../assets/user_vendor.png";
const ChatBar = ({ user }) => {
  console.log(user);
  return (
    <div className="flex w-full overflow-x-scroll app_container items-center bg-primary text-white p-3 md:p-5 rounded-md justify-between">
      <div className="flex shrink-0 items-center">
        <span>
          <img className="md:w-16 w-10" src={user_vendor} alt="arrow" />
        </span>
        <div className="mx-3">
          <h4 className="md:text-sm  text-xs  shrink-0">Annete Black </h4>
          <p className="md:text-normal text-xs">Vendor </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center">
        <span>
          <img className="md:w-16 w-10" src={user_vendor} alt="arrow" />
        </span>
        <div className="mx-3">
          <h4 className="md:text-sm  text-xs shrink-0">Annete Black </h4>
          <p className="md:text-normal text-xs">user </p>
        </div>
      </div>

      <button className="border-white shrink-0 text-xs border-2 p-2 md:p-3 rounded-md">
        {" "}
        Resolve Disputes{" "}
      </button>
    </div>
  );
};
export default ChatBar;
