import logo from "../../assets/logo_md.jpg";

export const LightLogo = () => {
  return (
    <div className="md:h-24 md:w-24 h-24 w-24 relative  my-3 overflow-hidden rounded-full bg-white">
      {/* <h1>logo</h1> */}
      <img className=" object-cover h-full  w-full" src={logo} alt="logo" />
    </div>
  );
};
