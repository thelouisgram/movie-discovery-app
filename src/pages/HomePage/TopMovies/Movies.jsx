import MovieCard from "../../../components/Shared/MovieCard";
import { useSelector } from "react-redux";

const Movies = () => {
  const { topMovies } = useSelector((state) => state.app);

  return (
    <div>
      {topMovies.map((index, movie) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
