// Components
import Layout from "../components/Layout/Layout";
import PageIntroduction from "../components/PageIntroduction/PageIntroduction";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import LastSectionWithButton from "../components/LastSectionWithButton/LastSectionWithButton";

// Style
import "../../../assets/styles/Global.scss";

function PracticalInformation() {
  return (
    <Layout>
      <PageIntroduction
        title="Lorem ipsum dolor sit amet consectetur adipiscing elit."
        introduction="Lorem ipsum dolor sit amet consectetur adipiscing elit."
      />

      <FrequentlyAskedQuestions />

      <LastSectionWithButton
        title="Lorem ipsum dolor sit amet consectetur adipiscing elit."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </Layout>
  );
}

export default PracticalInformation;
