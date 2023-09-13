import Links from "../../pages/MovieDetails/Sidebar/Links";
import Logo from "../Shared/Logo";
import SearchBar from "./SearchBar";
import { setNav } from "../../store/stateSlice";
import { useDispatch } from "react-redux";

const MobileNavbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-[100dvh] w-full bg-white fixed md:w-[575px] ss:right-0 py-6 z-[100] flex flex-col items-center gap-[24px]">
      <div className="flex justify-between items-center w-full px-3 xs:px-5 pb-6">
        <Logo />
        <div className="w-full">
          <button
            onClick={() => dispatch(setNav(false))}
            className="w-full flex justify-end"
          >
            <img src="/images/X.svg" alt="Cancel Navbar" />
          </button>
        </div>
      </div>
      <div className="px-3 xs:px-5 w-full">
        <SearchBar colors="text-[14px] w-full text-gray-400 placeholder:text-400 border-gray-400"/>
      </div>
      <Links />
    </div>
  );
};

export default MobileNavbar;
