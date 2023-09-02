import { CartProvider, FavoriteProvider } from "./contexts";
import { SearchProvider } from "./contexts/SearchContext";

//Page
import Overview from "./Overview";

const App = () => {
  return (
    <>
      <SearchProvider>
        <CartProvider>
          <FavoriteProvider>
            <Overview />
          </FavoriteProvider>
        </CartProvider>
      </SearchProvider>
    </>
  );
};

export default App;
