import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { showMovieDetails } from "../store/stateAction";
import { useEffect } from "react";
import Details from "../pages/MovieDetails/Details";
import Sidebar from "../pages/MovieDetails/Sidebar/Sidebar";
import Loader from "../components/Shared/Loader";

const MovieDetails = () => {
  const { success, loading, error, movieDetails } = useSelector(
    (state) => state.app
  );
  const { id } = useParams();
  const dispatch = useDispatch();
  const radius = "rounded-r-[45px]";

  useEffect(() => {
    dispatch(showMovieDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <div className="h-dvh md:w-[1100px] mx-auto font-Poppins flex gap-[40px] items-center">
      <div>
        <Sidebar radius={radius} />
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Error occurred: {error.message}</p>
      ) : success ? (
        <div className="h-full">
          <Details movie={movieDetails} />
        </div>
      ) : null}
    </div>
  );
};

export default MovieDetails;
