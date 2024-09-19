import { useRef, useEffect } from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import CardsSection from "./components/LandingSections/CardsSection";
import HeroSection from "./components/LandingSections/HeroSection";

function App() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const cards = main.querySelectorAll('.card-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sticky');
        } else {
          entry.target.classList.remove('sticky');
        }
      });
    }, { 
    });

    cards.forEach((card, index) => {
      if (index === 0) {
        card.classList.add('sticky');
      }
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main ref={mainRef} className="pb-10 2xl:pb-8 2xl:px-0 bg-[#F3F3F1] text-[#262625] font-medium overflow-x-hidden h-screen overflow-y-auto">
      <Header />
      <section className="2xl:mb-[100px] mb-[101px] mt-[194px] 2xl:mt-[213px]">
        <HeroSection />
      </section>
      <section className="2xl:max-w-[1440px] max-w-[366px] mx-auto 2xl:px-8">
        <CardsSection />
      </section>
      <Footer />
    </main>
  );
}

export default App;