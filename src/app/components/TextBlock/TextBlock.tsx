// Style
import "./TextBlock.scss";

interface TextBlockProps {
  title: string;
  paragraph: string;
}

function TextBlock({ title, paragraph }: TextBlockProps) {
  return (
    <div className="text-block">
      <h3 className="text-block__title">{title}</h3>
      <p className="text-block__text">{paragraph}</p>
    </div>
  );
}

export default TextBlock;
