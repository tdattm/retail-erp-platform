import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import OrderPage from './pages/OrderPage';
import InventoryPage from './pages/InventoryPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
    <h1> Winmart </h1>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/warehouse" element={<InventoryPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;