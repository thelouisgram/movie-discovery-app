/* eslint-disable react/prop-types */
import Logo from "../Shared/Logo";
import SearchBar from "./SearchBar";
import { setNav } from "../../store/stateSlice";
import { useDispatch } from "react-redux";

const Navbar = ({ display }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`${display} ${
        !display && "flex"
      } justify-between h-[80px] items-center md:w-[1100px] w-full px-3 xs:px-5 md:px-0 mx-auto `}
    >
      <Logo />
      <div className="w-auto h-auto hidden ss:flex">
        <SearchBar />
      </div>
      <div className="flex gap-[18px] md:gap-[27px] items-center">
        <h3 className="font-[700] text-[16px] leading-[24px] hidden md:flex">
          Sign In
        </h3>
        <button onClick={() => dispatch(setNav(true))}>
          <img
            src="/images/menu.svg"
            alt="Menu"
            className="w-[36px] h-[36px]"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
