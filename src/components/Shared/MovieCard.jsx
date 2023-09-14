/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";
import Rating from "./Rating";

/**
 * MovieCard component for displaying movie information.
 */
const MovieCard = ({ movie }) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/";
  const posterSize = "w500";
  const posterPath = movie.poster_path;
  const fullPosterUrl = `${baseImageUrl}${posterSize}${posterPath}`;
  const [fav, setFav] = useState(false);

  /**
   * Handles the click event for toggling the favorite status of the movie.
   */
  const handleFav = () => {
    setFav((prev) => !prev);
  };

  return (
    <div
      data-testid="movie-card"
      className="text-gray900 flex flex-col gap-[12px] cursor-pointer hover: transform md:hover:scale-110 transition-all relative"
    >
      <button
        onClick={handleFav}
        className={`absolute z-[8] top-1 right-1 ss:top-2 ss:right-2 ${
          fav ? "bg-rose700" : "bg-grayBtn"
        } backdrop-blur-1 h-[24px] w-[24px] ss:w-[30px] 
        ss:h-[30px] rounded-full flex items-center justify-center`}
      >
        <img
          loading="lazy"
          src="/images/Heart.svg"
          alt="Favorite"
          className="z-[9] w-[16px] h-[16px] ss:w-auto ss:h-auto"
        />
      </button>
      <Link to={`/movies/${movie.id}`} className="flex flex-col gap-2">
        {/* Movie Poster */}
        <div className="img-placeholder bg-gray-200">
          {posterPath ? (
            <img
              data-testid="movie-poster"
              className="w-full h-full object-cover"
              src={fullPosterUrl}
              alt={movie.title}
            />
          ) : (
            <h2 className="p-2 h-full flex items-center justify-center ">
              Poster Not Available!
            </h2>
          )}
        </div>
        {/* Movie Release Date */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-1 h-auto">
          <p
            data-testid="movie-release-date"
            className="text-gray400 font-[700] text-[12px] md:text-[14px]"
          >
            {movie.release_date}
          </p>
        </div>
        {/* Movie Title */}
        <h2
          data-testid="movie-title"
          className="text-[14px] md:text-[18px] font-[700] leading-4 md:leading-normal"
        >
          {movie.title}
        </h2>
        {/* Movie Rating */}
        <Rating movie={movie} />
      </Link>
    </div>
  );
};

export default MovieCard;
