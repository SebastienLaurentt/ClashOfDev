import PiscineLogo from "./PiscineLogo";

const Footer = () => {
  return (
    <footer className="min-h-[40px] pb-[46px] pt-[65px] 2xl:pt-[46px] 2xl:pb-[38px] w-[366px] flex flex-row justify-between mx-auto 2xl:w-[1376px] items-center">
      <PiscineLogo />
      <span className="font-bold">100%</span>
      <span className="font-bold">@2024</span>
    </footer>
  );
};

export default Footer;
