import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLoading } from "../hooks/useLoading";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  const { startLoading, stopLoading } = useLoading();

  const fetchData = async () => {
    try {
      startLoading();
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    } catch (error) {
      console.error("Server error:", error);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue, data }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
