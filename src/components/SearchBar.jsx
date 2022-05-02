import React from "react";
import { useState } from "react";

const SearchBar = ({ onChange }) => {
    return (
        <div>
            <input
                className="outline w-96 h-10 fill-stone-500 font-bold text-teal-500"
                type="text"
                onChange={onChange}
            />
        </div>
    );
};
export default SearchBar;