"use client";

// Components
import Layout from "../components/Layout/Layout";
import ImageAndTextSection from "../components/ImageAndTextSection/ImageAndTextSection";
import BackgroundColorSection from "../components/BackgroundColorSection/BackgroundColorSection";

// Style
import "../../../assets/styles/Global.scss";

// Custom hook
import { useTextAndImageSectionData } from "@/hooks/useData";

function About() {
  const {
    aboutPageFirstPartContent,
    aboutPageSecondPartContent,
    aboutPageThirdPartContent,
    aboutPageFourthPartContent,
    aboutPageFifthPartContent,
  } = useTextAndImageSectionData();

  return (
    <Layout>
      {aboutPageFirstPartContent && (
        <ImageAndTextSection
          title={aboutPageFirstPartContent.section_title}
          paragraph={aboutPageFirstPartContent.section_paragraph}
          image={aboutPageFirstPartContent.section_image}
          marginVersion="no-margin-left"
        />
      )}

      {aboutPageSecondPartContent && (
        <ImageAndTextSection
          title={aboutPageSecondPartContent.section_title}
          paragraph={aboutPageSecondPartContent.section_paragraph}
          image={aboutPageSecondPartContent.section_image}
          marginVersion="no-margin-right"
        />
      )}

      {aboutPageThirdPartContent && (
        <BackgroundColorSection
          title={aboutPageThirdPartContent.section_title}
          text={aboutPageThirdPartContent.section_paragraph}
        />
      )}

      {aboutPageFourthPartContent && (
        <ImageAndTextSection
          title={aboutPageFourthPartContent.section_title}
          paragraph={aboutPageFourthPartContent.section_paragraph}
          image={aboutPageFourthPartContent.section_image}
          marginVersion="no-margin-left"
        />
      )}

      {aboutPageFifthPartContent && (
        <ImageAndTextSection
          title={aboutPageFifthPartContent.section_title}
          paragraph={aboutPageFifthPartContent.section_paragraph}
          image={aboutPageFifthPartContent.section_image}
          marginVersion="no-margin-right"
        />
      )}
    </Layout>
  );
}

export default About;
