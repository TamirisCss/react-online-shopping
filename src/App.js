import "./style.css/Products.css";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Favorites from "./components/Favorites";
import Cart from "./components/Cart";

const App = () => {
    return (
        <div className="App">
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
        </div>
    );
};

export default App;
