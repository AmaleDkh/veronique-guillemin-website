// Next element
import Link from "next/link";

// Style
import "./NavigationMenu.scss";

function NavigationMenu() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <Link href="therapeutic-approaches">APPROCHES THÉRAPEUTIQUES</Link>
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
