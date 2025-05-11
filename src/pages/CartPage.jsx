const CartPage = ({ cart, setCart }) => {
    if (cart?.length === 0) {
        return (
            <div className="min-h-screen bg-[#EAEDED] flex justify-center items-center">
                <p className="text-lg">Your cart is empty.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#EAEDED] p-6">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {
                !cart && <p>Cart is empty</p>
            }
            {cart?.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded shadow-md mb-4">
                    <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="text-green-600">₹{item.price}</p>
                </div>
            ))}
        </div>
    );
};
export default CartPage;