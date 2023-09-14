// Constants for navigation links
export const links = [
  {
    text: "Home",
    url: "/",
    icon: "/images/Home.svg",
  },
  {
    text: "Movies",
    icon: "/images/Movie-projector.svg",
  },
  {
    text: "TV Series",
    icon: "/images/Tv.svg",
  },
  {
    text: "Upcoming",
    icon: "/images/Calendar.svg",
  },
];

/**
 * Function to extract a user-friendly message from an error response.
 **/
export const showMessage = (message) => {
  if (typeof message === "object") {
    return message.status_message;
  } else {
    return message;
  }
};



export const handleSwipe = (event, selectedMovieIndex, setSelectedMovieIndex, movies) => {
  const startX = event.touches[0].clientX;
  const endX = event.changedTouches[0].clientX;
  const threshold = 50; // Adjust the threshold as needed

  if (startX - endX > threshold) {
    // Swipe right (decrease index)
    if (selectedMovieIndex > 0) {
      setSelectedMovieIndex(selectedMovieIndex - 1);
    }
  } else if (endX - startX > threshold) {
    // Swipe left (increase index)
    if (selectedMovieIndex < movies.length - 1) {
      setSelectedMovieIndex(selectedMovieIndex + 1);
    }
  }
};

// Documented the constants and showMessage function for clarity.
