import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";

const Searchbar = ({ }) => {

    const { products, loading } = useContext(ProductsContext);

    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        if (term.length > 0) {
            const matches = products.filter((item) =>
                item.title.toLowerCase().includes(term.toLowerCase())
            );
            setSuggestions(matches.slice(0, 6));
        } else {
            setSuggestions([]);
        }
    };

    const handleSearch = () => {
        if (searchTerm.trim() !== "") {
            navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (title) => {
        navigate(`/search?q=${encodeURIComponent(title)}`);
        setSearchTerm(title);
        setSuggestions([]);
    };

    return (
        <div className="relative flex flex-grow text-black">
            <select className="rounded-l-md w-[60px] px-2 text-sm bg-gray-100 border-r">
                <option value="all">All</option>
            </select>
            <input
                type="text"
                className="flex-grow px-2"
                placeholder="Search Amazon.in"
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button className="bg-orange-300 rounded-r-md px-4 py-3"
            ><IoSearch className="scale-[1.7]" onClick={handleSearch} /></button>
            {suggestions?.length > 0 && (
                <ul className="absolute top-full mt-1 left-0 right-0 bg-white z-10 border rounded-md shadow-md text-sm">
                    {suggestions.map((item) => (
                        <li
                            key={item.id}
                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => handleSuggestionClick(item.title)}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Searchbar;
