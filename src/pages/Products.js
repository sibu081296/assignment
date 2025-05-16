import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <Header />
      <h2 style={{ padding: 20 }}>Products</h2>
      <div>
        {products.map((product) => (
          <div key={product.product_id} style={{ margin: '10px 0' }}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;