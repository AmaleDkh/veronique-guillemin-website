// Style
import "./PageIntroduction.scss";

interface MyComponentProps {
  title: string;
  introduction?: string;
}

function PageIntroduction({ title, introduction }: MyComponentProps) {
  return (
    <div className="page-introduction">
      <h1>{title}</h1>
      {/* <p>{introduction}</p> */}
    </div>
  );
}

export default PageIntroduction;
