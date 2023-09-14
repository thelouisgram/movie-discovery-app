/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
 */
const Home = () => {
  const dispatch = useDispatch();
  const { trendSuccess, trendLoading, trendError } = useSelector(
    (state) => state.app
  );

  useEffect(() => {
    // After both actions are complete, you can dispatch other actions
    dispatch(reset());
    dispatch(setNav(false));
  }, [])

 

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
