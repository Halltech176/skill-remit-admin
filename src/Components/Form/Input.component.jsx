const InputComponent = ({ type, name, handleChange, label, value }) => {
  return (
    <section className="my-3">
      <div className="relative">
        <label className="block my-2 text-md text-primary">{label}</label>
        <input
          onChange={handleChange}
          value={value}
          name={name}
          className="border-light bg-info-100 md:px-3 px-3 py-3  text-md md:text-xl w-full rounded-md"
          type={type}
        />
      </div>
    </section>
  );
};
export default InputComponent;
