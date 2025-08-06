// Next element
import Link from "next/link";

// Style
import "./Button.scss";

interface ButtonProps {
  text: string;
  link: string;
  marginTopVersion?: boolean;
}

function Button({ link, text, marginTopVersion = false }: ButtonProps) {
  return (
    <Link
      className={`button ${
        marginTopVersion === true ? "button--margin-top-version" : ""
      }`}
      href={link}
    >
      {text}
    </Link>
  );
}

export default Button;

// interface ButtonProps {
//   text: string;
//   link: string;
//   marginTopVersion: string;
//   mobileVersion: string;
//   centerVersion: string;
//   colorVersion: string;
// }

// function Button({
//   text,
//   link,
//   marginTopVersion,
//   mobileVersion,
//   centerVersion,
//   colorVersion,
// }: ButtonProps) {
//   return (
//     <Link
//       className={`button ${marginTopVersion} ${mobileVersion} ${centerVersion} ${colorVersion}`}
//       href={link}
//     >
//       {text}
//     </Link>
//   );
// }

// export default Button;
