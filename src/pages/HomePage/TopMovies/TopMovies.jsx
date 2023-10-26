import { useSelector } from "react-redux";
import Loader from "./../../../components/Shared/Loader";
import MovieCard from "../../../components/Shared/MovieCard";
import Error from "../../../components/Shared/Error";
import { showTopMovies } from "../../../store/stateAction";

const TopMovies = () => {
  const { topMovies } = useSelector(
    (state) => state.app
  );

  const { success, loading, error, data } = topMovies

  return (
    <section className="md:w-[1100px] mx-auto py-16 px-3 xs:px-5 md:px-0">
      <div className="flex w-full justify-between items-center mb-8">
        <h2 className="font-[700] text-16px xs:text-[24px] sm:text-[36px]">
          Top Rated Movies
        </h2>
        <div className="flex items-center gap-1 hover:cursor-pointer">
          <p className="text-rose700 text-[12px] xs:text-[16px] font-[400] leading-normal xs:leading-[24px]">
            See more
          </p>
          <img
            src="/images/right.svg"
            alt="See more"
            className="w-[14px] xs:w-[16px] md:w-auto"
          />
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error action={showTopMovies} />
      ) : success ? (
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-[12px] gap-y-[18px] xs:gap-[18px] md:gap-[40px] flex-wrap">
          {data.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default TopMovies;
