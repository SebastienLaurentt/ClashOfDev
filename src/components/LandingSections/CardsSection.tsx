import categoryCardData, { CategoryCardData } from "../../lib/categoryCardData";
import CategoryCard from "../CategoryCard";
import ClickMeCard from "../ClickMeCard";

const CardsSection = () => {
  const totalCards = categoryCardData.length + 1; 

  return (
    <>
      {categoryCardData.map((card: CategoryCardData, index: number) => (
        <div
          key={index}
          className="card-item 2xl:mb-1"
          style={{ zIndex: index + 2 }} 
        >
          <CategoryCard
            bgColor={card.bgColor}
            category={card.category}
            pointsNumber={card.pointsNumber}
            name={card.name}
            imgSrc={card.imgSrc}
            imgAlt={card.imgAlt}
            paragraphe1={card.paragraphe1}
            paragraphe2={card.paragraphe2}
            logoSrc={card.logoSrc}
            cursors={card.cursors}
          />
        </div>
      ))}
      <div
        className="card-item"
        style={{ zIndex: totalCards + 1 }} 
      >
        <ClickMeCard />
      </div>
    </>
  );
};

export default CardsSection;
