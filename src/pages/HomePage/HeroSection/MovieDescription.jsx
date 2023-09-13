/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
const MovieDescription = ({ poster }) => {
  return (
    <div className='md:max-w-[302px] text-[14px] font-[500] leading-[18px] text-white text-center md:text-left'>
      <p className="">{poster.overview}
      </p>
    </div>
  )
}

export default MovieDescription
