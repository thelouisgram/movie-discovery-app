import Links from "../../pages/MovieDetails/Sidebar/Links";
import Logo from "../Shared/Logo";
import SearchBar from "./SearchBar";
import { setNav } from "../../store/appSlice";
import { useDispatch } from "react-redux";
/**
 * MobileNavbar component for displaying a mobile navigation bar.
 * This component includes a logo, a close button, a search bar, and links.
 * It is designed for mobile devices.
 */
const MobileNavbar = () => {
  const dispatch = useDispatch();

  /**
   * Handles the click event for closing the mobile navigation bar.
   */
  const handleNavbarClose = () => {
    dispatch(setNav(false));
  };

  return (
    <div className="w-full relative h-full">
      <div className='relative w-full md:w-[1100px] mx-auto'>
        <div className="h-[100vh] bg-white w-full absolute md:w-[575px] md:h-auto ss:right-0 py-6 z-[100] flex flex-col items-center gap-[24px]">
          <div className="flex justify-between items-center w-full px-3 xs:px-5 pb-6">
            <Logo />
            <div className="w-full">
              <button onClick={handleNavbarClose} className="w-full flex justify-end">
                <img src="/images/X.svg" alt="Cancel Navbar" />
              </button>
            </div>
          </div>
          <div className="px-3 xs:px-5 w-full">
            {/* Renders the SearchBar component */}
            <SearchBar colors="text-[14px] w-full text-gray-400 placeholder:text-400 border-gray-400" />
          </div>

          {/* Renders the Links component */}
          <Links />
        </div>
      </div>
      <div className="w-full bg-black opacity-70 fixed h-[100vh] z-[90]" />
    </div>
  );
};

export default MobileNavbar;
