import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
