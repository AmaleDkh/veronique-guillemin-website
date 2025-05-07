// Components
import Layout from "../components/Layout/Layout";
import PageIntroduction from "../components/PageIntroduction/PageIntroduction";
import TherapeuticApproaches from "../components/TherapeuticApproaches/TherapeuticApproaches";
import Pricing from "../components/Pricing/Pricing";
import LastSectionWithButton from "../components/LastSectionWithButton/LastSectionWithButton";

// Style
import "../../../assets/styles/Global.scss";

function TherapeuticApproachesPage() {
  return (
    <Layout>
      <PageIntroduction
        title="Les approches thérapeutiques"
        introduction="Lorem ipsum dolor sit amet consectetur adipiscing elit."
      />

      <TherapeuticApproaches />

      <Pricing />

      <LastSectionWithButton
        title="Lorem ipsum dolor sit amet consectetur adipiscing elit."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </Layout>
  );
}

export default TherapeuticApproachesPage;
