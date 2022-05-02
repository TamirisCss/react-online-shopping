import "./style.css/App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";




const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Products className= "card"/>
    </div>
  );
};

export default App;
