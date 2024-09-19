import SwitchLogo from "../assets/switchLogo.svg";
import PiscineLogo from "./PiscineLogo";
import NumberTicker from "./ui/NumberTicker";

interface HeaderProps {
  scrollProgress: number;
}

const Header = ({ scrollProgress }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 w-full pt-[46px] pb-8 2xl:pt-[38px] z-50 opacity-100 gradient-bottom-10">
      <div className="w-[366px] 2xl:w-[1376px] mx-auto flex flex-row justify-between items-center">
        <PiscineLogo />
        <span className="absolute w-full left-0 text-center font-bold text-[#262625]">
          <NumberTicker scrollProgress={scrollProgress} />
        </span>
        <img src={SwitchLogo} alt="Switch Logo" />
      </div>
    </header>
  );
};

export default Header;
