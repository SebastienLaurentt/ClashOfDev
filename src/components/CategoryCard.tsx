import Cursor from "./Cursor";

interface CursorProps {
  name: string;
  bgColor: string;
  borderColor: string;
  fontColor: string;
  classname?: string;
}

interface CategoryCardProps {
  bgColor: string;
  category: string;
  pointsNumber: string;
  name: string;
  imgSrc: string;
  paragraphe1: JSX.Element;
  paragraphe2: JSX.Element;
  logoSrc: string;
  cursors: CursorProps[]; 
}

const CategoryCard = ({
  bgColor,
  category,
  pointsNumber,
  name,
  imgSrc,
  paragraphe1,
  paragraphe2,
  logoSrc,
  cursors,
}: CategoryCardProps) => {
  return (
    <div
      className={`w-full relative h-[600px] 2xl:h-auto rounded-[60px] ${bgColor} flex flex-col text-xs leading-[20px] overflow-hidden`}
    >
      <div className="my-10 2xl:ml-[89px] ml-[47px] 2xl:mr-[61px] h-[44px] flex flex-row justify-between items-center">
        <div className="flex flex-row">
          <div className="flex flex-col items-start gap-y-1 w-[85px] 2xl:w-[155px] mr-2 2xl:mr-5">
            <span className="hidden 2xl:block">{category}</span>
            <span className="2xl:hidden">NOS HÉROS</span>
            <span>{pointsNumber}</span>
          </div>
          <span className="font-bold">{name}</span>
        </div>
        <div className="absolute 2xl:static left-[262px] top-[112px] flex 2xl:flex-row flex-col-reverse gap-y-[65px] 2xl:gap-y-0 2xl:gap-x-5">

          {cursors.map((cursorProps, index) => (
            <Cursor key={index} {...cursorProps} />
          ))}
        </div>
      </div>
      <div className="2xl:ml-10 2xl:mb-10 mx-[47px] flex flex-col 2xl:flex-row">
        <div className="2xl:w-[987px] w-full 2xl:h-[696px] mr-5 rounded-[40px]">
          <img src={imgSrc} alt="aa" />
        </div>
        <div className="mt-[26px] w-full 2xl:w-[241px] text-left flex flex-col gap-y-8">
          <p>{paragraphe1}</p>
          <p>{paragraphe2}</p>
        </div>
      </div>

      <img
        src={logoSrc}
        alt=""
        className="absolute 2xl:size-[412px] size-[180px] bottom-[-25px] 2xl:bottom-[-30px] right-0 2xl:right-[-12px]"
        style={{ transform: "rotate(0deg)" }}
      />
    </div>
  );
};

export default CategoryCard;
