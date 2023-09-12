import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router"
import { showMovieDetails } from "../store/stateAction"
import { useEffect } from "react"
import Details from "../pages/MovieDetails/Details";
import Sidebar from "../pages/MovieDetails/Sidebar/Sidebar";

const MovieDetails = () => {
  const { success, loading, error, movieDetails } = useSelector((state) => state.app);
  const { id } = useParams()
  const dispatch = useDispatch()
  const radius = 'rounded-r-[45px]'

  useEffect(() => {
    dispatch(showMovieDetails(id))
  }, [dispatch, id])

  console.log(movieDetails)

  return (
    <div className="h-dvh md:w-[1100px] mx-auto font-Poppins flex gap-[40px] items-center">
      <div>
        <Sidebar radius={radius} />
      </div>
      <div className="h-full">
        <Details movie={movieDetails} />
      </div>
    </div>
  )
}

export default MovieDetails
