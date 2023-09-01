import { CartProvider, FavoriteProvider } from "./contexts";

//Page
import Overview from "./Overview";

const App = () => {
  return (
    <div>
      <CartProvider>
        <FavoriteProvider>
          <Overview />
        </FavoriteProvider>
      </CartProvider>
    </div>
  );
};

export default App;
