import "./App.css";
import Navbar from "./component/Navbar";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Service from "./pages/Service.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <About />
      <Product />
    </>
  );
}

export default App;
