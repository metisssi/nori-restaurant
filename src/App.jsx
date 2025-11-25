// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";

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
