import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Favorites from "./components/Favorites";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

export default function Overview() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Products />}></Route>
                    <Route
                        path="/productDetails/:id"
                        element={<ProductDetails />}
                    ></Route>
                    <Route path="/favorites" element={<Favorites />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                </Routes>
            </Router>
        </>
    );
}
