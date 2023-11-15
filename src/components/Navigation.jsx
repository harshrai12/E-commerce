import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import { selectUser } from '../redux/userSlice';

const Navigation = ({ state, setState }) => {
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(logout());
  };

  const handleChange=(e)=>{
    setState(e.target.value)
  }
  console.log(state)

  return (
    <nav>
      <ul>
        <li style={{ color: 'white' }}>
          <Link to="/">Products</Link>
        </li>
        <li>
          <input
            className='searchbox'
            value={state}
            type="text"
            onChange={handleChange}
            placeholder="search"
          />
         
        </li>
        <li>
          <div className="cartinfo">
            {user && (
              <>
                <button onClick={handleLogout}>Logout</button>
                <Link to="/cart">Cart</Link>
                <div className="cartnumber">
                  <p>{cart.length}</p>
                </div>
              </>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
