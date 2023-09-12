import { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import DescriptionBox from "./DescriptionBox";
import { useSelector } from "react-redux";
import Loader from "../../../components/Shared/Loader";

// Define a functional component called Hero
const Hero = () => {
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);
  const { success, loading, error, trendingMovies } = useSelector(
    (state) => state.app
  );

  const backdropUrls = trendingMovies.map(
    (movie) => `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
  );

  return (
    <div className="lg:w-full h-[100dvh] md:h-[600px] bg-center  text-white xl:w-[1440px] xl:mx-auto relative ">
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Error: {error.status_message}</p>
      ) : success ? (
        <>
          {backdropUrls.map((item, index) => (
            <img
              key={index}
              src={item}
              alt="Backdrop Poster"
              className={`w-full h-full object-cover absolute z-[-10] `}
            />
          ))}

          {/* Navbar */}
          <Navbar />
          {/* Description box */}
          <section className="md:w-[1100px] mx-auto h-full md:h-[520px] flex flex-col justify-center items-center md:items-start ">
            <DescriptionBox poster={trendingMovies[selectedMovieIndex]} />
          </section>
        </>
      ) : null}
    </div>
  );
};

export default Hero;
