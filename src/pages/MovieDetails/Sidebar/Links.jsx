import { Link } from "react-router-dom";

// Define a functional component called Links
const Links = () => {
    return (
        <div className="font-[600] text-[#333] mt-16 mb-4 w-full">
            {/* Home Link */}
            <Link
                to="/" // Specifies the URL path to navigate to when clicked
                className="flex items-center gap-4  h-[86px] w-full pl-[42px] hover:bg-rose-100 hover:text-rose700"
            >
                <img src="/images/Home.svg" alt="Home icon" />
                <h3 className="">Home</h3>
            </Link>

            {/* Movies Link */}
            <div className="flex  h-[86px] w-full pl-[42px] bg-rose-100 text-rose700">
                <div className="flex w-full items-center gap-4">
                    <img src="/images/Movie-projector.svg" alt="Movies Projector icon" />
                    <h3 className="">Movies</h3>
                </div>
                <div className="w-[4px] h-full bg-rose700" />
            </div>

            {/* TV Series Link */}
            <div className="flex items-center gap-4 h-[86px] w-full pl-[42px] hover:bg-rose-100 hover:text-rose700 cursor-pointer">
                <img src="/images/Tv.svg" alt="TV icon" />
                <h3 className="">TV Series</h3>
            </div>

            {/* Upcoming Link */}
            <div className="flex items-center gap-4 h-[86px] w-full pl-[42px] hover:bg-rose-100 hover:text-rose700 cursor-pointer">
                <img src="/images/Calendar.svg" alt="Calendar icon" />
                <h3 className="">Upcoming</h3>
            </div>
        </div>
    );
};

export default Links; 
