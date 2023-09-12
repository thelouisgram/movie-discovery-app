import MovieDescription from "./MovieDescription";
import Rating from "./Rating";
import Title from "./Title";
import WatchTrailer from "./WatchTrailer";

const DescriptionBox = () => {
  return (
    <div className="w-[404px] h-auto flex flex-col gap-[16px] text-white">
      {/* Title */}
      <Title />
      {/* Rating */}
      <Rating />
      {/* Description */}
      <MovieDescription />
      {/* Watch Trailer Button */}
      <WatchTrailer />
    </div>
  );
};

export default DescriptionBox;
