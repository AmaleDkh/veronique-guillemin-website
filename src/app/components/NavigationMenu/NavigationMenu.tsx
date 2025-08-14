"use client";

// Next & React elements
import Link from "next/link";
import { useState } from "react";

// Font Awesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

// Style
import "./NavigationMenu.scss";

function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li
          className="navigation__list__item navigation__list__item--therapeutic-approaches-items"
          onClick={handleMenuToggle}
        >
          <Link href="therapeutic-approaches">APPROCHES THÉRAPEUTIQUES</Link>
          <FontAwesomeIcon icon={faCaretDown} />
          {isOpen && (
            <ul className="navigation__practices">
              <li className="navigation__list__item">
                <Link className="navigation-menu__list__item__link" href="">
                  THÉRAPIE PSYCHOCORPORELLE
                </Link>
              </li>

              <li className="navigation__list__item">
                <Link className="navigation__list__item__link" href="">
                  RELAXOLOGIE
                </Link>
              </li>

              <li className="navigation__list__item">
                <Link className="navigation__list__item__link" href="">
                  PSYCHOPATHOLOGIE
                </Link>
              </li>

              <li className="navigation__list__item">
                <Link className="navigation__list__item__link" href="">
                  COHÉRENCE CARDIAQUE
                </Link>
              </li>

              <li className="navigation__list__item">
                <Link className="navigation__list__item__link" href="">
                  EFT
                </Link>
              </li>

              <li className="navigation__list__item">
                <Link className="navigation__list__item__link" href="">
                  REIKI
                </Link>
              </li>

              <li className="navigation__list__item">
                <Link className="navigation__list__item__link" href="">
                  MÉDITATION DE PLEINE CONSCIENCE
                </Link>
              </li>

              <li className="navigation__list__item">
                <Link className="navigation__list__item__link" href="">
                  MSC (MINDFULNESS SELF COMPASSION)
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="practical-information">INFORMATIONS PRATIQUES</Link>
        </li>
        <li>
          <Link href="testimonials">TÉMOIGNAGES</Link>
        </li>
        <li>
          <Link href="about">À PROPOS</Link>
        </li>
        <li>
          <Link href="contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
