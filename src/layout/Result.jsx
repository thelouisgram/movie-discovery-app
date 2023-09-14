/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Shared/Loader";
import { showSearchedMovies } from "../store/stateAction";
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import MovieCard from "../components/Shared/MovieCard";
import { setNav } from "../store/stateSlice";

/**
 * Result component for displaying search results.
 */
const Result = () => {
  const { success, loading, error, searchedMovies, searchedMovie } =
    useSelector((state) => state.app);
  const dispatch = useDispatch();

  // Fetch searched movies when the searchedMovie value changes.
  useEffect(() => {
    if (searchedMovie) {
      dispatch(showSearchedMovies(searchedMovie));
    }
  }, [dispatch, searchedMovie]);

  // Disable the navigation bar when the component mounts.
  useEffect(() => {
    dispatch(setNav(false));
  }, []);

  return (
    <div className="w-full h-[100dvh]">
      <div className="md:w-full w-full xl:w-[1440px] mx-auto border-b-[1px] md:border-none border-gray-300">
        {/* Navbar */}
        <Navbar colors={"border-gray-400 text-gray-400 placeholder:text-gray-400"}/>
      </div>
      {/* Results Section */}
      <div className="md:w-[1100px] mx-auto py-8 xs:py-12 md:py-16 px-3 xs:px-5 md:px-0">
        {!loading && (
          <div className="flex w-full justify-start center mb-4 xs:mb-8">
            <h2 className="font-[700] text-[18px] md:text-[36px]">
              <span className="italic">'{searchedMovie}'</span> (
              {searchedMovies.length})
            </h2>
          </div>
        )}
        {loading ? (
          <Loader />
        ) : error ? (
          <p>Error occurred: {error.status.message}</p>
        ) : success ? (
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-[12px] gap-y-[18px] xs:gap-[18px] md:gap-[80px] flex-wrap">
            {searchedMovies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Result;
