// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Alleat from "./pages/Alleat.jsx"
import Event from "./pages/Event.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";


const App = () => {
  return (
    <Router>
   
        <Navbar />
        
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/alleat" element={<Alleat/>}/>
            <Route path="/menu" element={<Menu />} />
            <Route path="/event" element={<Event />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact/>}/> */}
          </Routes>

        <Footer/>
        
    </Router>
  );
};

export default App;
