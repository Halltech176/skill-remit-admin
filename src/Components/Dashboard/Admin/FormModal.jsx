import Modal from "react-modal";
import cancel from "../../../assets/cancel.png";
import { useState } from "react";
export const CreateAccount = ({ open, ToggleModal }) => {
  Modal.setAppElement("#root");
  const inputs = [
    {
      label: "Full Name",
      type: "text",
    },
    {
      label: "E-mail",
      type: "email",
    },
    {
      label: "Number",
      type: "number",
    },
    {
      label: "Password",
      type: "password",
    },
  ];
  const renderInputs = inputs.map((data, index) => {
    return (
      <section className="my-5">
        <div className="relative">
          <input
            className="border-light bg-info-100 px-3 pb-2 pt-8 text-xl w-full rounded-md"
            type={data.type}
          />
          <span className="text-normal absolute top-2 left-3 text-primary">
            {data.label}
          </span>
        </div>
      </section>
    );
  });
  console.log(open);
  return (
    <main>
      <Modal
        isOpen={open}
        onRequestClose={ToggleModal}
        className=" absolute h-4/12 relative shadow-md app_container  overflow-scroll bg-white border-2  rounded-xl p-14 w-2/4 top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4"
      >
        <form className="    ">
          <span onClick={ToggleModal}>
            <img
              className="w-10 absolute top-5 right-5"
              src={cancel}
              alt="cancel"
            />
          </span>
          <h1 className="text-primary text-2xl">Create Admin</h1>
          <div className="flex flex-col">{renderInputs}</div>
        </form>
        <div className="flex justify-center my-3">
          <button className="btn w-32 ">Add</button>
        </div>
      </Modal>
    </main>
  );
};

export const EditAccount = ({ open, ToggleModal }) => {
  Modal.setAppElement("#root");
  const inputs = [
    {
      label: "Full Name",
      type: "text",
    },
    {
      label: "E-mail",
      type: "email",
    },
    {
      label: "Number",
      type: "number",
    },
    {
      label: "Password",
      type: "password",
    },
  ];
  const renderInputs = inputs.map((data, index) => {
    return (
      <section className="my-5">
        <div className="relative">
          <input
            className="border-light bg-info-100 px-3 pb-2 pt-8 text-xl w-full rounded-md"
            type={data.type}
          />
          <span className="text-normal absolute top-2 left-3 text-primary">
            {data.label}
          </span>
        </div>
      </section>
    );
  });
  console.log(open);
  return (
    <main>
      <Modal
        isOpen={open}
        onRequestClose={ToggleModal}
        contentLabel="Example Modal"
        className=" absolute h-4/12 relative shadow-md app_container  overflow-scroll bg-white border-2  rounded-xl p-14 w-2/4 top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4"
      >
        <form className=" my-4   ">
          <span onClick={ToggleModal}>
            <img
              className="w-10 absolute top-6 right-6"
              src={cancel}
              alt="cancel"
            />
          </span>
          <h1 className="text-primary font-medium text-2xl">Edit Admin</h1>
          <div className="flex flex-col">{renderInputs}</div>
        </form>
        <div className="flex justify-center my-3">
          <button className="text-primary rounded-xl text-xl shadow-md p-4 w-32 mx-3">
            Save
          </button>
          <button className="bg-primary rounded-xl text-xl text-white w-32 mx-3">
            Delete
          </button>
        </div>
      </Modal>
    </main>
  );
};
