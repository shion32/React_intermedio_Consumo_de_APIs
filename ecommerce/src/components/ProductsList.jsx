import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductsList = ({ searchTerm, onSelectProducts }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://devsapihub.com/api-ecommerce')
      .then(response => {
        setProducts(Array.isArray(response.data) ? response.data : []);
      })
      .catch(error => console.error(error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-4 py-8  min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Nuestros Productos</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => onSelectProducts(product.id)}
            className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center hover:scale-[1.02] transform"
          >
            <div className="relative w-full h-48">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-cover rounded-lg"
              />
              {product.isFreeShipping === true && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                  Envío GRATIS
                </span>
              )}
            </div>
            <div className="mt-3 text-center">
              <p className="text-sm font-semibold text-gray-800">{product.title}</p>
              <p className="text-purple-600 font-bold mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;