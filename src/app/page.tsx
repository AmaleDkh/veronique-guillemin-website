"use client";

// Components
import Layout from "./components/Layout/Layout";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import ThreeKeyFigures from "./components/ThreeKeyFigures/ThreeKeyFigures";
import TherapeuticApproaches from "./components/TherapeuticApproaches/TherapeuticApproaches";
import WhyMe from "./components/WhyMe/WhyMe";
import Methodology from "./components/Methodology/Methodology";
import Testimonials from "./components/Testimonials/Testimonials";
import CallToAction from "./components/CallToAction/CallToAction";
import Button from "./components/Button/Button";

// Style
import "../../assets/styles/Global.scss";

// Image
// import Desert2 from "../../assets/images/Desert2.webp";

// Custom hook
// import { useHomepageData, useHomepagePageData } from "@/hooks/useData";

export default function HomePage() {
  // const homepagePageContent = useHomepagePageData();
  // const homepageContent = useHomepageData();
  // console.log("homepagePageContent", homepagePageContent);
  // console.log(
  //   "homepagePageContent",
  //   homepagePageContent?.TextAndImageSection[0]
  // );

  return (
    <Layout>
      <HeroBanner />

      <ThreeKeyFigures />

      <TherapeuticApproaches />

      <Button
        text="Prendre rendez-vous"
        link="/contact"
        marginTopVersion={true}
      />

      <WhyMe />

      <Methodology />

      <Button
        text="Prendre rendez-vous"
        link="/contact"
        marginTopVersion={true}
      />

      <Testimonials />

      <CallToAction />
      {/* <HeroBanner
        backgroundImage={Desert2}
        title="Reconnectez-vous à vous-même"
        description="Grâce à une approche thérapeutique bienveillante, retrouvez un équilibre émotionnel et mental."
      /> */}

      <div className="content-below-image">
        {/* <Introduction /> */}

        {/* <ThreeKeyFigures />

        <ImageAndTextSection
          sectionTitle="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare lorem nisi, at volutpat ligula dictum ac. Pellentesque placerat, ante non dictum fringilla, mi velit scelerisque dui, sit amet cursus ligula eros a sem."
          imageSrc=""
          imageAlt=""
          imageOnLeft={true}
          button={true}
        />

        <Benefits /> */}

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

        {/* <ImageAndTextSection
          sectionTitle="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare lorem nisi, at volutpat ligula dictum ac. Pellentesque placerat, ante non dictum fringilla, mi velit scelerisque dui, sit amet cursus ligula eros a sem."
          imageSrc=""
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
        /> */}

        {/* <ImageAndTextSection
              sectionTitle={homepageContent[0].benefits_section_title}
              description={homepageContent[0].benefits_section_paragraph}
              imageSrc=""
              imageAlt=""
              imageOnLeft={true}
            /> */}

        {/* <ApproachesSummary />

        <Reviews />

        <ImageAndTextSection
          sectionTitle="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare lorem nisi, at volutpat ligula dictum ac. Pellentesque placerat, ante non dictum fringilla, mi velit scelerisque dui, sit amet cursus ligula eros a sem."
          imageSrc=""
          imageAlt=""
          backgroundColor="ochre"
          titleColorVersion="white"
        />

        <LastSectionWithButton
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare lorem nisi, at volutpat ligula dictum ac. Pellentesque placerat, ante non dictum fringilla, mi velit scelerisque dui, sit amet cursus ligula eros a sem."
        /> */}

        {/* {homepageContent?.[0] && (
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

            <TextBlocksSection
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
            />

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

            <ImageAndTextSection
              sectionTitle={homepageContent[0].benefits_section_title}
              description={homepageContent[0].benefits_section_paragraph}
              imageSrc=""
              imageAlt=""
              imageOnLeft={true}
            />

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
        )} */}
      </div>
    </Layout>
  );
}
