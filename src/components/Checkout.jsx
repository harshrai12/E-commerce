import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handlePayment = () => {
    
    alert('Payment Successful!'); 
   
    navigate('/');
  };

  return (
    <div className="max-w-7xl mx-auto p-8 flex">
      
      <div className="w-1/2 pr-8">
      <h2 className="text-xl font-bold mb-4">Your Details</h2>
      <form>
        <div className="mb-4 flex items-center">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600 w-32">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md flex-grow"
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600 w-32">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md flex-grow"
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="address" className="block text-sm font-medium text-gray-600 w-32">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={userDetails.address}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 p-2 border rounded-md flex-grow"
            required
          ></textarea>
        </div>
        <button
          onClick={handlePayment}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        >
          Make Payment
        </button>
      </form>
    </div>
    


      
      <div className="w-1/2 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4 mt-4">Order Summary</h2>
      <div className="grid gap-4">
        {cart.map((product) => (
          <div key={product.id} className="flex flex-col items-center gap-2">
            <p className="text-lg font-bold">{product.name}</p>
            <p className="text-gray-600">Quantity: {product.quantity}</p>
           
          </div>
        ))}
      </div>
      <p className="mt-4">Total Amount: Rs {totalAmount}</p>
    </div>
    
    </div>
  );
};

export default Checkout;







