import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

/**
 * Error component for displaying an error message or content.
 */
const Error = () => {
  return (
    <div className="w-full h-[100dvh]">
      <div className="md:w-full w-full xl:w-[1440px] mx-auto border-b-[1px] md:border-none border-gray-300">
        {/* Navbar */}
        <Navbar colors={"border-gray-400 text-gray-400 placeholder:text-gray-400"} />
      </div>
      <div className="h-screen-16 w-full flex flex-col items-center justify-center gap-2 py-16 flex-wrap">
        <div className="w-[100px] h-auto">
          <img src='/images/error.svg' alt='Error Icon' className="w-full h-full" />
        </div>
        <div className="flex gap-2 items-center">
          <h1 className="text-[22px] font-[900] text-gray-900">Error404: </h1>
          <p className="text-[18px] font-[600] text-gray-900">
            Page Not Found!
          </p>
        </div>
        <Link
          to='/'
          className="rounded-full px-4 py-2 bg-rose-200 text-rose700 font-[600] text-[18px] outline-none"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default Error;
