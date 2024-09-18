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
      <div className="fixed z-50 opacity-100 min-h-[40px] w-[366px] mx-auto 2xl:px-0 2xl:w-[1376px] flex flex-row justify-between items-center ">
        <PiscineLogo />
        <span className="font-bold text-[#262625]">
          <NumberTicker scrollProgress={scrollProgress} />
        </span>
        <img src={SwitchLogo} alt="" />
      </div>
    </header>
  );
};

export default Header;
