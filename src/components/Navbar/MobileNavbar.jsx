import Links from "../../pages/MovieDetails/Sidebar/Links";
import Logo from "../Shared/Logo";
import SearchBar from "./SearchBar";
import { setNav } from "../../store/stateSlice";
import { useDispatch } from "react-redux";

const MobileNavbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-[100dvh] w-full bg-white fixed ss:hidden py-6 z-[100] flex flex-col items-center gap-[24px]">
      <div className="w-full px-5">
        <button
          onClick={() => dispatch(setNav(false))}
          className="w-full flex justify-end"
        >
          <img src="/images/X.svg" alt="Cancel Navbar" />
        </button>
      </div>
      <Logo />
      <div className="px-3 xs:px-5 w-full">
        <SearchBar colors="text-gray-500 border-gray-500 placeholder-gray-500 text-[13px] w-full" />
      </div>
      <Links />
    </div>
  );
};

export default MobileNavbar;
