import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MovieCard = ({ movie }) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/";
  const posterSize = "w300";
  const posterPath = movie.poster_path;
  const fullPosterUrl = `${baseImageUrl}${posterSize}${posterPath}`;

  return (
    <Link to={`/movies/${movie.id}`}>
      <div
        data-testid="movie-card"
        className="text-gray900 flex flex-col gap-[12px] cursor-pointer hover: transform md:hover:scale-110 transition-all relative"
      >
        <div className="absolute z-[8] top-1 right-1 ss:top-2 ss:right-2 bg-grayBtn backdrop-blur-1 h-[24px] w-[24px] ss:w-[30px] 
        ss:h-[30px] rounded-full flex items-center justify-center">
          <img
            src="/images/Heart.svg"
            alt="Favorite"
            className="z-[9] w-[16px] h-[16px] ss:w-auto ss:h-auto"
          />
        </div>

        {/* Movie Poster */}
        <div className="img-placeholder bg-gray400">
          <img
            data-testid="movie-poster"
            className="w-full h-full object-cover"
            src={fullPosterUrl}
            alt={movie.title}
          />
        </div>

        {/* Movie Title */}
        <h2
          data-testid="movie-title"
          className="text-[14px] md:text-[18px] font-[700]"
        >
          {movie.title}
        </h2>

        {/* Movie Release Date */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-1 h-auto">
          <h2 className="text-[12px] md:text-[14px] font-[700]">
            Release Date:{" "}
          </h2>
          <p
            data-testid="movie-release-date"
            className="text-gray400 font-[700] text-[12px] md:text-[14px]"
          >
            {movie.release_date}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
