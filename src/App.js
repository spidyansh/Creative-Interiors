import './App.css';
import Category from './Components/Category';
import Choose from './Components/Choose';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Category/>
    <Choose/>
    <Portfolio/>
    <Clients/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
