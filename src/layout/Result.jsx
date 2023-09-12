/* eslint-disable react/no-unescaped-entities */
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Shared/Loader";
import { showSearchedMovies } from "../store/stateAction";
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import MovieCard from "../components/Shared/MovieCard";

const Result = () => {
  const { success, loading, error, searchedMovies, searchedMovie} =
    useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchedMovie) {
      dispatch(showSearchedMovies(searchedMovie));
    }
  }, [dispatch, searchedMovie]);


  return (
    <div>
      <div className="md:w-full xl:w-[1440px] mx-auto bg-rose700">
        {/* Navbar */}
        <Navbar />
      </div>
      {/* Results Section */}
      <div className="md:w-[1100px] mx-auto py-16">
        {!loading && <div className="flex w-full justify-start center mb-8">
          <h2 className="font-[700] text-[36px]">Search result for <span className="italic">'{searchedMovie}'</span> ({searchedMovies.length})</h2>
      </div>}
        <div className="grid grid-cols-4 gap-[80px]">
          {loading ? (
            <Loader />
          ) : error ? (
            <p>Error occurred: {error.message}</p>
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
