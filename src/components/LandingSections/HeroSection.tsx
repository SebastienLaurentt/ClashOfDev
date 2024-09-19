import CardHero from "../../assets/CardHero.svg";
import ClashVector from "../../assets/clashVector.svg";
import StrongerVector from "../../assets/strongerVector.svg";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col max-w-[366px] 2xl:max-w-[1376px] mx-auto 2xl:flex-row 2xl:justify-between 2xl:items-center mb-[100px] 2xl:mb-40">
        <div className="flex flex-col mb-10 2xl:mb-0 text-[74px] leading-[82px] 2xl:text-[115px] 2xl:leading-[123px] font-semibold text-[#262625]">
          <span className="2xl:hidden">
            <span className="flex flex-row items-center justify-between">
              Que le
              <img
                src={StrongerVector}
                alt=""
                className="2xl:hidden h-[80px] mr-3 ml-0 w-[103px] inline-block"
                style={{ transform: "rotate(21.39deg)" }}
              />
            </span>
            plus fort,
          </span>
          <span className="hidden 2xl:block">Que le plus fort,</span>
          <div className="flex flex-row items-center">
            <img
              src={StrongerVector}
              alt=""
              className="2xl:ml-[28px] hidden 2xl:block 2xl:mr-[45px] h-[80px] w-[103px]"
            />{" "}
            <span className="italic">l’emporte!</span>
          </div>
        </div>
        <img src={CardHero} alt="" className="2xl:h-[356px] 2xl:w-[368px]" />
      </div>

      <div className="relative h-[174px] w-screen -ml-[50vw] left-1/2">
        <img
          src={ClashVector}
          alt=""
          className="h-full w-auto min-w-full object-cover object-left"
        />
      </div>
    </>
  );
};

export default HeroSection;
