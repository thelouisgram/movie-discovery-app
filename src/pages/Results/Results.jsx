import { useSelector } from "react-redux";
import MovieCard from "../../components/Shared/MovieCard";


const Results = () => {
  const { searchedMovies } = useSelector((state) => state.app);
  return (
    <div>
      {searchedMovies.map((index, movie) => (
        <MovieCard key={index} movie={movie} />
      ))
      }
    </div>
  )
}

export default Results
