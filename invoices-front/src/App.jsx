import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import React from "react";
import Inicio from "./components/Inicio";
import Facturas from "./components/Facturas";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="nav-items">
        <Link to="/">Inicio</Link> | <Link to="/facturas">Facturas</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/facturas" element={<Facturas />} />
      </Routes>
    </Router>
  );
}

export default App;
