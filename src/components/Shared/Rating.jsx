/* eslint-disable react/prop-types */
const Rating = ({movie}) => {
    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 23) + 78; // Generates a random integer between 78 and 100
    };

  return (
      <div className="flex items-center justify-between sm:justify-start sm:gap-[12px]">
          {/* Imdb Rating */}
          <div className="flex gap-[4px] items-center">
              {/* Imdb logo container */}
              <div className="w-[35px] h-[17px]">
                  {/* Imdb Logo */}
                  <img
                      src="/images/imdb.svg"
                      className="w-full h-full"
                      alt="imdb logo"
                  />
              </div>
              <p className="text-[12px] leading-[12px] font-[400] ">{(movie.vote_average * 10).toLocaleString()} / 100</p>
          </div>
          {/* Rotten Tomatoes Rating */}
          <div className="flex gap-[4px] items-center">
              {/* Rotten Tomatoes logo container */}
              <div className="w-[16px] h-[17px]">
                  {/* Rotten Tomatoes Logo */}
                  <img
                      src="/images/tomato.svg"
                      className="w-full h-full"
                      alt="Rotten Tomatoes logo"
                  />
              </div>
              <p className="text-[12px] leading-[12px] font-[400] ">{generateRandomNumber()}%</p>
          </div>
      </div>
  )
}

export default Rating
