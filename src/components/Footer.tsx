import PiscineLogo from "./PiscineLogo";

const Footer = () => {
  return (
    <footer className="min-h-[40px] max-w-[366px] flex flex-row justify-between mx-auto 2xl:max-w-[1440px] items-center px-3 2xl:px-0">
      <PiscineLogo />
      <span className="font-bold">100%</span>
      <span className="font-bold">@2024</span>
    </footer>
  );
};

export default Footer;
