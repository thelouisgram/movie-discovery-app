import { useState, useEffect } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import DescriptionBox from './DescriptionBox';
import { useSelector } from 'react-redux';
import Loader from '../../../components/Shared/Loader';
import Error from '../../../components/Shared/Error';
import Pagination from '../../../utils/Pagination';
import Dots from '../../../components/Shared/Dots';

/**
 * The Hero component displays a hero section with trending movies.
 */
const Hero = () => {
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);
  const { trendLoading, trendSuccess, trendError, trendingMovies } = useSelector(
    (state) => state.app
  );

  const count = 5;

  useEffect(() => {
    // Function to increment selectedMovieIndex
    const incrementIndex = () => {
      setSelectedMovieIndex((prevIndex) =>
        prevIndex === 4 ? 0 : prevIndex + 1
      );
    };

    const intervalId = setInterval(incrementIndex, 15000);

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="lg:w-full h-[100vh] md:h-[600px] bg-center text-white xl:w-[1440px] xl:mx-auto relative">
      {trendLoading ? (
        <Loader />
      ) : trendError ? (
        <Error />
      ) : trendSuccess ? (
        <>
          <img
            src={`https://image.tmdb.org/t/p/original/${trendingMovies[selectedMovieIndex].backdrop_path}`}
            alt="Backdrop Poster"
            className={`w-full h-full object-cover filter brightness-90 absolute z-[-10]`}
          />

          {/* Navbar */}
          <Navbar display="flex" />

          {/* Description box */}
          <div className="h-screen-16 md:h-[520px] w-full md:flex md:items-center gap-2 md:w-[1100px] mx-auto px-3 xs:px-5 md:px-0">
            <div className="w-full h-full flex justify-between items-center">
              <section className="w-full flex flex-col justify-center items-center md:items-start">
                <DescriptionBox poster={trendingMovies[selectedMovieIndex]} />
              </section>
              <div className="w-5 h-1 bg-white rounded-full hidden md:flex" />
            </div>

            <div className="hidden md:flex">
              <Pagination
                count={count}
                selectedMovieIndex={selectedMovieIndex}
                setSelectedMovieIndex={setSelectedMovieIndex}
              />
            </div>
            <div className='w-full relative flex md:hidden'>
              <div className='bottom-10 flex md:hidden justify-center absolute w-full'>
                <Dots count={count} selectedMovieIndex={selectedMovieIndex} setSelectedMovieIndex={setSelectedMovieIndex} />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Hero;
