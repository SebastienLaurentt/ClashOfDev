import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CardsSection from "./components/LandingSections/CardsSection";
import HeroSection from "./components/LandingSections/HeroSection";

function App() {
  const mainRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const cards = main.querySelectorAll(".card-item");
    const lastCard = cards[cards.length - 1];
    const footer = main.querySelector("footer");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sticky");
          } else {
            entry.target.classList.remove("sticky");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cards.forEach((card, index) => {
      if (index === 0) {
        card.classList.add("sticky");
      }
      observer.observe(card);
    });

    const handleScroll = () => {
      const scrollHeight =
        (lastCard as HTMLElement).offsetTop +
        (lastCard as HTMLElement).offsetHeight -
        main.clientHeight +
        (footer as HTMLElement).offsetHeight;
      const progress = Math.min(main.scrollTop / scrollHeight, 1);
      setScrollProgress(progress);

      if (main.scrollTop > scrollHeight) {
        main.scrollTop = scrollHeight;
      }
    };

    main.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      main.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header scrollProgress={scrollProgress} />
      <main
        ref={mainRef}
        className="h-screen overflow-y-auto overflow-x-hidden bg-[#F3F3F1] text-[#262625] font-medium"
      >
        <div className="min-h-screen   2xl:px-0">
          <section className="2xl:mb-[100px] mb-[101px] mt-[194px] 2xl:mt-[213px]">
            <HeroSection />
          </section>
          <section className="2xl:max-w-[1440px] max-w-[366px] mx-auto 2xl:px-8 ">
            <CardsSection />
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
