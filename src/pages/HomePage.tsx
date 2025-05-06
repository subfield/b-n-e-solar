import { Header } from "../components/molecules/Header";
import { Hero } from "../components/molecules/Hero";
import { SectionA } from "../components/molecules/SectionA";
import { SectionB } from "../components/molecules/SectionB";
import { SectionC } from "../components/molecules/SectionC";
import { SectionD } from "../components/molecules/SectionD";
// import { SectionE } from "../components/molecules/SectionE";
// import { SectionF } from "../components/molecules/SectionF";
// import { SectionG } from "../components/molecules/SectionG";
import { SectionH } from "../components/molecules/SectionH";
// import { SectionI } from "../components/molecules/SectionI";
import { SectionJ } from "../components/molecules/SectionJ";
import { SectionK } from "../components/molecules/SectionK";
import { SectionL } from "../components/molecules/SectionL";
import { SectionM } from "../components/molecules/SectionM";
import { SectionO } from "../components/molecules/SectionO";
// import { Brand } from "../components/molecules/Brand";
import { Footer } from "../components/molecules/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <SectionA />
      <SectionB about={!!0} />
      <SectionC />
      <SectionD />
      {/* <SectionE /> */}
      {/* <SectionF /> */}
      {/* <SectionG /> */}
      <SectionH />
      {/* <SectionI /> */}
      <SectionJ />
      <SectionK />
      <SectionL />
      <SectionM />
      <SectionO />
      {/* <Brand /> */}
      <div style={{ marginTop: "30px" }}>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
