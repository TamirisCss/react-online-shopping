import "./style.css/Products.css";
import { CartProvider } from "./CartContext";
import Overview from "./Overview";

const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <Overview />
      </CartProvider>
    </div>
  );
};

export default App;
