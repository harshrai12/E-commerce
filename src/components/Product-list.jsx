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
    <div className="container px-40 mt-10">
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          <p className="mr-2">Category:</p>
          <select
            className="border p-2 rounded"
            onChange={handleChange}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
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

      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(filteredAndPagedProducts.length / productsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-2 rounded ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;



