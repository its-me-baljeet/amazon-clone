const FilterSidebar = ({
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    rating,
    setRating,
    resetFilters
}) => {
    return (
        <div className="mr-5 flex flex-col gap-5 bg-white p-5 rounded-md">
            <h1 className="text-2xl font-semibold">Filter Products</h1>

            {/* Price Filter */}
            <div className="flex flex-col gap-2">
                <p>Price</p>
                <div className="flex gap-2 items-center">
                    <input
                        type="number"
                        placeholder="min"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="p-2 border-gray-600 border-2 rounded-md"
                    />
                    to
                    <input
                        type="number"
                        placeholder="max"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="p-2 border-gray-600 border-2 rounded-md"
                    />
                </div>
            </div>

            {/* Rating Filter */}
            <div className="flex flex-col gap-2">
                <p>Customer Reviews</p>
                {[4, 3, 2, 1].map((r) => (
                    <label key={r} className="cursor-pointer">
                        <input
                            type="radio"
                            name="rating"
                            value={r}
                            checked={Number(rating) === r}
                            onChange={(e) => setRating(Number(e.target.value))}
                        />
                        {" "}{"⭐".repeat(r)} & up
                    </label>
                ))}
            </div>

            {/* Reset Button */}
            <button
                onClick={resetFilters}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
                Reset Filters
            </button>
        </div>
    );
};

export default FilterSidebar;
