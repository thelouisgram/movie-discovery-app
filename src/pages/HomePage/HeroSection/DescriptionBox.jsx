/* eslint-disable react/prop-types */
import MovieDescription from "./MovieDescription";
import Rating from "./Rating";
import Title from "./Title";
import WatchTrailer from "./WatchTrailer";

const DescriptionBox = ({poster}) => {
  return (
    <div className="md:w-[404px] h-auto flex flex-col gap-[16px] text-white items-center md:items-start">
      {/* Title */}
      <Title poster={poster}/>
      {/* Rating */}
      <Rating poster={poster} />
      {/* Description */}
      <MovieDescription poster={poster} />
      { }
      <WatchTrailer />
    </div>
  );
};

export default DescriptionBox;
