import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Loader from "./../../../components/Shared/Loader";

const TopMovies = () => {
  const { success, loading, error, topMovies } =
    useSelector((state) => state.app);

  return (
    <section className="md:w-[1100px] mx-auto py-16">
      <div className="flex w-full justify-between items-center mb-8">
        <h2 className="font-[700] text-[36px]">Top Rated Movie</h2>
        <div className="flex items-center gap-2 hover:cursor-pointer">
          <p className="text-rose700 text-[18px] font-[400] leading-[24px]">
            See more
          </p>
          <img src="/images/right.svg" alt="See more" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[80px]">
        {loading ? (
          <Loader />
        ) : error ? (
          <p>Error occurred: {error.message}</p>
        ) : success ? (
          topMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        ) : null}
      </div>
    </section>
  );
};

export default TopMovies;
