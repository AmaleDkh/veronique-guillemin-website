"use client";

// Components
import Layout from "../components/Layout/Layout";
import PageIntroduction from "../components/PageIntroduction/PageIntroduction";
import ContactForm from "../components/ContactForm/ContactForm";

// Style
import "../../../assets/styles/Global.scss";

// Custom hook
// import { useContactPageData } from "@/hooks/useData";

function ContactPage() {
  // const contactPageContent = useContactPageData();

  return (
    <Layout>
      <PageIntroduction title="Contact" />

      <ContactForm />
      {/* {contactPageContent?.[0] && (
        <>
          <PageIntroduction
            title={contactPageContent[0].contact_page_title}
            introduction="Lorem ipsum dolor sit amet consectetur adipiscing elit."
          />

          <ContactContent />

          <FrequentlyAskedQuestions />
        </>
      )} */}
    </Layout>
  );
}

export default ContactPage;
