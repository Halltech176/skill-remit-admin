const InputComponent = ({
  name,
  type,
  value,
  status,
  label,
  Update,
  handleChange,
}) => {
  return (
    <form className="my-5 flex flex-col ">
      <h3 className="text-normal my-3  text-normal font-bold md:text-xl text-sm">
        {label}
      </h3>
      <div className="relative">
        <input
          required
          name={status}
          value={value?.[status]}
          onChange={handleChange}
          className="border-primary bg-info-100 p-4 text-md md:text-xl md:w-80 w-full rounded-md"
          type={type}
        />
      </div>
      <button
        onClick={(e) => Update(e, status, value)}
        className="md:text-xl text-base mx-auto text-white bg-normal rounded-md w-52 my-3 py-3"
      >
        Update
      </button>
    </form>
  );
};
export default InputComponent;
