import React, { Suspense, lazy } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import ErrorBoundary from "./ErrorBoundary";
import LoadingSpinner from "./LoadingSpinner";
import Footer from "./Footer";
import Header from "./Header";
import "../styles/styles.css";
import "../styles/variables.css";

function App() {
  return (
    <div className="app-container">
      <Helmet>
        <title>Conner Krenzer | Full Stack Developer</title>
        <meta
          name="description"
          content="Welcome to my portfolio website showcasing my work as a developer and designer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Helmet>
      <main className="main-content" role="main">
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Header />
          </Suspense>
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  );
}

export default App;
