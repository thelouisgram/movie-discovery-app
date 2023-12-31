/**
 * Loader component for displaying a loading animation.
 */
const Loader = () => {
  return (
    <section className='w-full md:w-[1100px] mx-auto h-[320px] flex items-center justify-center'>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </section>
  );
};

export default Loader;
