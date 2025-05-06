// Component
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";

// Style
import "./BackgroundColorSection.scss";

interface BackgroundColorSectionProps {
  title: string;
  text: string;
}

function BackgroundColorSection({ title, text }: BackgroundColorSectionProps) {
  return (
    <section className="quote-section">
      <SectionTitle title={title} />
      <p className="quote-section__paragraph">{text}</p>
    </section>
  );
}

export default BackgroundColorSection;
