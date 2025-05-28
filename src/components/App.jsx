import React, { Suspense, lazy } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import ErrorBoundary from "./ErrorBoundary";
import LoadingSpinner from "./LoadingSpinner";
import Footer from "./Footer";
import "../styles/styles.css";
import "../styles/variables.css";

// Lazy load components
const Home = lazy(() => import("./Home"));
const Contact = lazy(() => import("./Contact"));
const Projects = lazy(() => import("./Projects"));

function App() {
  return (
    <div className="app-container">
      <Helmet>
        <title>Your Name | Full Stack Developer</title>
        <meta
          name="description"
          content="Welcome to my portfolio website showcasing my work as a developer and designer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Helmet>

      <nav className="nav-links" role="navigation">
        <NavLink to="/" end aria-label="Home">
          Home
        </NavLink>
        <NavLink to="/contact" aria-label="Contact">
          Get in Touch
        </NavLink>
        <NavLink to="/projects" aria-label="Projects">
          Projects
        </NavLink>
      </nav>

      <main className="main-content" role="main">
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  );
}

export default App;
