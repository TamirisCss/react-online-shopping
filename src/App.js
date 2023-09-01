import { CartProvider } from "./CartContext";
import { FavoriteProvide } from "./FavoriteContext";

//Page
import Overview from "./Overview";

const App = () => {
  return (
    <div>
      <CartProvider>
        <FavoriteProvide>
          <Overview />
        </FavoriteProvide>
      </CartProvider>
    </div>
  );
};

export default App;
