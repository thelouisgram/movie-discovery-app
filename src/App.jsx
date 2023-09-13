import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./layout/Home";
import Error from "./layout/Error";
import MovieDetails from "./layout/MovieDetails";
import Result from "./layout/Result";
import SharedLayout from "./components/SharedLayout";
import { setNav } from "./store/stateSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(setNav(false))
    })    

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/searched-movie/:searchedMovie" element={<Result />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
