import React, { useState,} from 'react';
import ProductList from "./components/Product-list";
import data from './components/data.json';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Carts from './components/Carts';
import Banner from './components/Banner';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Product_read from './components/product_read';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userSlice';
import Warning from './components/Warning';

const App = () => {
  const [state, setState] = useState(''); 
  console.log(state)
  const user = useSelector(selectUser);
  console.log(state);
  return (
    <BrowserRouter>
      <div className="app">
      <div>
    <Navigation state={state} setState={setState} />
    <Banner />
    <Routes>
        {!user ? (
            <>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Warning/>} />
                <Route path="/cart" element={<Warning/>} />
                
            </>
        ) : (
            <>
            <Route path="/" element={<ProductList state={state} products={data} />} />
            <Route path="/cart" element={<Carts />} />
            <Route path="/product/:id" element={<Product_read />} />
            </>
        )}
    </Routes>
</div>
        <div></div>
      </div>
    </BrowserRouter>
  );
};

export default App;