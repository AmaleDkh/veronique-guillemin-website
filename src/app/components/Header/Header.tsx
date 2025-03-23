"use client";

// Next elements
import Link from "next/link";
import { usePathname } from "next/navigation";

// Components
import Button from "../Button/Button";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

// Style
import "./Header.scss";

function Header() {
  const pathname = usePathname();
  return (
    <header className={`header ${pathname !== "/" && "header__other-pages"} `}>
      <div className="header__first-block">
        <Link className="header__principal-information" href="/">
          <p className="header__principal-information__title">
            Véronique Guillemin
          </p>
          <p className="header__principal-information__profession">
            Relaxologue-Psychopraticienne
          </p>
        </Link>
        <Button
          link=""
          text="PRENDRE RENDEZ-VOUS"
          secondClassName="button__absolute-position"
        />
      </div>

      <NavigationMenu />
    </header>
  );
}

export default Header;
