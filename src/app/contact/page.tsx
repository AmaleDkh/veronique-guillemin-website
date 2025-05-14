"use client";

// Components
import Layout from "../components/Layout/Layout";
import PageIntroduction from "../components/PageIntroduction/PageIntroduction";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import ContactContent from "../components/ContactContent/ContactContent";

// Style
import "../../../assets/styles/Global.scss";

// Custom hook
import { useContactPageData } from "@/hooks/useData";

function ContactPage() {
  const contactPageContent = useContactPageData();

  return (
    <Layout>
      {contactPageContent?.[0] && (
        <>
          <PageIntroduction
            title={contactPageContent[0].contact_page_title}
            introduction="Lorem ipsum dolor sit amet consectetur adipiscing elit."
          />

          <ContactContent />

          <FrequentlyAskedQuestions />
        </>
      )}
    </Layout>
  );
}

export default ContactPage;
