const Links = () => {
  return (
      <div className="font-[600] text-[#333] mt-16 w-full">
          <div className="flex items-center gap-4  h-[86px] w-full pl-[42px]">
              <img src="/images/Home.svg" alt="Home icon" />
              <h3 className="">Home</h3>
          </div>
          <div className="flex items-center gap-4 h-[86px] w-full pl-[42px]">
              <img src="/images/Movie-projector.svg" alt="Movies Projector icon" />
              <h3 className="">Movies</h3>
          </div>
          <div className="flex items-center gap-4 h-[86px] w-full pl-[42px]">
              <img src="/images/Tv.svg" alt="Tv icon" />
              <h3 className="">Tv Series</h3>
          </div>
          <div className="flex items-center gap-4 h-[86px] w-full pl-[42px]">
              <img src="/images/Calendar.svg" alt="Calender icon" />
              <h3 className="">Upcoming</h3>
          </div>
      </div>
  )
}

export default Links
