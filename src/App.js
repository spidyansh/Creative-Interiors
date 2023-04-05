import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Category from "./Components/Category";
import Choose from "./Components/Choose";
import Clients from "./Components/Clients";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Quote from "./Components/Quote";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Category />
        <Choose />
        <Portfolio />
        <Clients />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
