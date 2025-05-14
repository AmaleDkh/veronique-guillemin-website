// Components
import Layout from "../components/Layout/Layout";
import PageIntroduction from "../components/PageIntroduction/PageIntroduction";
import LastSectionWithButton from "../components/LastSectionWithButton/LastSectionWithButton";

// Style
import "../../../assets/styles/Global.scss";

function TestimonialsPage() {
  return (
    <Layout>
      <PageIntroduction
        title="Lorem ipsum dolor sit amet consectetur adipiscing elit."
        introduction="Lorem ipsum dolor sit amet consectetur adipiscing elit."
      />

      <LastSectionWithButton
        title="Lorem ipsum dolor sit amet consectetur adipiscing elit."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </Layout>
  );
}

export default TestimonialsPage;
