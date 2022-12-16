const Button = ({ clickFunction, buttonName }) => {
  return (
    <button
      onClick={clickFunction}
      style={{ background: "#001B87" }}
      className="bg-normal font-inter font-semibold text-xl text-white my-5 py-4 rounded-md w-56 md:w-72"
    >
      {buttonName}
    </button>
  );
};
export default Button;
