import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onChange }) => {
    return (
        <div className="search-input">
            <div className="search-icon"><SearchIcon /></div>
            <input
                placeholder="Search"
                className="search"
                type="text"
                onChange={onChange}
            />
        </div>
    );
};
export default SearchBar;