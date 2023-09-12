
const SearchBar = () => {
  return (
      <div className='min-w-[525px] h-[36px] rounded-[6px] border-gray-300 border-[2px] flex justify-between items-center py-[6px] px-[10px] gap-4'>
            <input
            placeholder='What do you want to watch?'
            className='border-none outline-none bg-transparent text-white w-full placeholder:text-white'
            />
            <img src='/images/Search.png' alt='Search Button'/>
      </div>
  )
}

export default SearchBar
