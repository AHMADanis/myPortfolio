import React from "react";
import GlobalStyle from './globalStyles'
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home'
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Footer />
      <Contact />
    </Router>
  );
}

export default App;
