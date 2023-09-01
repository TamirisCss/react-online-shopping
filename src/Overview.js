import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Products from "./components/Products/Products";

import {
  Cart,
  Categories,
  Category,
  Favorites,
  Footer,
  Navbar,
  ProductDetails,
} from "./components";

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
