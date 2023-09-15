/* eslint-disable react/prop-types */
const Dots = ({ count, selectedMovieIndex, setSelectedMovieIndex }) => {
    const dots = Array.from({ length: count }, (_, index) => (
        <button onClick={()=>setSelectedMovieIndex(index)}
        className={` ${selectedMovieIndex === index ? 'text-[40px] text-white' : 'text-[32px] text-gray-500 hover:text-white' }`} key={index}>•</button>
    ));

    return <div className="flex gap-[6px] items-center">{dots}</div>;
};

export default Dots;
