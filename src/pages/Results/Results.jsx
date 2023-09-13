import { useSelector } from "react-redux";
import MovieCard from "../../components/Shared/MovieCard";

/**
 * Results component for displaying a list of searched movies.
 */
const Results = () => {
  // Get the searchedMovies data from the Redux store
  const { searchedMovies } = useSelector((state) => state.app);

  return (
    <div>
      {/* Map through the searchedMovies array and render MovieCard components */}
      {searchedMovies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default Results;
