import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import products from './Products'




const ProductDetails = () => {

  const { id } = useParams()

  const [idData, setIdData] = useState();

  useEffect(() => {
    const getItem = async (id) => {
      console.log(id)
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      console.log(response)
      const data = await response.json();
      setIdData(data);
      console.log(data)
     
    };
    getItem(id);
    console.log(getItem)
  }, []);



  return (<div><h1>{idData && idData.title}</h1></div>)
};

export default ProductDetails;
