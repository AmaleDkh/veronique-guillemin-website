// Style
import "./AppointmentButton.scss";

interface MyComponentProps {
  secondClassName: React.ReactNode;
}

function AppointmentButton({ secondClassName }: MyComponentProps) {
  return (
    <button className={`appointment-button ${secondClassName}`}>
      PRENDRE RENDEZ-VOUS
    </button>
  );
}

export default AppointmentButton;
