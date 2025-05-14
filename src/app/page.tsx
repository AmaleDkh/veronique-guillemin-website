"use client";

// Components
import Layout from "./components/Layout/Layout";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import ThreeKeyFigures from "./components/ThreeKeyFigures/ThreeKeyFigures";
import BackgroundColorSection from "./components/BackgroundColorSection/BackgroundColorSection";
import ImageAndTextSection from "./components/ImageAndTextSection/ImageAndTextSection";
import Reviews from "./components/Reviews/Reviews";
// import TextBlocksSection from "./components/TextBlocksSection/TextBlocksSection";s
// import Introduction from "./Introduction/Introduction";
import Benefits from "./components/Benefits/Benefits";
import ApproachesSummary from "./components/ApproachesSummary/ApproachesSummary";

import LastSectionWithButton from "./components/LastSectionWithButton/LastSectionWithButton";

// Style
import "../../assets/styles/Global.scss";

// Image
import Desert2 from "../../assets/images/Desert2.webp";

// Custom hook
import { useHomepageData } from "@/hooks/useData";

export default function HomePage() {
  const homepageContent = useHomepageData();

  return (
    <Layout>
      <HeroBanner
        backgroundImage={Desert2}
        title="Reconnectez-vous à vous-même"
        description="Grâce à une approche thérapeutique bienveillante, retrouvez un équilibre émotionnel et mental."
      />

      <div className="content-below-image">
        {/* <Introduction /> */}

        <ThreeKeyFigures />

        {homepageContent?.[0] && (
          <>
            <ImageAndTextSection
              sectionTitle={homepageContent[0].first_section_title}
              description={homepageContent[0].first_section_paragraph}
              imageSrc={homepageContent[0].first_section_image}
              imageAlt=""
              imageOnLeft={true}
              button={true}
            />

            <Benefits />

            {/* <TextBlocksSection
              title={homepageContent[0].values_section_title}
              firstTitle={homepageContent[0].values_section_first_value_title}
              firstParagraph={
                homepageContent[0].values_section_first_value_paragraph
              }
              secondTitle={homepageContent[0].values_section_second_value_title}
              secondParagraph={
                homepageContent[0].values_section_second_value_paragraph
              }
              thirdTitle={homepageContent[0].values_section_third_value_title}
              thirdParagraph={
                homepageContent[0].values_section_third_value_paragraph
              }
            /> */}

            <ImageAndTextSection
              sectionTitle={homepageContent[0].second_section_title}
              description={homepageContent[0].second_section_paragraph}
              imageSrc={homepageContent[0].second_section_paragraph}
              imageAlt=""
              backgroundColor="dark-blue"
              titleColorVersion="white"
            />

            <BackgroundColorSection
              title=""
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare lorem
              nisi, at volutpat ligula dictum ac. Pellentesque placerat, ante non
              dictum fringilla, mi velit scelerisque dui, sit amet cursus ligula eros
              a sem."
            />

            {/* <ImageAndTextSection
              sectionTitle={homepageContent[0].benefits_section_title}
              description={homepageContent[0].benefits_section_paragraph}
              imageSrc=""
              imageAlt=""
              imageOnLeft={true}
            /> */}

            <ApproachesSummary />

            <Reviews />

            <ImageAndTextSection
              sectionTitle={homepageContent[0].third_section_title}
              description={homepageContent[0].third_section_paragraph}
              imageSrc={homepageContent[0].second_section_paragraph}
              imageAlt=""
              backgroundColor="ochre"
              titleColorVersion="white"
            />

            <LastSectionWithButton
              title={homepageContent[0].last_section_button_title}
              description={homepageContent[0].last_section_button_introduction}
            />
          </>
        )}
      </div>
    </Layout>
  );
}
