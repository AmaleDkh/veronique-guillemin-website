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
        title="Un parcours marqué par la résilience"
        text={`Mon histoire est tissée  <span class="bold-word">d’épreuves</span>, mais surtout de <span class="bold-word">transformations</span>.  
          <br />
          <br />
          Chaque difficulté a été une porte d’entrée vers une <span class="bold-word">meilleure compréhension de l’humain</span>, de ses fonctionnements profonds, et de ses ressources parfois insoupçonnées.
          <br />
          <br />
          Ce chemin m’a conduite à ma vocation : <span class="bold-word">accompagner celles et ceux qui souhaitent se reconnecter à leur potentiel, et traverser la vie avec plus de conscience et de justesse </span>.`}
        imageSrc=""
        imageAlt="Mon cheminement"
        imageSize="square"
      />

      <TextOnlySection
        title="30 ans d’écoute au cœur de l’entreprise"
        text={`J’ai travaillé dans une multinationale : d’abord en logistique, puis pendant 18 ans au sein des instances représentatives du personnel.
          <br />
          <br />
          J’y ai écouté de près les préoccupations de celles et ceux qui font vivre l’entreprise.
          <br />
          <br /> 
          Cette expérience m’a permis de développer <span class="bold-word">une écoute fine, une grande sensibilité aux enjeux émotionnels et une vision claire des dynamiques humaines au travail <span class="bold-word">.`}
        layout="horizontal"
      />

      <ImageTextSection
        title="Une reconversion portée par le sens"
        text={`Il y a 10 ans, j’ai choisi de mettre cette expérience <span class="bold-word">au service de l’accompagnement</span>.
          <br />
          <br />
          J’ai d’abord guidé des collaborateurs, puis j’ai ouvert mon cabinet pour accueillir ceux qui souhaitent <span class="bold-word">avancer sur leur chemin de transformation</span>.`}
        imageSrc=""
        imageAlt="Mon cheminement"
        imageSize="rectangle"
      />

      <TextOnlySection
        title="Une approche globale du vivant"
        text={`Mon <span class="bold-word">engagement professionnel</span> repose sur un chemin personnel profond et toujours en mouvement.
          <br />
          <br />
          Je me suis <span class="bold-word">formée</span>, et continue de le faire, à des approches complémentaires.
          <br />
          <br />
          <span class="bold-word">Ce travail intérieur nourrit ma posture</span> : authentique, enracinée et à l’écoute de toutes les dimensions de l’être (physique, émotionnelle, énergétique et spirituelle).`}
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
