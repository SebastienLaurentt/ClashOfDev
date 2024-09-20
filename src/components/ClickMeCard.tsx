import BlueLogo from "../assets/blueLogo.svg";
import GreenLogo from "../assets/greenLogo.svg";
import PinkLogo from "../assets/pinkLogo.svg";
import WhiteLogo from "../assets/whiteLogo.svg";
import { confettiSideCannons } from "./ui/confetti";

const ClickMeCard = () => {
  return (
    <div className="bg-primary rounded-[60px] h-[600px] 2xl:h-[900px] relative">
      <div className="ml-[46px] 2xl:ml-[87px] pt-10 2xl:pt-[220px]">
        <span className="ml-0.5 2xl:ml-0 text-primary-foreground">/ FINALE02</span>
        <p className="mt-[130px] text-justify 2xl:mt-0 font-semibold flex 2xl:h-[372px] flex-col justify-center text-[40px] leading-[48px] 2xl:text-[115px] 2xl:leading-[123px] text-[#F3F3F1] w-[272px] 2xl:w-[1172px]">
          Click Me ? Might enter the finals{" "}
        </p>
      </div>
      <img
        src={WhiteLogo}
        alt=""
        className="absolute top-[90.28px] left-[241px] 2xl:top-[516.14px] 2xl:left-[1061.97px] w-[53.55px] h-[49.56px]"
      />
      <div className="2xl:mt-[132px] mt-[125px] relative flex justify-center items-center mx-auto w-[185px] 2xl:w-[219px] h-[91px]">
        <button
          className="z-20 bg-background text-[13.67px] font-semibold rounded-[60px] w-[178px] h-[58px] 2xl:w-[212px]"
          onClick={confettiSideCannons}
          aria-label="Cliquer pour faire apparaître des confettis"
        >
          Enter Next Level
        </button>
        <img
          src={GreenLogo}
          alt=""
          className="absolute size-[30px] left-0 top-0 z-40"
        />
        <img
          src={BlueLogo}
          alt=""
          className="absolute size-[38px] z-30 top-[53.38px] left-[135px] 2xl:left-[168.38px]"
        />
        <img
          src={PinkLogo}
          alt=""
          className="z-10 absolute size-[64px] 2xl:top-[-25px] top-[-20px] left-[140px] 2xl:left-[170px]"
        />
      </div>
    </div>
  );
};

export default ClickMeCard;
