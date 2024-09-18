import SwitchLogo from "./assets/switchLogo.svg";
import CardsSection from "./components/LandingSections/CardsSection";
import HeroSection from "./components/LandingSections/HeroSection";
import PiscineLogo from "./components/PiscineLogo";

function App() {
  return (
    <main className=" py-10 2xl:py-8 2xl:px-0 bg-[#F3F3F1] overflow-x-hidden">
      <header className="min-h-[40px] mx-auto px-3 2xl:px-0 max-w-[1440px] w-full flex flex-row justify-between items-center mb-[114px] 2xl:mb-[141px]">
        <PiscineLogo />
        <span className="font-bold">0%</span>
        <img src={SwitchLogo} alt="" />
      </header>

      <HeroSection />
      <CardsSection />

      <footer className="min-h-[40px] flex flex-row justify-between mx-auto max-w-[1440px] items-center px-3 2xl:px-0">
        <PiscineLogo />
        <span className="font-bold">100%</span>
        <span className="font-bold">@2024</span>
      </footer>
    </main>
  );
}

export default App;
