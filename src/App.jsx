import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Search from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <HomePage />
        } />
        {/* <Route path="/cart" element={
          <CartPage
            cart={cart}
            setCart={setCart}
          />
        } />
        <Route path="/search" element={<Search />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
