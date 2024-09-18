import SwitchLogo from "./assets/switchLogo.svg";
import CardsSection from "./components/LandingSections/CardsSection";
import HeroSection from "./components/LandingSections/HeroSection";
import PiscineLogo from "./components/PiscineLogo";

function App() {
  return (
    <main className="py-10 2xl:py-8 2xl:px-0 bg-[#F3F3F1] text-[#262625] font-medium overflow-x-hidden">
      <header className="flex flex-row justify-center">
        <div className="fixed z-50 opacity-100 min-h-[40px] w-[366px] mx-auto 2xl:px-0 2xl:max-w-[1440px] flex flex-row justify-between items-center ">
          <PiscineLogo />
          <span className="font-bold">0%</span>
          <img src={SwitchLogo} alt="" />
        </div>
      </header>
      <section className="2xl:mb-[100px] mb-[101px] mt-[154px] 2xl:mt-[181px]">
        <HeroSection />
      </section>
      <section className="2xl:max-w-[1440px] max-w-[366px] mx-auto 2xl:px-8 2xl:mb-10 mb-[59px]">
        <CardsSection />
      </section>

      <footer className="min-h-[40px] max-w-[366px] flex flex-row justify-between mx-auto 2xl:max-w-[1440px] items-center px-3 2xl:px-0">
        <PiscineLogo />
        <span className="font-bold">100%</span>
        <span className="font-bold">@2024</span>
      </footer>
    </main>
  );
}

export default App;
