/* eslint-disable react/prop-types */
/**
 * WatchTrailer component for displaying a "Watch Trailer" button.
 */

import { Link } from "react-router-dom"


const WatchTrailer = ({movie}) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <button className="rounded-[6px] w-auto cursor-pointer items-center bg-rose700 px-[16px] py-[6px] flex gap-[8px] text-[14px] font-[700] leading-[24px] text-white">
        <div className="w-[20px] h-[20px]">
          <img
            src="/images/trailer.svg"
            alt="play button"
            className="w-full h-full"
          />
        </div>
        <h3>WATCH TRAILER</h3>
      </button>
    </Link>
  );
};

export default WatchTrailer;
