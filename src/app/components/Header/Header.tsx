"use client";

// React element
import { useState } from "react";

// Component
import Button from "../Button/Button";

// Style
import "./Header.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Approches thérapeutiques", href: "/therapeutic-approaches" },
    { label: "À propos", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="header-section">
      <div className="header-section__top">
        <a href="/" className="header-section__title-section">
          <p className="header-section__title-section__name">
            Véronique Guillemin
          </p>
          <p className="header-section__title-section__profession">
            Relaxologue-Psychopraticienne
          </p>
        </a>

        <button className="header__hamburger" onClick={toggleMenu}>
          <div
            className={`header__hamburger ${
              isMenuOpen ? "header__hamburger--open" : ""
            }`}
          >
            <span className="header__hamburger__line"></span>
            <span className="header__hamburger__line"></span>
            <span className="header__hamburger__line"></span>
          </div>
        </button>
      </div>

      <div
        className={`header-section__navigation-section ${
          isMenuOpen ? "header-section__navigation-section--open" : ""
        }`}
      >
        <nav className="header-section__navigation-section__nav-menu">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="header-section__navigation-section__nav-menu__link"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <Button text="Prendre rendez-vous" link="/" />
        </nav>
      </div>
    </header>
  );
}

export default Header;

// // Next element
// import Link from "next/link";

// // Style
// import "./Header.scss";

// // function Header() {
// //   const navItems = [
// //     { label: "Approches thérapeutiques", href: "/therapeutic-approaches" },
// //     { label: "À propos", href: "/about" },
// //     { label: "Contact", href: "/contact" },
// //   ];

// //   return (
// //     <header className="header-section">
// //       <Link href="/" className="header-section__title-section">
// //         <p className="header-section__title-section__name">
// //           Véronique Guillemin
// //         </p>
// //         <p className="header-section__title-section__profession">
// //           Relaxologue-Psychopraticienne
// //         </p>
// //       </Link>

// //       <div className="header-section__navigation-section">
// //         <nav className="header-section__navigation-section__nav-menu">
// //           {navItems.map((item, index) => (
// //             <a
// //               key={index}
// //               href={item.href}
// //               className="header-section__navigation-section__nav-menu__link"
// //             >
// //               {item.label}
// //             </a>
// //           ))}
// //         </nav>

// //         <Button text="Prendre rendez-vous" link="/contact" />
// //       </div>
// //     </header>
// //   );
// // }

// // export default Header;

// import React from "react";
// import "./Header.scss";

// function Header() {
//   const navItems = [
//     { label: "Approches thérapeutiques", href: "#approches" },
//     { label: "À propos", href: "#about" },
//     { label: "Contact", href: "#contact" },
//   ];

//   return (
//     <header className="header">
//       <div className="header__title">
//         <span className="header__title__name">Véronique Guillemin</span>
//         <span className="header__title__profession">
//           Relaxologue-Psychopraticienne
//         </span>
//       </div>
//       <div className="header__navigation">
//         <div className="header__navigation__menu">
//           {navItems.map((item, index) => (
//             <span key={index} className="header__navigation__menu__item">
//               {item.label}
//             </span>
//           ))}
//         </div>
//         <div className="header__navigation__cta">
//           <span className="header__navigation__cta__text">
//             Prendre rendez-vous
//           </span>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

// "use client";

// // React elements
// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// // Style
// import "./Header.scss";

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="header">
//       <div className="header__container">
//         <div className="header__top">
//           <a href="/" className="header__logo">
//             <span className="header__name">Véronique Guillemin</span>
//             <span className="header__title">Relaxologue-Psychopraticienne</span>
//           </a>
//           <button className="header__menu-toggle" onClick={toggleMenu}>
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
//           <div className="header__nav-content">
//             <a href="/therapeutic-approaches" className="header__link">
//               Approches thérapeutiques
//             </a>
//             <a href="/practical-information" className="header__link">
//               Informations pratiques
//             </a>
//             <a href="/testimonials" className="header__link">
//               Témoignages
//             </a>
//             <a href="/about" className="header__link">
//               À propos
//             </a>
//             <a href="/contact" className="header__link">
//               Contact
//             </a>
//             <a href="/contact" className="header__cta">
//               Prendre rendez-vous
//             </a>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;
