import React from "react";
import GlobalStyle from './components/common/globalStyles'
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home'
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
