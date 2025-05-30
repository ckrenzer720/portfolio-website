import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css"; // Adjust path if needed

const navLinks = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        C
      </Link>
      <nav className="header-nav">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a href="contact" className="header-cta">
        Get in Touch
      </a>
      <button
        className="hamburger"
        aria-label="Open menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button
          className="mobile-menu-close"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="header-cta"
          onClick={() => setMenuOpen(false)}
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}
