import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductCard from "./ProductCard";

const Products = () => {
    const { products, loading } = useContext(ProductsContext);

    if (loading) return <p>Loading products...</p>;

    return (
        <div className="px-4 py-8 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Explore Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
