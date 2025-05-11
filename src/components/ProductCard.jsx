// src/components/ProductCard.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
    const { cart, setCart } = useContext(CartContext);

    const handleAddToCart = () => {
        const alreadyInCart = cart.find((item) => item.id === product.id);
        if (alreadyInCart) {
            const updatedCart = cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };
    console.log(product);


    return (
        <div className="bg-white rounded-md shadow-md p-4 flex flex-col justify-between">
            <img src={product.images[0]} alt={product.title} className="h-40 object-contain mb-4" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="font-bold text-green-700">₹{product.price}</p>
            <button
                onClick={handleAddToCart}
                className="mt-2 p-2 bg-yellow-400 hover:bg-yellow-500 text-sm rounded-md"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
