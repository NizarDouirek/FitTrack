// Header.jsx
import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="logo">
        <img src="logoHe.webp" alt="Logo" />

        {/* bouton burger visible seulement en mobile */}
        <div 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </div>
      </div>

      <div className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <nav>
          <ul>
            <li><Link to="/home">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/bmi">BMI Calculateur</Link></li>
            <li className="dropdown">
              <span className="dropbtn">
                Fonctionnalités <span className="arrow">▼</span>
              </span>
              <div className="dropdown-content">
                <Link to="/Blog">Blog</Link>
                <Link to="/Service">Service</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/team">Team</Link>
                
                <Link to="/galerie">Galerie</Link>
                <Link to="/notfound">NotFound</Link>
              </div>
            </li>
            
            <li><Link to="/PricingTable">Pack</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <Link to="/login">
                <button className="cnx">Se connecter</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
