// Components
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import TextBlock from "../TextBlock/TextBlock";

// Style
import "./TextBlocksSection.scss";

type MyComponentProps = {
  title: string;
  firstTitle: string;
  firstParagraph: string;
  secondTitle: string;
  secondParagraph: string;
  thirdTitle: string;
  thirdParagraph: string;
};

function TextBlocksSection({
  title,
  firstTitle,
  firstParagraph,
  secondTitle,
  secondParagraph,
  thirdTitle,
  thirdParagraph,
}: MyComponentProps) {
  return (
    <section className="text-blocks-section">
      <SectionTitle title={title} />
      <div className="text-blocks-section__blocks">
        <TextBlock title={firstTitle} paragraph={firstParagraph} />
        <TextBlock title={secondTitle} paragraph={secondParagraph} />
        <TextBlock title={thirdTitle} paragraph={thirdParagraph} />
      </div>
    </section>
  );
}

export default TextBlocksSection;
