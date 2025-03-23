// Components
import SectionTitle from "@/SectionTitle/SectionTitle";
import Button from "../Button/Button";

// Style
import "./LastSectionWithButton.scss";

type LastSectionWithButtonProps = {
  title: string;
  paragraph: string;
  lastSectionWithButtonWithMarginTop: string;
};

function LastSectionWithButton({
  title,
  paragraph,
}: LastSectionWithButtonProps) {
  return (
    <section className="last-section-with-button">
      <SectionTitle title={title} />

      <div className="last-section-with-button__text">
        <p className="last-section-with-button__text__subtitle">{paragraph}</p>

        <Button
          text="PRENDRE RENDEZ-VOUS"
          link=""
          secondClassName="button__margin-top"
        />
      </div>
    </section>
  );
}

export default LastSectionWithButton;
