import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex gap-[24px] items-center cursor-pointer">
      <img src="/images/logo.svg" alt="Logo" />
      <h3 className="font-[700] text-[24px] leading-[24px]">MovieBox</h3>
    </Link>
  );
};

export default Logo;
