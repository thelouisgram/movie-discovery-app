const Buttons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
          <button className="w-full ss:w-[300px] sm:w-[360px] flex items-center justify-center py-[12px] gap-2 bg-rose700 rounded-[10px] text-[14px] font-[500] xs:text-[20px] text-white">
              <img src="/images/Two-tickets.svg" alt="Two tickets" />
              <h3>See Showtimes</h3>
      </button>
          <button className="w-full ss:w-[300px] sm:w-[360px] flex items-center justify-center py-[12px] text-gray-900 bg-rose-100 gap-2 rounded-[10px] text-[14px] font-[500] xs:text-[20px] border-[1px] border-rose700">
        <img src="/images/List.svg" alt="List" />
              <h3>More watch options</h3>
      </button>
    </div>
  );
};

export default Buttons;
