/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../store/appSlice';
import { setNav } from '../store/appSlice';
import Loader from '../components/Shared/Loader';
import Error from '../components/Shared/Error';
import Hero from '../pages/HomePage/HeroSection/Hero';
import TopMovies from '../pages/HomePage/TopMovies/TopMovies';
import Footer from '../pages/HomePage/Footer/Footer';
import { showTrendingMovies } from '../store/stateAction';

/**
 * The Home component represents the home page of the application.
 * It displays a hero section, top movies, and a footer.
 */
const Home = ({ selectedMovieIndex, setSelectedMovieIndex }) => {
  const dispatch = useDispatch();
  const { trendingMovies } = useSelector(
    (state) => state.app
  );

  const { success, loading, error, message } = trendingMovies

  useEffect(() => {
    // After both actions are complete, you can dispatch other actions
    dispatch(reset());
    dispatch(setNav(false));
  }, [])

  return (
    <>
      {loading ? (
        <div className='h-[100dvh] flex items-center justify-center'><Loader /></div>
      ) : error ? (
        <div className='h-[100dvh] flex items-center justify-center px-3 xs:px-5 text-center'>
          <Error action={showTrendingMovies} message={message} />
        </div>
      ) : success ? (
        <div>
          {/* Hero section */}
          <Hero selectedMovieIndex={selectedMovieIndex} setSelectedMovieIndex={setSelectedMovieIndex} />

          {/* Top Movies */}
          <TopMovies />

          {/* Footer */}
          <Footer />
        </div>
      ) : null}
    </>
  );
};

export default Home;
