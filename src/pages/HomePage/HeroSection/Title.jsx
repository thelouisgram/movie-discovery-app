/* eslint-disable react/prop-types */
const Title = ({poster}) => {
  return (
    <>
      <h1 className="text-[40px] md:text-[48px] font-[700] leading-[48px] md:leading-[56px] ">
        {poster.title}
      </h1>
    </>
  );
};

export default Title;
