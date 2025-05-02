import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./styles/styles.css";
import "./styles/reset.css";
import { BrowserRouter } from "react-router-dom";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

const footer = document.querySelector("footer");
const currentYear = new Date().getFullYear();
footer.textContent = `© My Mind at Work ${currentYear}`;

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
