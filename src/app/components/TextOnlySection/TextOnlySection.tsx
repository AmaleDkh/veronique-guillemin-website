// Style
import "./TextOnlySection.scss";

interface TextOnlySectionProps {
  title: string;
  text: string;
  layout?: "horizontal" | "vertical";
}

function TextOnlySection({
  title,
  text,
  layout = "horizontal",
}: TextOnlySectionProps) {
  return (
    <div
      className={`text-only-section text-only-section--${layout} margin-section`}
    >
      <h2 className="text-only-section__title">{title}</h2>
      <div className="text-only-section__content">
        {/* <p className="text-only-section__content__text">{text}</p> */}
        <p
          className="text-only-section__content__text"
          dangerouslySetInnerHTML={{ __html: text }}
        ></p>
      </div>
    </div>
  );
}

export default TextOnlySection;
