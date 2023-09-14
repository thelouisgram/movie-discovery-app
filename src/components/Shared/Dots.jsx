/* eslint-disable react/prop-types */
const Dots = ({ count, selectedMovieIndex, setSelectedMovieIndex }) => {
    const dots = Array.from({ length: count }, (_, index) => (
        <button onClick={()=>setSelectedMovieIndex(index)}
        className={` ${selectedMovieIndex === index ? 'text-[30px] text-white' : 'text-[24px] text-gray-500' }`} key={index}>•</button>
    ));

    return <div className="flex gap-[4px] items-center">{dots}</div>;
};

export default Dots;
