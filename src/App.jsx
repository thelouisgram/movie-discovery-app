import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './layout/Home';
import Error from './layout/Error';
import MovieDetails from './layout/MovieDetails';
import Result from './layout/Result';
import SharedLayout from './components/SharedLayout';

/**
 * Main application component responsible for defining routing.
 * */
function App() {
  return (
    <>
      {/* HashRouter is used to enable routing in the application */}
      <HashRouter>
        <Routes>
          {/* SharedLayout component is rendered for all routes */}
          <Route path="/" element={<SharedLayout />}>
            {/* Home component is rendered for the root path */}
            <Route index element={<Home />} />

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
