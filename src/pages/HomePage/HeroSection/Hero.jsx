import { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import DescriptionBox from "./DescriptionBox";
import { useSelector, useDispatch } from "react-redux";
import { showTrendingMovies } from "../../../store/stateAction";

const Hero = () => {
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);
  const { success, loading, error, trendingMovies } = useSelector(
    (state) => state.app
  );
  const dispatch = useDispatch();

  // Define a CSS class to control the fading animation
  const backgroundImageClass = success ? "fadeInOut" : "";

  useEffect(() => {
    // Function to increment selectedMovieIndex
    const incrementIndex = () => {
      setSelectedMovieIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
    };

    // Set an interval to call incrementIndex every 0.5 minute
    const intervalId = setInterval(incrementIndex, 30000);

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []);

  // Function to fetch trending movies and handle errors
  const fetchTrendingMovies = () => {
    dispatch(showTrendingMovies());
  };

  useEffect(() => {
    // Fetch trending movies when the component mounts or when an error occurs
    if (error) {
      fetchTrendingMovies();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <div className="lg:w-full h-[100vh] md:h-[600px] bg-center  text-white xl:w-[1440px] xl:mx-auto relative">
      {loading ? (
        <div className="w-full h-full bg-rose-100 z-[-10]" />
      ) : error ? (
        // Display an error message and retry button
        <>
          <p>Error: {error.status_message}</p>
          <button onClick={fetchTrendingMovies}>Retry</button>
        </>
      ) : success ? (
        <>
          <img
            src={`https://image.tmdb.org/t/p/original/${trendingMovies[selectedMovieIndex].backdrop_path}`}
            alt="Backdrop Poster"
            className={`w-full h-full object-cover absolute z-[-10] ${backgroundImageClass}`}
          />

          {/* Navbar */}
          <Navbar />

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
