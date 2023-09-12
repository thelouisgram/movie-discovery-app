/* eslint-disable react/prop-types */
const Details = ({ movie }) => {
  const releaseDateInUTC = new Date(movie.release_date).toUTCString();
  const tmdbImageUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div className="flex flex-col items-start gap-6 w-full">
      {/* Image backdrop */}
      {movie.backdrop_path && (
        <div className="backdrop w-full h-full bg-gray-300 overflow-hidden rounded-[20px]">
          <img
            src={`${tmdbImageUrl}${movie.backdrop_path}`}
            alt="Movie Backdrop"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      {/* Movie Title */}
      <h1
        data-testid="movie-title"
        className="text-gray900 text-[23px] font-[500]"
      >
        {movie.title}
      </h1>
      {/* Specifics */}
      <div className="flex gap-2 items-center">
        {/* Release Dates */}
        <p data-testid="movie-release-date">{releaseDateInUTC}</p>
        <span>•</span>
        {/* Movie duration */}
        <div className="flex items-center mr-2">
          <p data-testid="movie-runtime">{movie.runtime}</p> minutes
        </div>
        {/* Movie Genre */}
        {movie.genres && movie.genres.length > 0
          ? movie.genres.map((genre) => (
              <p
                key={genre.id}
                className="text-rose700 border-[1px] border-pink200 px-[24px] py-[2px] rounded-full text-[15px] font-[500]"
              >
                {genre.name}
              </p>
            ))
          : null}
      </div>
      {/* Movie overview */}
      <p data-testid="movie-overview className='text-[20px]">
        {movie.overview}
      </p>
    </div>
  );
};

export default Details;
