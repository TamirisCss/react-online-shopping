import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";

import Card from "./Card";

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
        loading && <h1><CircularProgress /></h1>
      )}
      <div className="cardContainer">
        {data
          .filter(filterSearch)
          .map(({ id, image, title, price, category }) => (
            <Card
              id={id}
              image={image}
              title={title}
              price={price}
              category={category}
            />
          ))}
      </div>
    </>
  );
};

export default Products;
