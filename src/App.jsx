import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Benefits from "./components/Benefits.jsx";
// import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Collaboration from "./components/Collaboration.jsx";
// import Roadmap from "./components/Roadmap.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from "react-router-dom";

import About from "./components/About.jsx";
import ContactForm from "./components/ContactForm.jsx";

// import { navigation } from "../constants";

const App = () => {
  return (
    <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactForm />} />
      </Routes>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Collaboration />
      {/* <Roadmap/> */}
      <Footer />
      <ButtonGradient />
    </>
  );
};

export default App;
