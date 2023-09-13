import { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import DescriptionBox from "./DescriptionBox";
import { useSelector } from "react-redux";
import Loader from "../../../components/Shared/Loader";
import { showTrendingMovies } from "../../../store/stateAction";
import Error from "../../../components/Shared/Error";

const Hero = () => {
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);
  const { success, loading, error, trendingMovies } = useSelector(
    (state) => state.app
  );

  useEffect(() => {
    // Function to increment selectedMovieIndex
    const incrementIndex = () => {
      setSelectedMovieIndex((prevIndex) =>
        prevIndex === 4 ? 0 : prevIndex + 1
      );
    };

    // Set an interval to call incrementIndex every 0.5 minute
    const intervalId = setInterval(incrementIndex, 15000);

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []);


  return (
    <div className="lg:w-full h-[100vh] md:h-[600px] bg-center  text-white xl:w-[1440px] xl:mx-auto relative">
      {loading ? (
        <Loader />
      ) : error ? (
        <Error action={showTrendingMovies}/>
      ) : success ? (
        <>
          <img
            src={`https://image.tmdb.org/t/p/original/${trendingMovies[selectedMovieIndex].backdrop_path}`}
            alt="Backdrop Poster"
            className={`w-full h-full object-cover absolute z-[-10]`}
          />

          {/* Navbar */}
          <Navbar display="flex" />

          {/* Description box */}
          <section className="md:w-[1100px] mx-auto h-full md:h-[520px] flex flex-col justify-center items-center md:items-start">
            <DescriptionBox poster={trendingMovies[selectedMovieIndex]} />
          </section>
        </>
      ) : null}
    </div>
  );
};

export default Hero;
