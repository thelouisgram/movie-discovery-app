import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { showMovieDetails } from "../store/stateAction";
import { useEffect } from "react";
import Details from "../pages/MovieDetails/Details";
import Sidebar from "../pages/MovieDetails/Sidebar/Sidebar";
import Loader from "../components/Shared/Loader";
import Navbar from "../components/Navbar/Navbar";
import Error from "./Error";

const MovieDetails = () => {
  // Retrieve data from Redux store using useSelector
  const { movieDetails } = useSelector(
    (state) => state.app
  );

  const { success, loading, error, data, message } = movieDetails

  // Retrieve the "id" parameter from the URL using useParams
  const { id } = useParams();

  // Initialize Redux dispatch
  const dispatch = useDispatch();

  // Define a CSS class
  const radius = "rounded-r-[45px]";

  // Use useEffect to dispatch an action to load movie details when the component mounts
  useEffect(() => {
    dispatch(showMovieDetails(id));
  }, [dispatch, id]);

  // Use useEffect to scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="h-dvh md:w-[1100px] mx-auto font-Poppins md:flex gap-[40px] pb-12 md:pb-0 md:items-center">
      {/* Sidebar Component */}
      <div>
        <Sidebar radius={radius} />
        {success && <div className="border-b-[1px] md:border-none border-gray-300">
          <Navbar display="flex md:hidden" />
        </div>}
      </div>

      {/* Conditional rendering based on loading, error, or success */}
      {loading ? (
        // Display a Loader component while data is being fetched
        <Loader />
      ) : error ? (
        // Display an error message if an error occurred
          <Error action={showMovieDetails} message={message}/>
      ) : success ? (
        // Display movie details using the Details component when data is successfully fetched
        <div className="h-full px-3 xs:px-5 md:px-0">
          <Details movie={data} />
        </div>
      ) : null}
    </div>
  );
};

export default MovieDetails; // Export the MovieDetails component for use in other parts of the application
