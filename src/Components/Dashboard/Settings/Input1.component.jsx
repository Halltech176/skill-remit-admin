const InputComponent = ({ handleChange, data, values }) => {
  return (
    <input
      value={values[data.name]}
      onChange={handleChange}
      name={data.name}
      placeholder={data.placeholder}
      className="bg-primary-200  text-sm md:text-base font-medium md:max-w-sm w-full rounded-sm md:rounded-md my-5 md:my-3  p-2 md:p-4"
      type={data.type}
    />
  );
};
export default InputComponent;
