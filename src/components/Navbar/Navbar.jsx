import Logo from "../Shared/Logo";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex justify-between h-[80px] items-center md:w-[1100px] mx-auto">
      <Logo />
      <div className="w-auto h-auto">
        <SearchBar />
      </div>
      <div className="flex gap-[27px] items-center">
        <h3 className="font-[700] text-[16px] leading-[24px]">Sign In</h3>
        <img src="/images/menu.svg" alt="Menu" className="w-[36px] h-[36px]" />
      </div>
    </div>
  );
};

export default Navbar;
