import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Favorites from "./components/Favorites";

export default function Overview() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Products />}></Route>
                <Route
                    path="/productDetails/:id"
                    element={<ProductDetails />}
                ></Route>
                <Route path="/favorites" element={<Favorites />}></Route>
            </Routes>
        </Router>
    );
}
