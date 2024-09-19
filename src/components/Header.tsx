import { useEffect, useState } from "react";
import SwitchLogo from "../assets/switchLogo.svg";
import PiscineLogo from "./PiscineLogo";
import NumberTicker from "./ui/NumberTicker";

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const currentProgress = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setProgress(Number((currentProgress / scrollHeight).toFixed(2)));
      }
    };

    window.addEventListener("scroll", updateScroll);

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return progress;
}
const Header = () => {
  const scrollProgress = useScrollProgress();
  return (
    <header className="flex flex-row justify-center">
      <div className="fixed top-0 left-0 w-full pt-[46px] pb-8 2xl:pt-[38px] z-50 opacity-100 gradient-bottom-10">
        <div className="w-[366px] 2xl:w-[1376px] mx-auto flex flex-row justify-between items-center">
          <PiscineLogo />
          <span className="absolute w-full left-0 text-center font-bold text-[#262625]">
            <NumberTicker scrollProgress={scrollProgress} />
          </span>
          <img src={SwitchLogo} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
