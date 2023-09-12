/* eslint-disable react/prop-types */
import Logo from "../Shared/Logo";
import Links from "./Links";

const Sidebar = ({ radius }) => {
  return (
    <div
      className={`w-[226px] border-[1px] border-gray-300 flex flex-col items-center ${radius} pt-[52px]`}
    >
      <Logo />
      <Links />
      <div className="px-[16px] pt-[42px] mx-[28px] pb-[16px] rounded-[20px] border-[1px] border-rose700 bg-pink100">
        <h3 className="text-gray300 text-[15px] font-[600] mb-[10px]">
          Play movie quizes and earn free tickets
        </h3>
        <p className="text-[12px] font-[500] text-gray500 mb-[14px]">
          50k people are playing now
        </p>
        <button className="text-rose700 bg-pink200 rounded-full px-[16px] py-[6px]">Start playing</button>
      </div>
    </div>
  );
};

export default Sidebar;
