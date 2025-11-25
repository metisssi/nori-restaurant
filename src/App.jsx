import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Footer from "./components/Footer.jsx";
import { LanguageProvider } from "./context/Languagecontext.jsx";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
};

export default App;