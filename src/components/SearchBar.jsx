import React from "react";
import { useState } from "react";

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("");


    const headleInputChange = (event) => {
        setSearchValue(event.target.value);
    };
    const filteredProducts = props.products.filter((product) => {
        return product.title.toLowerCase().includes(searchValue);
    });


    return (
        <div>
            <input
                className="outline w-96 h-10 fill-stone-500 font-bold text-teal-500"
                type="text"
                value={searchValue}
                onChange={headleInputChange}
            />
            {filteredProducts.map((product) => {
                
                return (
                    <div className="flex p-8 flex-wrap py-8 w-72   text-center">
                        <div>
                        <div className="card">
                            {product.title},
                            </div>  
                            <div>{product.price}</div>
                            <img className=" w-20" src={product.image}></img>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default SearchBar;