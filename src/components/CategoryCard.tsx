interface CategoryCardProps {
  bgColor: string;
  category: string;
  pointsNumber: string;
  name: string;
  imgSrc: string;
  paragraphe1: JSX.Element;
  paragraphe2: JSX.Element;
  logoSrc: string;
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
}: CategoryCardProps) => {
  return (
    <section
      className={`w-full relative h-[600px] 2xl:h-auto rounded-[60px] ${bgColor} flex flex-col text-xs leading-[20px] overflow-hidden`}
    >
      <div className="my-10 2xl:ml-[89px] ml-[47px] h-[44px] flex flex-row">
        <div className="flex flex-col items-start gap-y-1 w-[85px] 2xl:w-[155px] mr-2 2xl:mr-5">
          <span>{category}</span>
          <span>{pointsNumber}</span>
        </div>
        <span className="font-bold">{name}</span>
      </div>
      <div className="2xl:ml-10 2xl:mb-10 mx-[47px] flex flex-col 2xl:flex-row">
        <div className="2xl:w-[987px] w-full 2xl:h-[696px] mr-5 rounded-[40px]">
          <img src={imgSrc} alt="aa" />
        </div>
        <div className="mt-[26px]  w-[241px] text-left flex flex-col gap-y-8">
          <p>{paragraphe1}</p>
          <p>{paragraphe2}</p>
        </div>
      </div>
      <img src={logoSrc} alt="" className="absolute 2xl:size-[310px] size-[135.44px] bottom-[-10px] 2xl:bottom-[-50px] right-0 2xl:right-[-20px] " />
    </section>
  );
};

export default CategoryCard;
