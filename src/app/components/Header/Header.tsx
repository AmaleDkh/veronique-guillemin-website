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
          <p className="header__principal-information__title">
            Véronique Guillemin
          </p>
          <p className="header__principal-information__profession">
            Relaxologue-Psychopraticienne
          </p>
        </div>
        <AppointmentButton secondClassName="appointment-button__absolute-position" />
      </div>

      <NavigationMenu />
    </header>
  );
}

export default Header;
