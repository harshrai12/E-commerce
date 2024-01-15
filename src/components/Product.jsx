import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import { notification } from 'antd';

const Product = ({ id, name, price, image }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: id,
        name: name,
        price: price,
        image: image
      })
    );
    notification.success({
      message: 'Added to cart ❤️'
    });
  };

  return (
    <div className=" flex flex-col justify-between " >
      <div className=''>
      <div className="h-40 " >
       <img
      src={image}
      alt={name}
      className='w-40'
    /></div>
       <div className="mt-20"> 
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <p className="text-gray-700">Rs:{price}</p>
      
      <div className="flex-shrink-0">
    
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
          onClick={handleAddToCart}
        >
          Order
        </button>
        <Link to={`/product/${id}`}>
          <button className="mt-2 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline-gray">
            Read more
          </button>
        </Link>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Product;





