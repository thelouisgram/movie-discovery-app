import Sidebar from "../components/Sidebar/Sidebar"
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router"
import { showMovieDetails } from "../store/stateAction"
import { useEffect } from "react"


const MovieDetails = () => {
  const { success, loading, error, movieDetails } = useSelector((state) => state.app);
  const { id } = useParams()
  const dispatch = useDispatch()
  const radius = 'rounded-r-[45px]'

  useEffect(()=>{
    dispatch(showMovieDetails(id))
  }, [dispatch, id])

  console.log(movieDetails)

  return (
    <div className="h-dvh md:w-[1100px] mx-auto">
      <Sidebar radius={radius}/>
      
    </div>
  )
}

export default MovieDetails
