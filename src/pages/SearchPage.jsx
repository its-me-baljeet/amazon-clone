import { Link, useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterSidebar from "../components/FilterSidebar";
import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";

const SearchPage = () => {

    const { products, loading } = useContext(ProductsContext);
    const [sortOption, setSortOption] = useState("relevance");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [rating, setRating] = useState(0); // Default to 0 so all show

    const resetFilters = () => {
        setMinPrice("");
        setMaxPrice("");
        setRating(0);
    };



    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams?.get("q")?.toLowerCase() || [];

    function handleSort(e) {
        setSortOption(e.target.value);
    }


    const filteredProducts = products?.filter((product) => {
        const matchesQuery = product?.title.toLowerCase().includes(query);
        const price = product.price;
        const productRating = product.rating || 0;

        const matchesMin = !minPrice || price >= Number(minPrice);
        const matchesMax = !maxPrice || price <= Number(maxPrice);
        const matchesRating = productRating >= rating;

        return matchesQuery && matchesMin && matchesMax && matchesRating;
    });

    const sortedProducts = [...filteredProducts]?.sort((a, b) => {
        if (sortOption === "price-low") return a.price - b.price;
        if (sortOption === "price-high") return b.price - a.price;
        return 0; // "relevance" or default
    });


    console.log(filteredProducts)

    return (
        <div>
            <Navbar />
            <div className="px-4 py-8 min-h-screen flex bg-gray-300">
                <FilterSidebar
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    setMinPrice={setMinPrice}
                    setMaxPrice={setMaxPrice}
                    rating={rating}
                    setRating={setRating}
                    resetFilters={resetFilters}
                />


                <div>
                    <div className="flex justify-between items-start">
                        <h1 className="text-2xl font-bold mb-6">
                            Results for: "<span className="text-blue-600">{query}</span>"
                        </h1>
                        <select
                            name="sort"
                            className="p-1 rounded-md"
                            onChange={handleSort}
                            value={sortOption}
                        >
                            <option value="relevance">Relevance</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                        </select>

                    </div>
                    {
                        loading && <p>Loading products...</p>
                    }
                    {!loading && sortedProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {sortedProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        !loading && <p>No products found.</p>
                    )}

                </div>
            </div>
            <Footer />
        </div>
    )
}
export default SearchPage;