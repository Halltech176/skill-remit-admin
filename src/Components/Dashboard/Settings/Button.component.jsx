const Button = ({ clickFunction, buttonName }) => {
  return (
    <button
      onClick={clickFunction}
      style={{ background: "#001B87" }}
      className="bg-normal font-inter font-semibold md:text-base text-sm text-white my-5 md:py-4 py-2 rounded-md w-40 md:w-52"
    >
      {buttonName}
    </button>
  );
};
export default Button;
