import SwitchLogo from "../assets/switchLogo.svg";
import PiscineLogo from "./PiscineLogo";
import NumberTicker from "./ui/NumberTicker";

interface HeaderProps {
  scrollProgress: number;
  isVisible: boolean;
}

const Header = ({ scrollProgress, isVisible }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 w-full pt-[46px] pb-8 2xl:pt-[38px] z-50 gradient-bottom-10">
      <div className="w-[366px] 2xl:w-[1376px] mx-auto flex flex-row justify-between items-center">
        <PiscineLogo />
        <span
          className={`absolute w-full left-0 text-center font-bold text-foreground transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <NumberTicker scrollProgress={scrollProgress} />
        </span>
        <img src={SwitchLogo} alt="Logo de Clash of Dev dans un toogle" />
      </div>
    </header>
  );
};

export default Header;
