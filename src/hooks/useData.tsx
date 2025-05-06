"use client";

// React elements
import { useEffect, useState } from "react";

// API Calls
import {
  fetchTextAndImageSections,
  fetchHomepageContent,
  fetchAboutPageContent,
  fetchContactPageContent,
} from "@/utils/api";

type TextAndImageSection = {
  section_title: string;
  section_paragraph: string;
  section_image: string;
};

type HomepageContent = {
  first_section_title: string;
  first_section_paragraph: string;
  first_section_image: string;
  second_section_title: string;
  second_section_paragraph: string;
  third_section_title: string;
  third_section_paragraph: string;
  fourth_section_title: string;
  fourth_section_paragraph: string;
  last_section_button_title: string;
  last_section_button_introduction: string;
  values_section_title: string;
  values_section_first_value_title: string;
  values_section_first_value_paragraph: string;
  values_section_second_value_title: string;
  values_section_second_value_paragraph: string;
  values_section_third_value_title: string;
  values_section_third_value_paragraph: string;
  benefits_section_title: string;
  benefits_section_paragraph: string;
};

type AboutPageContent = {
  aboutpage_title: string;
  aboutpage_introduction: string;
  first_section_title: string;
  first_section_paragraph: string;
  first_section_image: string;
  second_section_title: string;
  second_section_paragraph: string;
  second_section_image: string;
  third_section_title: string;
  third_section_paragraph: string;
  fourth_section_image: string;
  fourth_section_title: string;
  fourth_section_paragraph: string;
  fifth_section_image: string;
  fifth_section_title: string;
  fifth_section_paragraph: string;
  last_section_button_title: string;
  last_section_button_introduction: string;
};

type ContactPageContent = {
  contact_page_title: string;
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

export const useHomepageData = () => {
  const [homepageContent, setHomepageContent] = useState<HomepageContent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homepageContentData = await fetchHomepageContent();

        const homepage = homepageContentData.map(
          (HomepageContent: { acf: HomepageContent }) => HomepageContent.acf
        );

        setHomepageContent(homepage);
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return homepageContent;
};

export const useAboutPageData = () => {
  const [aboutPageContent, setAboutPageContent] = useState<AboutPageContent[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const aboutPageContentData = await fetchAboutPageContent();

        const aboutPage = aboutPageContentData.map(
          (aboutPageContent: { acf: AboutPageContent }) => aboutPageContent.acf
        );

        setAboutPageContent(aboutPage);
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return aboutPageContent;
};

export const useContactPageData = () => {
  const [contactPageContent, setContactPageContent] = useState<
    ContactPageContent[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contactPageContentData = await fetchContactPageContent();

        const contactPage = contactPageContentData.map(
          (contactPageContent: { acf: AboutPageContent }) =>
            contactPageContent.acf
        );

        setContactPageContent(contactPage);
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return contactPageContent;
};
