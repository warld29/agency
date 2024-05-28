import "./App.css";
import Navbar from "./component/Navbar";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Home from "./pages/Home.jsx";
import Newsletter from "./pages/Newsletter.jsx";
import Product from "./pages/Product.jsx";
import Service from "./pages/Service.jsx";
import MyFooter from "./pages/MyFooter.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <About />
      <Product />
      <Blog />
      <Newsletter />
      <MyFooter />
    </>
  );
}

export default App;
