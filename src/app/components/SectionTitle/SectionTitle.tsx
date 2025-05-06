// Style
import "./SectionTitle.scss";

interface MyComponentProps {
  title: string;
  colorVersion?: string;
}

function SectionTitle({ title, colorVersion }: MyComponentProps) {
  return (
    <h2
      className={`section-title ${
        colorVersion ? `section-title--${colorVersion}` : ""
      }`}
    >
      {title}
    </h2>
  );
}

export default SectionTitle;
