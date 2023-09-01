import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Favorites from "./components/Favorites";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Category from "./components/Category";
import Categories from "./components/Categories";
import { Cart } from "./components";

export default function Overview() {
  return (
    <>
      <Router>
        <Navbar />
        <Categories />
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/Category/:type" element={<Category />}></Route>
          <Route
            path="/productDetails/:id"
            element={<ProductDetails />}
          ></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
