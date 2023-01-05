import { TailSpin } from "react-loader-spinner";
const ButtonComponent = ({
  loading,
  bgcolor,
  target,
  clickFunction,
  title,
  width,
}) => {
  console.log(target);
  return (
    <>
      {loading ? (
        <TailSpin
          height="45"
          width="45"
          color="#130160"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <button
          name={target === undefined ? "" : target}
          onClick={clickFunction}
          className={`  ${bgcolor === undefined ? "bg-normal" : bgcolor}   ${
            width === undefined ? "w-48 md:w-56" : width
          }  w-48 rounded-md font-inter font-semibold md:text-base  p-3 text-white  `}
        >
          {title}
        </button>
      )}
    </>
  );
};
export default ButtonComponent;
