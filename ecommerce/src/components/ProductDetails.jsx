import React from 'react';
import UseProducts from '../UseProducts'; 
import '../App.css'; 

const ProductDetails = ({ productId }) => {
  const { product, loading, error } = UseProducts(productId);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al obtener los datos</p>;

  return (
    <div className="contenedor">
      <h2>{product.title}</h2>
      <img src={product.img} alt={product.img} />
      <p>Decripcion: {product.description}</p>
      <p>Estilo: {product.style}</p>
      <p>precio: {product.price}</p>
    </div>
  );
};

export default ProductDetails;  