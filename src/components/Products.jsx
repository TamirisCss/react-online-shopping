import axios from "axios";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar"


const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);


  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  const hasProducts = data.length > 0;

  return (
    <div>
      {hasProducts ? <SearchBar products={data}/> : loading && <h1>Loading...</h1> }
      {data.map((product) => (
        <div key={product.id} className="card">
          <div>
            <img src={product.image} alt="#" />
          </div>
          <div className="card-info">
            <h6>{product.title}</h6>
            <h6>{`Price: ${product.price}`}</h6>
            <h6>{`Category: ${product.category}`}</h6>
          </div>
        </div>
      ))}
      
     
    </div>
  );

  
};

export default Products;
