import { Link } from "react-router-dom"

const Links = () => {
  return (
      <div className="font-[600] text-[#333] mt-16 w-full">
          <Link to='/' className="flex items-center gap-4  h-[86px] w-full pl-[42px] hover:bg-rose-100 hover:text-rose700">
              <img src="/images/Home.svg" alt="Home icon" />
              <h3 className="">Home</h3>
          </Link>
          <div className="flex items-center gap-4 h-[86px] w-full pl-[42px] bg-rose-100 :text-rose700">
              <img src="/images/Movie-projector.svg" alt="Movies Projector icon" />
              <h3 className="">Movies</h3>
          </div>
          <div className="flex items-center gap-4 h-[86px] w-full pl-[42px] hover:bg-rose-100 hover:text-rose700 cursor-pointer">
              <img src="/images/Tv.svg" alt="Tv icon" />
              <h3 className="">Tv Series</h3>
          </div>
          <div className="flex items-center gap-4 h-[86px] w-full pl-[42px] hover:bg-rose-100 hover:text-rose700 cursor-pointer">
              <img src="/images/Calendar.svg" alt="Calender icon" />
              <h3 className="">Upcoming</h3>
          </div>
      </div>
  )
}

export default Links
