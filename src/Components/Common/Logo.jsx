import logo from "../../assets/logo_md.jpg";

export const LightLogo = () => {
  return (
    <div>
      <span>
        <img
          className="w-24 h-24 rounded-full mx-auto items-center"
          src={logo}
          alt="logo"
        />
      </span>
    </div>
  );
};
