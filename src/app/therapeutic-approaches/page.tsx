// Components
import Layout from "../components/Layout/Layout";
import PageIntroduction from "../components/PageIntroduction/PageIntroduction";
import TherapeuticApproachesDetail from "../components/TherapeuticApproachesDetail/TherapeuticApproachesDetail";
import ConsultationSteps from "../components/ConsultationSteps/ConsultationSteps";
import Commitment from "../components/Commitment/Commitment";
import CallToAction from "../components/CallToAction/CallToAction";
import Button from "../components/Button/Button";

// Style
import "../../../assets/styles/Global.scss";

function TherapeuticApproachesPage() {
  return (
    <Layout>
      <PageIntroduction title="Les approches thérapeuthiques" />

      <TherapeuticApproachesDetail />

      <Button
        text="Prendre rendez-vous"
        link="/contact"
        marginTopVersion={true}
      />

      <ConsultationSteps />

      <Commitment />

      <CallToAction />

      {/* <PageIntroduction
        title="Les approches thérapeutiques"
        introduction="Lorem ipsum dolor sit amet consectetur adipiscing elit."
      />

      <TherapeuticApproaches />

      <Pricing />

      <LastSectionWithButton
        title="Lorem ipsum dolor sit amet consectetur adipiscing elit."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      /> */}
    </Layout>
  );
}

export default TherapeuticApproachesPage;
