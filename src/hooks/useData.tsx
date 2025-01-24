"use client";

// React elements
import { useEffect, useState } from "react";

// API Calls
import { fetchTextAndImageSections } from "@/utils/api";

type TextAndImageSection = {
  section_title: string;
  section_paragraph: string;
  section_image: string;
};

export const useTextAndImageSectionData = () => {
  const [homePageFirstPartContent, setHomePageFirstPartContent] =
    useState<TextAndImageSection | null>(null);

  const [homePageSecondPartContent, sethomePageSecondPartContent] =
    useState<TextAndImageSection | null>(null);

  const [aboutPageFirstPartContent, setAboutPageFirstPartContent] =
    useState<TextAndImageSection | null>(null);

  const [aboutPageSecondPartContent, setAboutPageSecondPartContent] =
    useState<TextAndImageSection | null>(null);

  const [aboutPageThirdPartContent, setAboutPageThirdPartContent] =
    useState<TextAndImageSection | null>(null);

  const [aboutPageFourthPartContent, setAboutPageFourthPartContent] =
    useState<TextAndImageSection | null>(null);

  const [aboutPageFifthPartContent, setAboutPageFifthPartContent] =
    useState<TextAndImageSection | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const textAndImageSectionsList = await fetchTextAndImageSections();

        const homePageFirstPartContentData = textAndImageSectionsList[6].acf;
        const homePageSecondPartContentData = textAndImageSectionsList[5].acf;
        const aboutPageFirstPartContentData = textAndImageSectionsList[4].acf;
        const aboutPageSecondPartContentData = textAndImageSectionsList[3].acf;
        const aboutPageThirdPartContentData = textAndImageSectionsList[2].acf;
        const aboutPageFourthPartContentData = textAndImageSectionsList[1].acf;
        const aboutPageFifthPartContentData = textAndImageSectionsList[0].acf;

        if (textAndImageSectionsList) {
          setHomePageFirstPartContent(homePageFirstPartContentData);
          sethomePageSecondPartContent(homePageSecondPartContentData);
          setAboutPageFirstPartContent(aboutPageFirstPartContentData);
          setAboutPageSecondPartContent(aboutPageSecondPartContentData);
          setAboutPageThirdPartContent(aboutPageThirdPartContentData);
          setAboutPageFourthPartContent(aboutPageFourthPartContentData);
          setAboutPageFifthPartContent(aboutPageFifthPartContentData);
        }
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return {
    homePageFirstPartContent,
    homePageSecondPartContent,
    aboutPageFirstPartContent,
    aboutPageSecondPartContent,
    aboutPageThirdPartContent,
    aboutPageFourthPartContent,
    aboutPageFifthPartContent,
  };
};
