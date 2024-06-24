import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Benefits from "./components/Benefits.jsx";
// import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
const App = () => {
  return (
    <>
      <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <Hero />
        <Benefits/>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
