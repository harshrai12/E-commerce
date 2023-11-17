import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(updateQuantity({ productId, quantity: 1 }));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(updateQuantity({ productId, quantity: -1 }));
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>
      <div className="grid gap-4">
        {cart.map((product) => (
          <div key={product.id} className="grid grid-cols-4 gap-4 items-center">
            <img src={product.image} alt={product.name} className="col-span-1 rounded" />
            <div className="col-span-2">
              <p className="text-lg font-bold">{product.name}</p>
              <p className="text-gray-600">Price: Rs {product.price}</p>
              <p className="text-gray-600">Quantity: {product.quantity}</p>
            </div>
            <div className="col-span-1 flex items-center justify-end">
              <button
                onClick={() => handleIncreaseQuantity(product.id)}
                className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
              >
                +
              </button>
              <button
                onClick={() => handleDecreaseQuantity(product.id)}
                className="bg-red-500 text-white px-2 py-1 rounded mr-2"
              >
                -
              </button>
              <button
                onClick={() => handleRemove(product.id)}
                className="bg-gray-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-xl font-bold">
        <p>Total Amount: Rs {totalAmount}</p>
      </div>
    </div>
  );
};

export default Cart;








