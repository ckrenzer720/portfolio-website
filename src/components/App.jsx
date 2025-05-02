import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import "../styles/styles.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div id="root">
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Get in Touch</Link>
        <Link to="/projects">Projects</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}
export default App;
