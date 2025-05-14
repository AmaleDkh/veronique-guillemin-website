"use client";

// Components
import Layout from "../components/Layout/Layout";
import PageIntroduction from "../components/PageIntroduction/PageIntroduction";
import ImageAndTextSection from "../components/ImageAndTextSection/ImageAndTextSection";
import BackgroundColorSection from "../components/BackgroundColorSection/BackgroundColorSection";
import Reviews from "../components/Reviews/Reviews";
import ApproachesSummary from "../components/ApproachesSummary/ApproachesSummary";
import LastSectionWithButton from "../components/LastSectionWithButton/LastSectionWithButton";

// Style
import "../../../assets/styles/Global.scss";

// Custom hook
import { useAboutPageData } from "@/hooks/useData";

function AboutPage() {
  const aboutPageContent = useAboutPageData();

  return (
    <Layout>
      {aboutPageContent?.[0] && (
        <>
          <PageIntroduction
            title={aboutPageContent[0].aboutpage_title}
            introduction="Lorem ipsum dolor sit amet consectetur adipiscing elit."
          />

          <ImageAndTextSection
            sectionTitle={aboutPageContent[0].first_section_title}
            description={aboutPageContent[0].first_section_paragraph}
            imageSrc={aboutPageContent[0].first_section_image}
            imageAlt=""
          />

          <ImageAndTextSection
            sectionTitle={aboutPageContent[0].second_section_title}
            description={aboutPageContent[0].second_section_paragraph}
            imageSrc={aboutPageContent[0].second_section_image}
            imageAlt=""
            imageOnLeft={true}
            backgroundColor="dark-blue"
            titleColorVersion="white"
          />

          <BackgroundColorSection
            title={aboutPageContent[0].third_section_title}
            text={aboutPageContent[0].third_section_paragraph}
          />

          <ImageAndTextSection
            sectionTitle={aboutPageContent[0].fourth_section_title}
            description={aboutPageContent[0].fourth_section_paragraph}
            imageSrc={aboutPageContent[0].fourth_section_image}
            imageAlt=""
          />

          <ImageAndTextSection
            sectionTitle={aboutPageContent[0].fifth_section_title}
            description={aboutPageContent[0].fifth_section_paragraph}
            imageSrc={aboutPageContent[0].fifth_section_image}
            imageAlt=""
            imageOnLeft={true}
            backgroundColor="dark-blue"
            titleColorVersion="white"
          />

          <Reviews />

          <ApproachesSummary />

          <LastSectionWithButton
            title={aboutPageContent[0].last_section_button_title}
            description={aboutPageContent[0].last_section_button_introduction}
          />
        </>
      )}
    </Layout>
  );
}

export default AboutPage;
