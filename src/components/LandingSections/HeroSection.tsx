import { MousePointer2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import CardHero from "../../assets/CardHero.svg";
import BlankCardHero from "../../assets/blankCardHero.svg";
import ClashVector from "../../assets/clashVector.svg";
import StrongerVector from "../../assets/strongerVector.svg";
import Cursor from "../Cursor";
import BlurIn from "../ui/BlurIn";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  const [customCursor, setCustomCursor] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [fixedPosition, setFixedPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);

    const updateMousePosition = (e: MouseEvent) => {
      if (customCursor) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    if (customCursor) {
      window.addEventListener("mousemove", updateMousePosition);
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "auto";
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", updateMousePosition);
      document.body.style.cursor = "auto";
    };
  }, [customCursor]);

  const handleCursorClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (customCursor) {
      setCustomCursor(false);
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setFixedPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    } else {
      setCustomCursor(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
      setFixedPosition({ x: 0, y: 0 });
    }
  };

  const renderCursor = () => (
    <span
      className="absolute flex items-center px-3 py-1.5 text-xs text-[#FEFEFE] border-2 rounded-[18.49px_1.54px_18.49px_18.49px] cursor-pointer"
      style={{
        backgroundColor: "#F588B9",
        borderColor: "#D6699A",
        transform: "translate(-50%, -50%)",
      }}
      onClick={handleCursorClick}
    >
      @sometimecrea
      <MousePointer2
        size={14}
        className="absolute top-[-18px] right-[-16px] drop-shadow"
        style={{
          fill: "#F588B9",
          color: "#F588B9",
          transform: "rotate(90deg)",
        }}
      />
    </span>
  );

  return (
    <div ref={containerRef} className="relative">
      {customCursor && (
        <div
          className="fixed z-50"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        >
          {renderCursor()}
        </div>
      )}
      {!customCursor && fixedPosition.x !== 0 && fixedPosition.y !== 0 && (
        <div
          className="absolute z-50"
          style={{
            left: `${fixedPosition.x}px`,
            top: `${fixedPosition.y}px`,
          }}
        >
          {renderCursor()}
        </div>
      )}
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
            <BlurIn
              className="text-[74px] leading-[82px] 2xl:text-[115px] 2xl:leading-[123px] font-semibold text-[#262625] italic"
              word="l'emporte!"
            />
          </div>
        </div>
        <div className="hidden">
          <img src={CardHero} alt="" className="2xl:h-[356px] 2xl:w-[368px]" />
        </div>
        <div className="relative h-[356px] 2xl:w-[368px] w-[366px] ml-[26px]">
          <img src={BlankCardHero} alt="" className="" />
          <Cursor
            name="maislina_"
            bgColor="#F28164"
            fontColor="text-[#FEFEFE]"
            borderColor="#D46F55"
            classname={`absolute bottom-[150px] left-[240px] 2xl:left-[265px] ${
              animate ? "animate-cursor1" : ""
            }`}
          />
          <Cursor
            name="LLCoolChris"
            bgColor="#6B93C0"
            fontColor="text-[#FEFEFE]"
            borderColor="#6B93C0"
            classname={`absolute bottom-[65px] 2xl:left-[235px] left-[210px] ${
              animate ? "animate-cursor2" : ""
            }`}
          />
          {!customCursor && fixedPosition.x === 0 && fixedPosition.y === 0 && (
            <span
              className={`w-fit text-xs absolute 2xl:flex border-2 items-center rounded-[18.49px_1.54px_18.49px_18.49px] bottom-[35px] left-[-20px] px-3 py-1.5 text-[#FEFEFE] h-[30px] 2xl:cursor-pointer`}
              style={{ backgroundColor: "#F588B9", borderColor: "#D6699A" }}
              onClick={(e) => {
                if (window.innerWidth > 768) {
                  handleCursorClick(e);
                }
              }}
            >
              @sometimecrea
              <MousePointer2
                size={14}
                className="absolute top-[-18px] right-[-16px] drop-shadow"
                style={{
                  fill: "#F588B9",
                  color: "#F588B9",
                  transform: "rotate(90deg)",
                }}
              />
            </span>
          )}
        </div>
      </div>

      <div className="relative h-[174px] overflow-hidden hover-pause">
        <div
          className="animate-slide whitespace-nowrap h-full"
          style={{
            width: "7352.32px",
            backgroundImage: `url(${ClashVector})`,
            backgroundRepeat: "repeat-x",
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;