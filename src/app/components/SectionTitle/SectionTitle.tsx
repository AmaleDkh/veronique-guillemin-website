// Style
import "./SectionTitle.scss";

interface MyComponentProps {
  title: string;
  colorVersion?: string;
  textAlignVersion?: "center";
}

function SectionTitle({
  title,
  colorVersion,
  textAlignVersion,
}: MyComponentProps) {
  return (
    <h2
      className={`section-title 
      ${colorVersion ? `section-title--${colorVersion}` : ""}
      ${textAlignVersion ? `section-title--${textAlignVersion}` : ""}
    `}
    >
      {title}
    </h2>
  );
}

export default SectionTitle;
