/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { links } from "../../../utils";

/**
 * Links component for displaying a list of navigation links.
 */
const Links = ({ page }) => {
    if (!page) {
        page = 0;
    }

    return (
        <div className="font-[600] text-[#333] mt-16 mb-4 w-full">
            {links.map((link, index) => (
                <Link
                    to={link.url}
                    key={index}
                    className={`flex items-center gap-4 h-[86px] w-full pl-[42px] hover:bg-rose-100 hover:text-rose700 cursor-pointer 
          ${index === page ? "bg-rose-100 text-rose700" : ""}`}
                >
                    <div className="w-full flex pl-[24px] justify-start gap-2">
                        <img src={link.icon} alt={`${link.text} icon`} />
                        <h3 className="">{link.text}</h3>
                    </div>
                    {index === page && <div className="bg-rose700 w-[4px] h-full" />}
                </Link>
            ))}
        </div>
    );
};

export default Links;
