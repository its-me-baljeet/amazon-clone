const Searchbar = ({ setSearchTerm }) => {
    return (
        <div className="flex flex-grow text-black">
            <select className="rounded-l-md w-[60px] px-2 text-sm bg-gray-100 border-r">
                <option value="all">All</option>
            </select>
            <input
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow px-2"
                placeholder="Search Amazon.in"
            />
            <button className="bg-orange-300 rounded-r-md w-[50px] h-[40px] bg-no-repeat bg-[url('/logos.png')] scale-[60%]"
                style={{ backgroundPosition: "-15px -580px" }}
            />
        </div>
    );
};

export default Searchbar;
