import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector(state => state.cart.cart);

  return (
    <div className="cart-container">
   
    <h1 className="cart-title">Cart</h1>

      
      <ul className="cart-list">
        {cart.map(product => (
          <li key={product.id} className="cart-item">
            <img src={product.image} alt={product.name} className="cart-image" />
            {product.name} - Rs{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;


