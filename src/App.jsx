import "./app.scss";
import { Contact } from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Tecnology from "./components/tec/Tecnology";
import Whatsapp from "./components/whatsapp/WhatsApp";
import WorkExperiences from "./components/workExperiences/WorkExperiences";

const App = () => {
  return (
    <div>
      <Whatsapp />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="WorkExp">
        <Parallax type="workExp" />
      </section>
      <section>
        <WorkExperiences />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Tecnology">
        <Tecnology />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
