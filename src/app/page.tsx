"use client";

// React elements
import { useEffect, useState } from "react";

// Components
import Layout from "./components/Layout/Layout";
import LargeImageContainer from "./components/LargeImageContainer/LargeImageContainer";
import PresentationSection from "./components/PresentationSection/PresentationSection";
import QuoteSection from "./components/QuoteSection/QuoteSection";
import ImageTextSection from "./components/ImageTextSection/ImageTextSection";
import Reviews from "./components/Reviews/Reviews";
import TextBlocksSection from "./components/TextBlocksSection/TextBlocksSection";

// API Call
import { fetchPosts } from "../utils/api";

// Style
import "../../assets/styles/Global.scss";

// Image
import Desert1 from "../../assets/images/Desert1.webp";

const stripHtml = (html: string) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

export default function Home() {
  const [sections, setSections] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sectionsList = await fetchPosts();

        if (sectionsList) {
          setSections(sectionsList);
        }
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération des posts:",
          error
        );
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <LargeImageContainer />
      <div className="content-below-image">
        <PresentationSection
          paragraph={stripHtml(sections[0]?.content.rendered)}
          title={stripHtml(sections[0]?.title.rendered)}
          imageSrc={Desert1}
          imageAlt="Un désert"
        />
        <QuoteSection />
        <ImageTextSection />
        <Reviews />
        <TextBlocksSection />
      </div>
    </Layout>
  );
}
