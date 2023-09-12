const StartPlaying = () => {
  return (
    <div className="px-[12px] pt-[42px] mx-[28px] pb-[14px] rounded-[20px] border-[1px] border-rose700 bg-pink100 mb-[46px]">
      <h3 className="text-gray300 text-[15px] font-[600] mb-[10px]">
        Play movie quizes and earn free tickets
      </h3>
      <p className="text-[12px] font-[500] text-gray500 mb-[14px]">
        50k people are playing now
      </p>
      <div className="w-full flex justify-center">
        <button className="text-rose700 bg-pink200 rounded-full px-[16px] py-[6px] text-[12px] font-[500]">
          Start playing
        </button>
      </div>
    </div>
  );
};

export default StartPlaying;
