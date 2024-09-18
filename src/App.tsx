import Footer from "./components/Footer";
import Header from "./components/Header";
import CardsSection from "./components/LandingSections/CardsSection";
import HeroSection from "./components/LandingSections/HeroSection";

function App() {
  return (
    <main className="py-10 2xl:py-8 2xl:px-0 bg-[#F3F3F1] text-[#262625] font-medium overflow-x-hidden">
      <Header />
      <section className="2xl:mb-[100px] mb-[101px] mt-[154px] 2xl:mt-[181px]">
        <HeroSection />
      </section>
      <section className="2xl:max-w-[1440px] max-w-[366px] mx-auto 2xl:px-8 2xl:mb-10 mb-[59px]">
        <CardsSection />
      </section>
      <Footer />
    </main>
  );
}

export default App;
