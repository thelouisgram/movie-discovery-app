import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchedMovie } from "../../store/stateSlice";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [movie, setMovie] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setMovie(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(movie){
    dispatch(setSearchedMovie(movie))
    navigate(`/searched-movie/${movie}`)
    setMovie('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-[525px] h-[36px] rounded-[6px] border-gray-300 border-[2px] flex justify-between items-center py-[6px] px-[10px] gap-4">
      <input
        onChange={handleChange}
        value={movie}
        placeholder="What do you want to watch?"
        className="border-none outline-none bg-transparent text-white w-full placeholder:text-white"
      />
      <button
        className="outline-none cursor-pointer"
      >
        <img src="/images/Search.png" alt="Search Button" />
      </button>
    </form>
  );
};

export default SearchBar;
