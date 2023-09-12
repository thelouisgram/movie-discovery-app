import { useState } from "react"
import { useDispatch } from "react-redux"
import { setSearchedMovie } from "../../store/stateSlice"

const SearchBar = () => {
  const [movie, setMovie] = useState('')
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    setMovie(event.target.value.toLowerCase())
  }
  return (
      <div className='min-w-[525px] h-[36px] rounded-[6px] border-gray-300 border-[2px] flex justify-between items-center py-[6px] px-[10px] gap-4'>
            <input
            onChange={handleSubmit}
            value={movie}
            placeholder='What do you want to watch?'
            className='border-none outline-none bg-transparent text-white w-full placeholder:text-white'
            />
            <button 
              onClick={()=> dispatch(setSearchedMovie(movie))}
              className='outline-none cursor-pointer'>
              <img src='/images/Search.png' alt='Search Button'/>
            </button>
      </div>
  )
}

export default SearchBar
