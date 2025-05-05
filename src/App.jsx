import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Search from './pages/Search';

function App() {
  // 1️⃣ Load from localStorage on initial load
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");

  // 2️⃣ Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <HomePage
            cart={cart}
            setCart={setCart}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        } />
        <Route path="/cart" element={
          <CartPage
            cart={cart}
            setCart={setCart}
          />
        } />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
