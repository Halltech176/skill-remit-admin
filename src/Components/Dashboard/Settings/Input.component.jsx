const InputComponent = ({ name, type, value, state, label }) => {
  return (
    <section className="my-5">
      <div className="relative">
        <input
          required
          name={name}
          value={value}
          className="border-light bg-info-100 px-3 pb-2 pt-8 text-md md:text-xl md:w-80 w-full rounded-md"
          type={type}
        />
        <span className="text-normal absolute top-2 left-3 text-primary">
          {label}
        </span>
      </div>
    </section>
  );
};
export default InputComponent;
