import axios from "axios";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import FavoriteIcon from "@mui/icons-material/Favorite";

const Products = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [id, setId] = useState([1]);

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
            <div className="cardContainer">
                {data.filter(filterSearch).map((product) => (
                    <div key={product.id} className="productItem">
                        <div className="iconsContainer">
                            <IconButton aria-label="add to favorites">
                                <FavoriteBorderIcon />
                            </IconButton>
                            <IconButton aria-label="add to cart">
                                <AddShoppingCartIcon />
                            </IconButton>
                        </div>
                        <div className="imageContainer">
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
                        <Link to={`/productDetails`}>
                            <Button size="small">More details</Button>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Products;
