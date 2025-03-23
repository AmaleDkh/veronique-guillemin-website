interface MyComponentProps {
  title: string;
}

function SectionTitle({ title }: MyComponentProps) {
  return <h2>{title}</h2>;
}

export default SectionTitle;
