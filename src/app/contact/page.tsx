// Components
import Layout from "../components/Layout/Layout";
import PageIntroduction from "../components/PageIntroduction/PageIntroduction";
import LastSectionWithButton from "../components/LastSectionWithButton/LastSectionWithButton";

function Contact() {
  return (
    <Layout>
      <PageIntroduction
        title="Lorem ipsum dolor sit amet consectetur adipiscing elit."
        introduction="Lorem ipsum dolor sit amet consectetur adipiscing elit."
      />

      <LastSectionWithButton
        title="Lorem ipsum dolor sit amet consectetur adipiscing elit."
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        lastSectionWithButtonWithMarginTop=""
      />
    </Layout>
  );
}

export default Contact;
