import React from 'react';
import UseProducts from '../UseProducts';

const ProductDetails = ({ productId }) => {
  const { product, loading, error } = UseProducts(productId);

  if (loading) return <div className="text-center py-8 text-gray-500">Cargando...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error al obtener los datos</div>;

  return (
    <div className="max-w-8xl mx-auto md:flex md:gap-10">
      
      <div className="md:w-1/2 flex justify-center">
        <img
          src={product.img}
          alt={product.title}
          className="w-full max-w-md rounded-xl shadow-sm object-cover"
        />
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col gap-4 ">
        <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Estilo:</span> {product.style}
        </p>
        <p className="text-lg font-semibold text-black">
          ${product.price}
        </p>

        {product.installments && (
          <p className="text-sm text-blue-600">
            Disponible en <span className='font-bold'>{product.installments}</span> cuotas
          </p>
        )}

        {product.isFreeShipping && (
          <p className="text-green-600 font-semibold">
            ¡Envío gratis!
          </p>
        )}

        {product.sizeList?.length > 0 && (
          <div className="mt-4">
            <p className="font-medium text-sm mb-2">Tallas disponibles:</p>
            <div className="flex flex-wrap gap-2">
              {product.sizeList.map((size, index) => (
                <button
                  key={index}
                  className="px-4 py-1 border border-gray-300 rounded-full text-sm hover:bg-purple-100 transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
