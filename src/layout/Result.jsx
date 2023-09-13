/* eslint-disable react/no-unescaped-entities */
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Shared/Loader";
import { showSearchedMovies } from "../store/stateAction";
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import MovieCard from "../components/Shared/MovieCard";
import { setNav } from "../store/stateSlice";


const Result = () => {
  const { success, loading, error, searchedMovies, searchedMovie } =
    useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchedMovie) {
      dispatch(showSearchedMovies(searchedMovie));
    }
  }, [dispatch, searchedMovie]);

  useEffect(() => {
    dispatch(setNav(false))
  })   


  return (
    <div className="w-full h-[100dvh]">
      <div className="md:w-full w-full xl:w-[1440px] mx-auto bg-rose-200">
        {/* Navbar */}
        <Navbar />
      </div>
      {/* Results Section */}
      <div className="md:w-[1100px] mx-auto py-8 xs:py-12 md:py-16 px-3 xs:px-5 md:px-0">
        {!loading && <div className="flex w-full justify-start center mb-4 xs:mb-8">
          <h2 className="font-[700] text-[18px] md:text-[36px]">Search result for <span className="italic">'{searchedMovie}'</span> ({searchedMovies.length})</h2>
        </div>}
        <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-[12px] xs:gap-[18px] md:gap-[80px] flex-wrap">
          {loading ? (
            <Loader />
          ) : error ? (
            <p>Error occurred: {error.status.message}</p>
          ) : success ? (
            searchedMovies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Result;
