// swipeUtils.js

export const handleSwipe = (
  direction,
  selectedMovieIndex,
  setSelectedMovieIndex
) => {
  if (direction === 'left') {
    setSelectedMovieIndex((prevIndex) =>
      prevIndex === 0 ? 4 : prevIndex - 1
    );
  } else if (direction === 'right') {
    setSelectedMovieIndex((prevIndex) =>
      prevIndex === 4 ? 0 : prevIndex + 1
    );
  }
};
