import React, { useState,useEffect } from 'react'
import axios from 'axios';

const UseProducts = (id) => {
    const [product,setProduct]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        const FetchCharacter=async()=>{
            try {
                const response=await axios.get(
                    `https://devsapihub.com/api-ecommerce/product/${id}`
                )
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        FetchCharacter();
    },[id]);
  return {product,loading,error};
}

export default UseProducts;