import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data.json';


const ProductRead = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  return (
    <div className="product-details">
      <h2>Product Details</h2>
      <div className="detailsdiv">
      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      </div>
      <div className="imagediv">
      <img src={product.image} alt={product.name} />
      </div>
     <div className="detailsdiv">
     <p><strong>Description:</strong> {product.description}</p>
     <p><strong>Rating:</strong> {product.rating}</p>
     </div>
    </div>
  );
};

export default ProductRead;



