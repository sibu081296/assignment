import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
const [product, setProduct] = useState({});
  const { id } = useParams();
 

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);


  return (
    <div>
      <div style={{ padding: 20 }}>
        <h2>{product.title}</h2>
        <p>Slug: {product.slug}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;