import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import ProductDetailPage from './pages/ProductDetail';
import { isAuthenticated } from '../src/auth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated() ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={isAuthenticated() ? <ProductsPage /> : <Navigate to="/login" />} />
        <Route path="/products/:id" element={isAuthenticated() ? <ProductDetailPage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;