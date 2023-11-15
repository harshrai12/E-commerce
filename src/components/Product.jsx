
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import  {message, notification}  from 'antd';

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
      message: 'added to cart ❤️'
    })

  };
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Rs:{price}</p>
      <div className="buttons">
      <button onClick={handleAddToCart}>Order</button>
      <Link to={`/product/${id}`}>
      <button>Read more</button>
    </Link>
      
      </div>
      
    </div>
  );
};

export default Product;
