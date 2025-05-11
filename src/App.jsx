import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Search from './pages/SearchPage';
import SignUp from './pages/SignUp';
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext'; // 👈 new import

const App = () => {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
};

export default App;
