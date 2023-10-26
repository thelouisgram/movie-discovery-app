/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
const MovieDescription = ({ poster }) => {
  return (
    <div className="md:w-[302px] text-[14px] font-[500] leading-[18px] text-white text-center md:text-left">
      <p className="">
        {poster.overview.length > 250
          ? `${poster.overview.slice(0, 250)}...`
          : poster.overview}
      </p>

    </div>
  );
};

export default MovieDescription;
