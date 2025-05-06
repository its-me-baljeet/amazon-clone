import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const Searchbar = ({ }) => {
    return (
        <div className="flex flex-grow text-black">
            <select className="rounded-l-md w-[60px] px-2 text-sm bg-gray-100 border-r">
                <option value="all">All</option>
            </select>
            <input
                type="text"
                className="flex-grow p-3"
                placeholder="Search Amazon.in"
            />
            <button className="bg-orange-300 rounded-r-md px-4 py-3"
            ><IoSearch className="scale-[1.7]" /></button>
        </div>
    );
};

export default Searchbar;
