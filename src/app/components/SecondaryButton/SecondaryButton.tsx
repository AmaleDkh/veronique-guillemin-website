// Next element
import Link from "next/link";

// Style
import "./SecondaryButton.scss";

interface SecondaryButtonProps {
  link: string;
  label: string;
  centerVersion: string;
}

function SecondaryButton({ link, label, centerVersion }: SecondaryButtonProps) {
  return (
    <Link href={link} className={`secondary-button ${centerVersion}`}>
      {label}
    </Link>
  );
}

export default SecondaryButton;
