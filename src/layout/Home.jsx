import Hero from "../pages/HomePage/HeroSection/Hero"
import TopMovies from "../pages/HomePage/TopMovies/TopMovies"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { showTopMovies, showTrendingMovies } from "../store/stateAction"
import Footer from "../pages/HomePage/Footer/Footer"
import { reset } from "../store/stateSlice"

const Home = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(showTrendingMovies())
    dispatch(showTopMovies())
    dispatch(reset())
  })

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
