import React, { useState } from 'react';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/navbar';
import { FiChevronLeft } from "react-icons/fi";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // <- NUEVO estado

  return (
    <div className="min-h-screen">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      {!selectedProduct ? (
        <ProductsList 
          onSelectProducts={setSelectedProduct} 
          searchTerm={searchTerm} // <- se pasa a ProductsList
        />
      ) : (
        <div className="pt-4">
          <button
            onClick={() => setSelectedProduct(null)}
            className="flex items-center text-sm text-purple-600 hover:text-purple-800 transition font-semibold mb-4"
          >
            <FiChevronLeft className="text-4xl" />
            Volver a la lista
          </button>

          <ProductDetails productId={selectedProduct} />
        </div>
      )}
    </div>
  );
}

export default App;
