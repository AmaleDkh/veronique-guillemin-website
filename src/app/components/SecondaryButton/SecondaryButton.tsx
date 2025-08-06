// Next element
import Link from "next/link";

// Style
import "./SecondaryButton.scss";

interface SecondaryButtonProps {
  text: string;
  link: string;
}

function SecondaryButton({ link, text }: SecondaryButtonProps) {
  return (
    <Link className={`secondary-button `} href={link}>
      {text}
    </Link>
  );
}

export default SecondaryButton;

// // Next element
// import Link from "next/link";

// // Style
// import "./SecondaryButton.scss";

// interface SecondaryButtonProps {
//   link: string;
//   label: string;
//   centerVersion: string;
// }

// function SecondaryButton({ link, label, centerVersion }: SecondaryButtonProps) {
//   return (
//     <Link href={link} className={`secondary-button ${centerVersion}`}>
//       {label}
//     </Link>
//   );
// }

// export default SecondaryButton;
