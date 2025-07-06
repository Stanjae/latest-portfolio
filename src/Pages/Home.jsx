import About from "../Sections/About";
import Hero from "../Sections/Hero";
import ServicesPage from "../Sections/Services";
import ContactMePages from "../Sections/Contact";
import "../stylesio/Home.css";
import { Divider } from "@mui/material";
import Experience from "../Sections/Experience";
import PortfolioPage from "../Sections/PortfolioPage";

const Home = () => {
  return (
    <div>
      <div id="home">
        <Hero />
      </div>

      <div id="about-me">
        <About />
      </div>
      <Divider
        variant="middle"
        sx={{ backgroundColor: "rgba(255,255,255,0.05)" }}
      />
      <div id="services">
        <ServicesPage />
      </div>
      <Divider
        variant="middle"
        sx={{ backgroundColor: "rgba(255,255,255,0.05)" }}
      />
      <div id="xperience">
        <Experience />
      </div>
      <Divider
        variant="middle"
        sx={{ backgroundColor: "rgba(255,255,255,0.05)" }}
      />
      <div id="portfolio">
        <PortfolioPage />
      </div>
      <Divider
        variant="middle"
        sx={{ backgroundColor: "rgba(255,255,255,0.05)" }}
      />
      <div id="contact-me">
        <ContactMePages />
      </div>
    </div>
  );
};

export default Home;
