import MovieCard from '../HomePage/TopMovies/MovieCard'
import { useSelector } from "react-redux";


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
