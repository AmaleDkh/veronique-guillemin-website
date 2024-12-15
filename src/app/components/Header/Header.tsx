// Components
import AppointmentButton from "../AppointmentButton/AppointmentButton";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

// Style
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__first-block">
        <div className="header__principal-information">
          <h1 className="header__principal-information__title">
            Véronique Guillemin
          </h1>
          <p className="header__principal-information__profession">
            Relaxologue-Psychopraticienne
          </p>
        </div>
        <AppointmentButton />
      </div>

      <NavigationMenu />
    </header>
  );
}

export default Header;
