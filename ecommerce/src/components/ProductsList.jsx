import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductsList = ({ onSelectProducts }) => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://devsapihub.com/api-ecommerce')
      .then(response => {
        console.log(response.data);
        setProducts(Array.isArray(response.data) ? response.data : []);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Eccomerce</h1>
      <div className="flex justify-center">
        {Products.map((product) => (
          <div
            key={product.id}
            onClick={() => onSelectProducts(product.id)}
            className="m-2 cursor-pointer flex flex-col items-center"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-[150px] h-[150px] object-cover rounded shadow"
            />
            <p className="mt-2 text-center">{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;