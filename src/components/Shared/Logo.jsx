import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex gap-[14px] md:gap-[24px] items-center cursor-pointer">
      <img src="/images/logo.svg" alt="Logo" className="w-[40px] h-auto md:w-auto"/>
      <h3 className="font-[700] text-[18px] md:text-[24px] leading-[24px]">MovieBox</h3>
    </Link>
  );
};

export default Logo;
