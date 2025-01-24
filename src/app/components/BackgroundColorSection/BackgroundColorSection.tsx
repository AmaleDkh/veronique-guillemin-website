// Style
import "./BackgroundColorSection.scss";

interface BackgroundColorSectionProps {
  title: string;
  text: string;
}

function BackgroundColorSection({ title, text }: BackgroundColorSectionProps) {
  return (
    <section className="quote-section">
      <h3>{title}</h3>
      <p className="quote-section__paragraph">{text}</p>
    </section>
  );
}

export default BackgroundColorSection;
