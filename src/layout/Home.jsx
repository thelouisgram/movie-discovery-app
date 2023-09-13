import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showTopMovies, showTrendingMovies } from '../store/stateAction';
import { reset } from '../store/stateSlice';
import { setNav } from '../store/stateSlice';
import Loader from '../components/Shared/Loader';
import Error from '../components/Shared/Error';
import Hero from '../pages/HomePage/HeroSection/Hero';
import TopMovies from '../pages/HomePage/TopMovies/TopMovies';
import Footer from '../pages/HomePage/Footer/Footer';

/**
 * The Home component represents the home page of the application.
 * It displays a hero section, top movies, and a footer.
 *
 * @returns {JSX.Element} - The Home component JSX element.
 */
const Home = () => {
  const dispatch = useDispatch();
  const { trendSuccess, trendLoading, trendError } = useSelector(
    (state) => state.app
  );

  useEffect(() => {
    async function fetchData() {
      try {
        // Dispatch the first action asynchronously and wait for it to complete
        await dispatch(showTrendingMovies());

        // Once the first action is complete, dispatch the second action
        await dispatch(showTopMovies());

        // After both actions are complete, you can dispatch other actions
        dispatch(reset());
        dispatch(setNav(false));
      } catch (error) {
        // Handle any errors that might occur during the dispatch
        console.error('Error:', error);
      }
    }

    fetchData(); // Call the async function to start the data fetching process
  }, [dispatch]);

  return (
    <>
      {trendLoading ? (
        <div className='h-[100dvh] flex items-center justify-center'><Loader /></div>
      ) : trendError ? (
          <div className='h-[100dvh] flex items-center justify-center px-3 xs:px-5 text-center'><Error /></div>
      ) : trendSuccess ? (
        <div>
          {/* Hero section */}
          <Hero />

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
