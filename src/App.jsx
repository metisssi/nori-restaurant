import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Footer from "./components/Footer.jsx";
import Admin from "./pages/Admin.jsx";
import { LanguageProvider } from "./context/Languagecontext.jsx";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          {/* Admin route - bez Navbar a Footer */}
          <Route path="/admin" element={<Admin />} />

          {/* Public routes */}
          <Route path="/*" element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;