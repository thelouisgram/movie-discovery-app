/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import DescriptionBox from './DescriptionBox';
import { useSelector } from 'react-redux';
import Loader from '../../../components/Shared/Loader';
import Error from '../../../components/Shared/Error';
import Pagination from '../../../utils/Pagination';
import Dots from '../../../components/Shared/Dots';
import { showTrendingMovies } from '../../../store/stateAction';

/**
 * The Hero component displays a hero section with trending movies.
 */
const Hero = ({ selectedMovieIndex, setSelectedMovieIndex }) => {
  const { trendingMovies } = useSelector(
    (state) => state.app
  );

  const { success, loading, error, data, message } = trendingMovies

  // Function to increment selectedMovieIndex
  const incrementIndex = () => {
    setSelectedMovieIndex((prevIndex) =>
      prevIndex === 4 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(incrementIndex, 8000);

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, [selectedMovieIndex]);

  return (
    <div className="lg:w-full h-[100vh] sm:h-[800px] md:h-[600px] bg-center text-white xl:w-[1440px] xl:mx-auto relative">
      {loading ? (
        <Loader />
      ) : error ? (
        <Error action={showTrendingMovies} message={message} />
      ) : success ? (
        <>
          <img
            src={`https://image.tmdb.org/t/p/original/${data[selectedMovieIndex].backdrop_path}`}
            alt="Backdrop Poster"
            className={`w-full h-full object-cover filter brightness-75 absolute z-[-10] transition ease-in-out`}
          />

          {/* Navbar */}
          <Navbar display="flex" colors={"border-white text-white placeholder:text-white"} />

          {/* Description box */}
          <div className="h-screen-16 sm:h-[720px] md:h-[520px] w-full md:flex md:items-center gap-2 md:w-[1100px] mx-auto px-3 xs:px-5 md:px-0 transition ease-in-out">
            <div className="w-full h-full flex justify-between items-center">
              <section className="w-full flex flex-col justify-center items-center md:items-start">
                <DescriptionBox poster={data[selectedMovieIndex]} />
              </section>
              <div className="w-5 h-1 bg-white rounded-full hidden md:flex" />
            </div>

            <div className="hidden md:flex">
              <Pagination
                count={5}
                selectedMovieIndex={selectedMovieIndex}
                setSelectedMovieIndex={setSelectedMovieIndex}
              />
            </div>
            <div className='w-full relative flex md:hidden'>
              <div className='bottom-16 flex md:hidden justify-center absolute w-full'>
                <Dots count={5} selectedMovieIndex={selectedMovieIndex} setSelectedMovieIndex={setSelectedMovieIndex} />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Hero;
