"use client";

// React elements
import { useState } from "react";
import { Menu, X } from "lucide-react";

// Style
import "./Header.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__top">
          <a href="/" className="header__logo">
            <span className="header__name">Véronique Guillemin</span>
            <span className="header__title">Relaxologue-Psychopraticienne</span>
          </a>
          <button className="header__menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <div className="header__nav-content">
            <a href="/therapeutic-approaches" className="header__link">
              Approches thérapeutiques
            </a>
            <a href="/practical-information" className="header__link">
              Informations pratiques
            </a>
            <a href="/testimonials" className="header__link">
              Témoignages
            </a>
            <a href="/about" className="header__link">
              À propos
            </a>
            <a href="/contact" className="header__link">
              Contact
            </a>
            <a href="/contact" className="header__cta">
              Prendre rendez-vous
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
