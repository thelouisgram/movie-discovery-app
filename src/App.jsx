import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./layout/Home";
import Error from "./layout/Error";
import MovieDetails from "./layout/MovieDetails";
import Result from "./layout/Result";
import SharedLayout from "./components/SharedLayout";
import { useDispatch } from "react-redux";
import { showTrendingMovies, showTopMovies } from "./store/stateAction";
import { useEffect, useState } from "react";

/**
 * Main application component responsible for defining routing.
 * */
function App() {
  const dispatch = useDispatch();
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0)

  useEffect(() => {
    async function fetchData() {
      try {
        // Dispatch the first action asynchronously and wait for it to complete
        await dispatch(showTrendingMovies());

        // Once the first action is complete, dispatch the second action
        await dispatch(showTopMovies());
      } catch (error) {
        // Handle any errors that might occur during the dispatch
        console.error("Error:", error);
      }
    }

    fetchData(); // Call the async function to start the data fetching process
  }, [dispatch]);
  return (
    <>
      {/* HashRouter is used to enable routing in the application */}
      <HashRouter>
        <Routes>
          {/* SharedLayout component is rendered for all routes */}
          <Route path="/" element={<SharedLayout />}>
            {/* Home component is rendered for the root path */}
            <Route index element={<Home selectedMovieIndex={selectedMovieIndex} setSelectedMovieIndex={setSelectedMovieIndex} />} />

            {/* Result component is rendered for searched movies */}
            <Route path="/searched-movie/:searchedMovie" element={<Result />} />

            {/* MovieDetails component is rendered for movie details */}
            <Route path="/movies/:id" element={<MovieDetails />} />

            {/* Error component is rendered for all other paths */}
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
