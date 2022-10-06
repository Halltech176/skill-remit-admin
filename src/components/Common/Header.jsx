import Logo from "./Logo";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header text-white bg-primary items-center p-2 px-4 md:px-32 flex justify-between">
        <Logo />
        <nav className="hidden md:block">
          <ul className="flex justify-between items-center">
            <li className="my-5 mx-6 font-dm font-medium">
              <Link to="/">Home</Link>
            </li>
            <li className="my-5 mx-6 font-dm font-medium">
              <Link to="/about">About Us</Link>
            </li>
            <li className="my-5 mx-6 font-dm font-medium">
              <Link to="/faqs">FAQ'S</Link>
            </li>

            <button className="bg-white m-3 px-3 py-2 rounded-md text-normal text-md font-bold">
              Download App
            </button>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
