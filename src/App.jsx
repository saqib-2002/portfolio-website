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

// import { navigation } from "../constants";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* {navigation.map((item) => (
        <Route path={item.url} key={item.id} />
      ))} */}
      <Route path="/about" element={ <About/>} />
    </Routes>
  );
};

const HomePage = () => {
  return (
    <>
      <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        {/* <Roadmap/> */}
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
