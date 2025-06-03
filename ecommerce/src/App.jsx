import React, { useState } from 'react'
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import './App.css'

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    
      <div className='App'>
        {!selectedProduct ?(
          <ProductsList onSelectProducts={setSelectedProduct}/>
        ):(
          <div>
            <button className='btnvolver' onClick={()=> setSelectedProduct(null)}>volver a la lista</button>
            <ProductDetails productId={selectedProduct}/>
          </div>
        )}
      </div>


  );
}

export default App;
