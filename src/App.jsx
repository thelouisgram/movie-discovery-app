import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./layout/Home";
import Error from "./layout/Error";
import MovieDetails from "./layout/MovieDetails";
import Result from "./layout/Result"

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
           <Route path="/" >
            <Route index element={<Home />} />
            <Route path="/:id" element={<MovieDetails />}/>
            <Route path="/result" element={<Result />}/>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
