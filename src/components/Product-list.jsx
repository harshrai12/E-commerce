import React, { useState } from 'react';
import Product from './Product';

const ProductList = ({ state, products }) => {
  const categories = ["", "phones", "laptops", "watches"];
  const [category, setCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const handleChange = (e) => {
    setCategory(e.target.value);
    setCurrentPage(1); 
  };

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  const filteredAndPagedProducts = filteredProducts
    .filter((item) => item.name.toLowerCase().includes(state.toLowerCase()));

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredAndPagedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="pagename">
      <div className="filter">
        <p>Category</p>
        <select onChange={handleChange}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="product-list">
        {currentProducts.map((product) => (
          <Product
            key={product.id} 
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredAndPagedProducts.length / productsPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;


