import Navbar from "../../../components/Navbar/Navbar";
import DescriptionBox from "./DescriptionBox";

const Hero = () => {
  return (
    <div className="lg:w-full hero h-[600px] text-white xl:w-[1440px] xl:mx-auto">
      {/* Navbar */}
      <Navbar />
      {/* Description box */}
      <section className="md:w-[1100px] mx-auto h-[520px] flex flex-col justify-center">
        <DescriptionBox />
      </section>
    </div>
  );
};

export default Hero;
