/* eslint-disable react/prop-types */
import Links from "./Links";
import Logout from "./Logout";
import StartPlaying from "./StartPlaying";
import Logo from "../../../components/Shared/Logo";

const Sidebar = ({ radius }) => {
  return (
    <div
      className={`hidden md:flex w-[226px] border-[1px] border-gray-300 flex-col items-center ${radius} pt-[52px]`}
    >
      {/* Logo */}
      <Logo />
      {/* Links */}
      <Links page = {1}/>
      {/* Start playing */}
      <StartPlaying />
      {/* Logout */}
      <Logout />
    </div>
  );
};

export default Sidebar;
