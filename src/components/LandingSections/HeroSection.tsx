import { MousePointer2 } from "lucide-react";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import BlankCardHero from "../../assets/blankCardHero.svg";
import ClashVector from "../../assets/clashVector.svg";
import StrongerVector from "../../assets/strongerVector.svg";
import Cursor from "../Cursor";
import BlurIn from "../ui/BlurIn";

interface CursorComponentProps {
  onClick: (e: React.MouseEvent) => void;
  style: React.CSSProperties;
}

const CursorComponent = memo(({ onClick, style }: CursorComponentProps) => (
  <span
    className="absolute flex cursor-pointer items-center rounded-[18.49px_1.54px_18.49px_18.49px] border-2 px-3 py-1.5 text-xs text-primary-foreground"
    style={{
      backgroundColor: "#F588B9",
      borderColor: "#D6699A",
      transform: "translate(-50%, -50%)",
      ...style,
    }}
    onClick={onClick}
  >
    @sometimecrea
    <MousePointer2
      size={14}
      className="absolute right-[-16px] top-[-18px] drop-shadow"
      style={{
        fill: "#F588B9",
        color: "#F588B9",
        transform: "rotate(90deg)",
      }}
    />
  </span>
));

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  const [customCursor, setCustomCursor] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [fixedPosition, setFixedPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleCursorClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (customCursor) {
        setCustomCursor(false);
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          setFixedPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }
      } else {
        setCustomCursor(true);
        setMousePosition({ x: e.clientX, y: e.clientY });
        setFixedPosition({ x: 0, y: 0 });
      }
    },
    [customCursor]
  );

  useEffect(() => {
    if (!customCursor) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.body.style.cursor = "auto";
    };
  }, [customCursor]);

  return (
    <div ref={containerRef} className="relative">
      {customCursor && (
        <CursorComponent
          onClick={handleCursorClick}
          style={{
            position: "fixed",
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            zIndex: 50,
          }}
        />
      )}
      {!customCursor && fixedPosition.x !== 0 && fixedPosition.y !== 0 && (
        <CursorComponent
          onClick={handleCursorClick}
          style={{
            position: "absolute",
            left: `${fixedPosition.x}px`,
            top: `${fixedPosition.y}px`,
            zIndex: 50,
          }}
        />
      )}
      <div className="mx-auto mb-[100px] flex w-[366px] flex-col md:w-[720px] md:items-center lg:w-[960px] lg:flex-row lg:justify-between 2xl:mb-40 2xl:w-[1376px]">
        <div className="mb-10 flex flex-col text-[74px] font-semibold leading-[82px] text-foreground lg:text-[68px] xl:text-[74px] 2xl:mb-0 2xl:text-[115px] 2xl:leading-[123px]">
          <span className="md:hidden">
            <span className="flex flex-row items-center justify-between">
              Que le
              <img
                src={StrongerVector}
                alt=""
                className="ml-0 mr-3 inline-block h-[80px] w-[103px] 2xl:hidden"
                style={{ transform: "rotate(21.39deg)" }}
              />
            </span>
            plus fort,
          </span>
          <span className="hidden md:block">Que le plus fort,</span>
          <div className="flex flex-row items-center">
            <img
              src={StrongerVector}
              alt=""
              className="hidden h-[80px] w-[103px] md:block 2xl:ml-[28px] 2xl:mr-[45px]"
            />{" "}
            <BlurIn
              className="text-[74px] font-semibold italic leading-[82px] text-foreground lg:text-[68px] xl:text-[74px] 2xl:text-[115px] 2xl:leading-[123px]"
              word="l'emporte!"
            />
          </div>
        </div>
        <div className="relative ml-[36px] h-[356px] w-[366px] 2xl:w-[368px]">
          <img
            src={BlankCardHero}
            alt="Carte de jeu blanche avec couronne"
            className=""
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={310}
            height={356}
          />
          <Cursor
            name="maislina_"
            bgColor="#F28164"
            fontColor="text-primary-foreground"
            borderColor="#D46F55"
            classname={`absolute bottom-[150px] left-[240px] 2xl:left-[265px] ${
              animate ? "animate-cursor1" : ""
            }`}
          />
          <Cursor
            name="LLCoolChris"
            bgColor="#6B93C0"
            fontColor="text-primary-foreground"
            borderColor="#6B93C0"
            classname={`absolute bottom-[65px] 2xl:left-[235px] left-[210px] ${
              animate ? "animate-cursor2" : ""
            }`}
          />
          {!customCursor && fixedPosition.x === 0 && fixedPosition.y === 0 && (
            <span
              className={`absolute bottom-[25px] left-[-40px] h-[30px] w-fit items-center rounded-[18.49px_1.54px_18.49px_18.49px] border-2 px-3 py-1.5 text-xs text-primary-foreground 2xl:flex 2xl:cursor-pointer`}
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
                className="absolute right-[-16px] top-[-18px] drop-shadow"
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
          className="h-full animate-slide whitespace-nowrap"
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

export default memo(HeroSection);
