import user from "../../../assets/user.png";
import search_sm from "../../../assets/search_sm.png";
import bell from "../../../assets/bell.png";
const Header = ({ title }) => {
  return (
    <header className="md:flex py-10 justify-between items-center">
      <h1 className="text-2xl md:text-4xl capitalize font-medium">{title}</h1>
      <div className="flex relative">
        <input
          //   style={{ background: "rgba(19, 1, 96, 0.2)" }}
          b
          type="text"
          className="border bg-primary-100 rounded-md pl-10 pr-5 py-1.5"
        />
        <span className="absolute top-1/3 left-2">
          <img src={search_sm} alt="search" />
        </span>
      </div>

      <div className="flex items-center ">
        <span>
          <img src={bell} alt="bell" />
        </span>
        {/* <input type="search" /> */}
        <span className="mx-4">
          <img src={user} className="w-14" alt="user" />
        </span>
        <h3 className="text-primary mx-4">Ajani Ben Dara</h3>
      </div>
    </header>
  );
};
export default Header;
