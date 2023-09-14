/* eslint-disable react/prop-types */

/**
 * Pagination component for selecting a movie index.
 **/
const Pagination = ({ count, selectedMovieIndex, setSelectedMovieIndex }) => {
  // Create an array of numbers based on the count
  const numbers = Array.from({ length: count }, (_, index) => index + 1);

  /**
   * Calculate the margin for the Pagination component based on the selected movie index.
   */
  const margin = (selectedMovieIndex) => {
    if (selectedMovieIndex === 0) {
      return "pt-[112px]" || "pt-[113px]";
    } else if (selectedMovieIndex === 1) {
      return "pt-[55px]";
    } else if (selectedMovieIndex === 2) {
      return "pt-[1px] || pt-[0px]";
    } else if (selectedMovieIndex === 3) {
      return "pb-[112px]";
    } else if (selectedMovieIndex === 4) {
      return "pb-[165px]";
    }
  };

  return (
    <div
      className={`${margin(
        selectedMovieIndex
      )} pt-[55px] flex flex-col gap-[10px] font-[700]`}
    >
      {numbers.map((number, index) => (
        <button
          key={number}
          onClick={() => {
            setSelectedMovieIndex(index);
          }}
          className={`${selectedMovieIndex === index
              ? "text-white text-[16px]"
              : "text-gray-500 text-[12px]"
            }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
