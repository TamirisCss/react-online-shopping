import axios from "axios";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filterSearch = (product) => {
    return product.title.toLowerCase().includes(searchValue);
  };

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
    <>
      {hasProducts ? (
        <SearchBar onChange={onSearchChange} />
      ) : (
        loading && <h1>Loading...</h1>
      )}
      <div className="card">
        {data.filter(filterSearch).map((product) => (
          <div key={product.id} className="productItem">
            <div>
              <img
                src={product.image}
                alt="#"
                className="imageProduct "
              />
            </div>
            <div className="card-info">
              <h6>{product.title}</h6>
              <h6>{`Price: ${product.price}`}</h6>
              <h6>{`Category: ${product.category}`}</h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
