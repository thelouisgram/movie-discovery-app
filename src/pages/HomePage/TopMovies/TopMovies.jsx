import { useSelector } from "react-redux";
import Loader from "./../../../components/Shared/Loader";
import MovieCard from "../../../components/Shared/MovieCard";
import Error from "../../../components/Shared/Error";
import { showTopMovies } from "../../../store/stateAction";

const TopMovies = () => {
  const { success, loading, error, topMovies } = useSelector(
    (state) => state.app
  );

  return (
    <section className="md:w-[1100px] mx-auto py-16 px-3 xs:px-5 md:px-0">
      <div className="flex w-full justify-between items-center mb-8">
        <h2 className="font-[700] text-16px xs:text-[24px] md:text-[36px]">
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
        <Error action={showTopMovies}/>
      ) : success ? (
        <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-[12px] xs:gap-[18px] md:gap-[80px]">
          {topMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default TopMovies;
