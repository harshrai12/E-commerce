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

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <nav className="bg-blue-500 p-4">
      {user && (
        <ul className="flex items-center justify-between">
          <li>
            <Link to="/" className="text-white">
              Products
            </Link>
          </li>
          <li>
            <input
              className="searchbox border rounded  py-1"
              value={state}
              type="text"
              onChange={handleChange}
              placeholder="Search"
            />
          </li>
          <li className="flex items-center">
            <div className="cartinfo">
              <button
                onClick={handleLogout}
                className="text-white ml-4 hover:underline"
              >
                Logout
              </button>
              <Link to="/cart" className="text-white ml-4 hover:underline">
                Cart
              </Link>
              <div className="cartnumber bg-gray-800 text-white rounded-full h-6 w-6 flex items-center justify-center ml-2">
                <p>{cart.length}</p>
              </div>
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;

