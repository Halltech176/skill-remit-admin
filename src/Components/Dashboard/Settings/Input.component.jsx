import ButtonComponent from "../../Common/ButtonComponent";
const InputComponent = ({
  name,
  type,
  value,
  status,
  label,
  Update,
  handleChange,
  loading,
  target,
}) => {
  console.log(target);
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
      <div className="flex items-center justify-center my-3">
        <ButtonComponent
          width="w-52"
          target={status}
          clickFunction={(e) => Update(e, status, value)}
          title="Update"
          loading={target === status ? loading : ""}
        />
      </div>
    </form>
  );
};
export default InputComponent;
