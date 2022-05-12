import "./style.css/Products.css";
import { CartProvider } from "./CartContext";
import Overview from "./Overview";
import { FavoriteProvide } from "./FavoriteContext";

const App = () => {
    return (
        <div className="App">
            <CartProvider>
                <FavoriteProvide>
                    <Overview />
                </FavoriteProvide>
            </CartProvider>
        </div>
    );
};

export default App;
