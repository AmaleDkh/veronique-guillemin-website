// Next element
import Link from "next/link";

// Style
import "./Button.scss";

interface MyComponentProps {
  link: string;
  text: string;
  secondClassName: React.ReactNode;
}

function Button({ link, text, secondClassName }: MyComponentProps) {
  return (
    <Link href={link} className={`button ${secondClassName}`}>
      {text}
    </Link>
  );
}

export default Button;
