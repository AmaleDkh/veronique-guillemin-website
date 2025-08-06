"use client";

// Components
import Layout from "../components/Layout/Layout";
import PageIntroduction from "../components/PageIntroduction/PageIntroduction";
import ImageTextSection from "../components/ImageTextSection/ImageTextSection";
import TextOnlySection from "../components/TextOnlySection/TextOnlySection";
import FormationsSection from "../components/FormationsSection/FormationsSection";
import TherapeuticApproaches from "../components/TherapeuticApproaches/TherapeuticApproaches";
import CallToAction from "../components/CallToAction/CallToAction";

// Style
import "../../../assets/styles/Global.scss";

// Custom hook
// import { useAboutPageData } from "@/hooks/useData";

function AboutPage() {
  const formations = [
    {
      title: "Formation sur la Clinique des expériences extraordinaires",
      institution: "CesHum | Myriam Maître Enseignante Reiki Lahochi",
    },
    {
      title: "Formation de Relaxologue",
      institution: "Isthmes Formations de Relaxologues et Sophrologues",
    },
    {
      title:
        "Formation de Somathothérapie, nommée aussi Thérapie psycho-corporelle, dans une orientation Transpersonnelle",
      institution: "Isthmes Formations de Relaxologues et Sophrologues",
    },
    {
      title: "Formation en Psychopathologie",
      institution: "Isthmes Formations de Relaxologues et Sophrologues",
    },
    {
      title: "Formation en EFT (Techniques de Libération Emotionnelle)",
      institution:
        "Institut Francophone de Psychothérapie Émotionnelle Cognitive",
    },
    {
      title: "Formation en Reiki",
      institution: "Reiki Lumière | Myriam Maître Enseignante Reiki Lahochi",
    },
    {
      title: "Formation en Cohérence cardiaque",
      institution: "Isthmes Formations de Relaxologues et Sophrologues",
    },
    {
      title: "Formation en méditation de pleine conscience/MBSR",
      institution: "Association Mindfulness",
    },
    {
      title: "Formation en méditation/MSC Mindful Self-Compassion",
      institution: "Organisme Pleinement conscient.e",
    },
    {
      title: "Formation PSSM - Premiers secours en santé mentale",
      institution: "Slyde Assadan, Fondateur de The Rise Up",
    },
  ];

  return (
    <Layout>
      <PageIntroduction title="À propos" />
      <ImageTextSection
        title="Mon cheminement"
        text="Mon parcours personnel est tissé d'épreuves, mais surtout de résilience.
Chaque difficulté rencontrée n'a pas été un frein, mais une porte d'entrée vers une compréhension plus profonde de l'humain, de ses fonctionnements intérieurs, de ses ressources parfois insoupçonnées.

Ces expériences ont tracé le fil rouge de ma vocation : accompagner celles et ceux qui souhaitent se reconnecter à leur potentiel et traverser la vie avec plus de conscience."
        imageSrc=""
        imageAlt="Mon cheminement"
        imageSize="square"
      />

      <TextOnlySection
        title="Mon expérience professionnelle"
        text="Mon parcours personnel est tissé d'épreuves, mais surtout de résilience.
Chaque difficulté rencontrée n'a pas été un frein, mais une porte d'entrée vers une compréhension plus profonde de l'humain, de ses fonctionnements intérieurs, de ses ressources parfois insoupçonnées.

Ces expériences ont tracé le fil rouge de ma vocation : accompagner celles et ceux qui souhaitent se reconnecter à leur potentiel et traverser la vie avec plus de conscience."
        layout="horizontal"
      />

      <ImageTextSection
        title="Mon cheminement"
        text="Mon parcours personnel est tissé d'épreuves, mais surtout de résilience.
Chaque difficulté rencontrée n'a pas été un frein, mais une porte d'entrée vers une compréhension plus profonde de l'humain, de ses fonctionnements intérieurs, de ses ressources parfois insoupçonnées.

Ces expériences ont tracé le fil rouge de ma vocation : accompagner celles et ceux qui souhaitent se reconnecter à leur potentiel et traverser la vie avec plus de conscience."
        imageSrc=""
        imageAlt="Mon cheminement"
        imageSize="rectangle"
      />

      <TextOnlySection
        title="Une approche globale du vivant"
        text="En parallèle de mon activité, je poursuis un chemin personnel exigeant.
Je me suis engagée dans un travail en profondeur à travers différentes voies thérapeutiques :
la psychanalyse (freudienne puis lacanienne),
la Gestalt-thérapie,
et aujourd'hui, un accompagnement corporel enrichi par l'approche transpersonnelle et les états élargis de conscience.

Ce cheminement personnel est le socle de ma posture professionnelle : authentique, enracinée, en constante évolution.
Il me permet d'accompagner l'autre dans toutes ses dimensions : physique, émotionnelle, énergétique et spirituelle."
        layout="horizontal"
      />

      <FormationsSection title="Mes formations" formations={formations} />

      <TherapeuticApproaches />

      <CallToAction />
      {/* {aboutPageContent?.[0] && (
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
      )} */}
    </Layout>
  );
}

export default AboutPage;
