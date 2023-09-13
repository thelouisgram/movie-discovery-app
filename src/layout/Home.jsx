import Hero from "../pages/HomePage/HeroSection/Hero"
import TopMovies from "../pages/HomePage/TopMovies/TopMovies"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { showTopMovies, showTrendingMovies } from "../store/stateAction"
import Footer from "../pages/HomePage/Footer/Footer"
import { reset } from "../store/stateSlice"
import {setNav} from './../store/stateSlice'

const Home = () => {
  const dispatch = useDispatch()

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
    <div>
      {/* Hero section */}
      <Hero />
      {/* Top Movies */}
      <TopMovies />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
