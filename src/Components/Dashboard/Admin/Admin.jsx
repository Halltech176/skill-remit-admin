import { useState } from "react";
import { CreateAccount, EditAccount } from "./FormModal";
import user from "../../../assets/user_admin.png";
import more from "../../../assets/more.png";

const Admin = () => {
  const users = new Array(4).fill(0);
  const [isOpen, setIsOpen] = useState(false);
  const ToggleModal = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen2, setIsOpen2] = useState(false);
  const ToggleModal2 = () => {
    setIsOpen2(!isOpen2);
  };
  console.log(users);
  const renderUsers = users.map((data, index) => {
    return (
      <section
        className=" my-5 mx-3 bg-white shadow-md rounded-xl p-5"
        key={index}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span>
              <img src={user} alt="user" />
            </span>
            <div className="mx-3">
              <h1>John Doe</h1>
              <p>Admin</p>
            </div>
          </div>
          <div>
            <span onClick={ToggleModal2}>
              <img src={more} alt="more" />
            </span>
          </div>
        </div>
        <span
          style={{ background: "#E8E9EB" }}
          className=" w-full h-0.5 block my-10 "
        ></span>
        <div className="">
          <p className="flex items-center">
            <span className="font-aeonik-light ">Email :</span>
            <span className="mx-2">j.doe@extensionafrica.com</span>
          </p>
          <p className="flex items-center">
            <span className="font-aeonik-light 6 ">Phone :</span>
            <span className="mx-2">+234 (070) 123-4567</span>
          </p>
        </div>
      </section>
    );
  });
  return (
    <div className="">
      <CreateAccount open={isOpen} ToggleModal={ToggleModal} />
      <EditAccount open={isOpen2} ToggleModal={ToggleModal2} />
      <section className="text-end my-10">
        <button
          onClick={ToggleModal}
          className="btn w-52 py-4 font-semibold font-inter px-6"
        >
          Add New
        </button>
      </section>
      <div className="md:grid  flex flex-wrap grid-cols-3">{renderUsers}</div>
    </div>
  );
};
export default Admin;
