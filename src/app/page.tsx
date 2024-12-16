// Components
import Layout from "./components/Layout/Layout";
import LargeImageContainer from "./components/LargeImageContainer/LargeImageContainer";
import PresentationSection from "./components/PresentationSection/PresentationSection";

// Style
import "../../assets/styles/Global.scss";

export default function Home() {
  return (
    <Layout>
      <LargeImageContainer />
      <PresentationSection />
    </Layout>
  );
}
