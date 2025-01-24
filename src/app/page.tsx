"use client";

// Components
import Layout from "./components/Layout/Layout";
import LargeImageContainer from "./components/LargeImageContainer/LargeImageContainer";
import BackgroundColorSection from "./components/BackgroundColorSection/BackgroundColorSection";
import ImageAndTextSection from "./components/ImageAndTextSection/ImageAndTextSection";
import Reviews from "./components/Reviews/Reviews";
import TextBlocksSection from "./components/TextBlocksSection/TextBlocksSection";
import Introduction from "./Introduction/Introduction";

// Style
import "../../assets/styles/Global.scss";

// Custom hook
import { useTextAndImageSectionData } from "@/hooks/useData";

export default function Home() {
  const { homePageFirstPartContent, homePageSecondPartContent } =
    useTextAndImageSectionData();

  return (
    <Layout>
      <LargeImageContainer />

      <div className="content-below-image">
        <Introduction />

        {homePageFirstPartContent && (
          <ImageAndTextSection
            title={homePageFirstPartContent.section_title}
            paragraph={homePageFirstPartContent.section_paragraph}
            image={homePageFirstPartContent.section_image}
            marginVersion="no-margin-left"
          />
        )}

        <BackgroundColorSection
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare lorem
        nisi, at volutpat ligula dictum ac. Pellentesque placerat, ante non
        dictum fringilla, mi velit scelerisque dui, sit amet cursus ligula eros
        a sem."
        />

        {homePageSecondPartContent && (
          <ImageAndTextSection
            title={homePageSecondPartContent.section_title}
            paragraph={homePageSecondPartContent.section_paragraph}
            image={homePageSecondPartContent.section_image}
            marginVersion="no-margin-right"
          />
        )}

        <Reviews />

        <TextBlocksSection />
      </div>
    </Layout>
  );
}
