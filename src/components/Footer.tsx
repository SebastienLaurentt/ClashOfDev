import PiscineLogo from "./PiscineLogo";
import NumberTicker from "./ui/NumberTicker";

interface FooterProps {
  scrollProgress: number;
}

const Footer = ({ scrollProgress }: FooterProps) => {
  return (
    <footer className="relative min-h-[40px] pb-[46px] pt-[65px] 2xl:pt-[46px] 2xl:pb-[38px] w-[366px] flex flex-row justify-between mx-auto 2xl:w-[1376px] items-center">
      <PiscineLogo />
      <NumberTicker scrollProgress={scrollProgress} className="font-bold 2xl:text-center 2xl:w-full 2xl:absolute" />
      <span className="font-bold">@2024</span>
    </footer>
  );
};

export default Footer;
