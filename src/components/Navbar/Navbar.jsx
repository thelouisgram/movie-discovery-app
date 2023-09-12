import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex justify-between h-[80px] items-center md:w-[1100px] mx-auto">
      <div className="flex gap-[24px] items-center">
        <img src="/images/logo.svg" alt="Logo" />
        <h3 className="font-[700] text-[24px] leading-[24px]">MovieBox</h3>
      </div>
      <div className='w-auto h-auto'>
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
