/* eslint-disable react/prop-types */

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchedMovie } from "../../store/stateSlice";
import { useNavigate } from "react-router-dom";

/**
 * SearchBar component for searching movies.
 */
const SearchBar = ({ colors }) => {
  const [movie, setMovie] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * Handles the change event when the user types in the search input.
   */
  const handleChange = (event) => {
    setMovie(event.target.value.toLowerCase());
  };

  /**
   * Handles the form submission when the user searches for a movie.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (movie) {
      dispatch(setSearchedMovie(movie));
      navigate(`/searched-movie/${movie}`);
      setMovie("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${colors} w-full sm:min-w-[425px] md:min-w-[525px] h-[36px] rounded-[6px] border-[2px] flex justify-between items-center py-[6px] px-[10px] gap-4`}
    >
      <input
        onChange={handleChange}
        value={movie}
        placeholder="What do you want to watch?"
        className={`${colors} border-none outline-none bg-transparent w-full `}
      />
      <button className="outline-none cursor-pointer">
        <i className="fa-solid fa-magnifying-glass "></i>
      </button>
    </form>
  );
};

export default SearchBar;
