import ArtisteImg from "@/assets/artisteImg.svg";
import BatisseurImg from "@/assets/batisseurImg.svg";
import BlueLogo from "@/assets/blueLogo.svg";
import BlueLogoBig from "@/assets/blueLogoBig.svg";
import BossImg from "@/assets/bossImg.svg";
import ChercheurImg from "@/assets/chercheurImg.svg";
import GreenLogo from "@/assets/greenLogo.svg";
import GreenLogoBig from "@/assets/greenLogoBig.svg";
import MaitreImg from "@/assets/maitreImg.svg";
import PinkLogo from "@/assets/pinkLogo.svg";
import PinkLogoBig from "@/assets/pinkLogoBig.svg";
import PurpleLogo from "@/assets/purpleLogo.svg";
import RedLogo from "@/assets/redLogo.svg";
import SecretImg from "@/assets/secretImg.svg";
import WhiteLogo from "@/assets/whiteLogo.svg";
import YellowLogo from "@/assets/yellowLogo.svg";
import CategoryCard from "../CategoryCard";

const CardsSection = () => {
  return (
    <section className="2xl:max-w-[1440px] max-w-[366px] mx-auto 2xl:px-8 2xl:mb-10 mb-[59px]">
      <CategoryCard
        bgColor="bg-[#EBEDFF]"
        category="DESIGN"
        pointsNumber="/6 pts"
        name="L’ARTISTE DE RENOM"
        imgSrc={ArtisteImg}
        paragraphe1=<>
          <span className="font-bold">Le design</span>, c’est son terrain de
          jeu. <br className="2xl:hidden" /> Il maîtrise et retranscrit
          correctement chaque pixel de la maquette.
        </>
        paragraphe2=<>
          Virtuose des couleurs il ne se trompe jamais de code HEX, de spacing
          ou de border-radius ;{" "}
          <span className="font-bold">
            Figma n’a aucun secret pour ce Dev de talent.
          </span>
        </>
        logoSrc={PurpleLogo}
        cursors={[
          {
            name: "maislina_",
            bgColor: "#9FA8FE",
            borderColor: "#8A92E3",
            fontColor: "text-[#FEFEFE]",
          },
        ]}
      />
      <CategoryCard
        bgColor="bg-[#FFEDF5]"
        category="CODE"
        pointsNumber="/6 pts"
        name="LE BÂTISSEUR DE CODE"
        imgSrc={BatisseurImg}
        paragraphe1={
          <>
            <span className="whitespace-nowrap 2xl:whitespace-normal">
              Ses lignes de code sont des fondations solides.
            </span>{" "}
            C’est <span className="font-bold">un maître du front</span>, capable
            de structurer les systèmes les plus complexes sans se casser la
            tête.
          </>
        }
        paragraphe2=<>
          <span className="font-bold">Maitre de VSCode</span>, il a surement
          fini le challenge en s’assurant d’avoir le code le plus clair et le
          plus propre des 36 participants.
        </>
        logoSrc={PinkLogoBig}
        cursors={[
          {
            name: "Chris",
            bgColor: "#F588B9",
            borderColor: "#D6699A",
            fontColor: "text-[#FEFEFE]",
          },
        ]}
      />
      <CategoryCard
        bgColor="bg-[#ECFFCE]"
        category="MOTION"
        pointsNumber="/3 pts"
        name="LE MAITRE DE LA FLUIDITÉ"
        imgSrc={MaitreImg}
        paragraphe1=<>
          Aucun composant ne s’affiche sans une{" "}
          <span className="font-bold">animation soignée</span>. Ses transitions
          sont légères, dynamiques et fluides, captivant l'utilisateur à chaque
          interaction.
        </>
        paragraphe2=<>
          Ce dev a l’oeil et maitrise{" "}
          <span className="font-bold">le motion</span> mieux que n’importe qui.{" "}
        </>
        logoSrc={GreenLogoBig}
        cursors={[
          {
            name: "Lina",
            bgColor: "#A2B87E",
            borderColor: "#95AE6D",
            fontColor: "text-[#FEFEFE]",
            classname: "ml-1.5 2xl:ml-0",
          },
          {
            name: "Chris",
            bgColor: "#A2B87E",
            borderColor: "#95AE6D",
            fontColor: "text-[#FEFEFE]",
          },
        ]}
      />
      <CategoryCard
        bgColor="bg-[#BADAFF]"
        category="RESPONSIVE"
        pointsNumber="/2 pts"
        name="LE CHERCHEUR DE BREAKPOINT"
        imgSrc={ChercheurImg}
        paragraphe1=<>
          Quelle que soit la taille de l’écran, il garantit une expérience
          utilisateur sans faille. Chaque site{" "}
          <span className="font-bold">s’adapte à tous les supports</span>, du
          mobile au grand écran.
        </>
        paragraphe2=<>
          Il fait attention à{" "}
          <span className="font-bold">chaque breakpoint</span> attentivement, on
          ne pourra pas le reprendre à l’inspection!
        </>
        logoSrc={BlueLogoBig}
        cursors={[
          {
            name: "Lina",
            bgColor: "#6B93C0",
            borderColor: "#6B93C0",
            fontColor: "text-[#BADAFF]",
            classname: "ml-1.5 2xl:ml-0",
          },
          {
            name: "Chris",
            bgColor: "#6B93C0",
            borderColor: "#6B93C0",
            fontColor: "text-[#BADAFF]",
          },
        ]}
      />
      <CategoryCard
        bgColor="bg-[#FFFAC2]"
        category="EASTER EGG"
        pointsNumber="/3 pts"
        name="LE MAITRE DES SECRETS"
        imgSrc={SecretImg}
        paragraphe1=<>
          Derrière une ligne de code bien choisie se cache un s
          <span className="font-bold">ecret bien gardé. </span>
          Il glisse la surprise qui surprendra les utilisateurs les plus
          curieux.
        </>
        paragraphe2=<>
          Dev attentif aux comportements utilisateurs il saura cacher{" "}
          <span className="font-bold">l’Easter Egg</span> au meilleur endroit.
        </>
        logoSrc={YellowLogo}
        cursors={[
          {
            name: "Lina",
            bgColor: "#CAC48E",
            borderColor: "#C2BB82",
            fontColor: "text-[#FFFAC2]",
            classname: "ml-1.5 2xl:ml-0",
          },
          {
            name: "Chris",
            bgColor: "#CAC48E",
            borderColor: "#C2BB82",
            fontColor: "text-[#FFFAC2]",
          },
        ]}
      />
      <CategoryCard
        bgColor="bg-[#FFBCAB]"
        category="BIG BOSS"
        pointsNumber="/ Infinite pts"
        name="LE SUR-BOOSTED"
        imgSrc={BossImg}
        paragraphe1=<>
          Il excelle dans tous les domaines, alliant design, propreté de code,
          réactivité, animations fluides et créativité cachée.{" "}
          <span className="font-bold">Un vrai prodige </span>
          qui a su briller dans chaque aspect du développement.
        </>
        paragraphe2=<>
          Ce dev aux <span className="font-bold">multitalents</span> a reçu la
          standing ovation du jury.{" "}
        </>
        logoSrc={RedLogo}
        cursors={[
          {
            name: "Lina",
            bgColor: "#F28164",
            borderColor: "#D46F55",
            fontColor: "text-[#FEFEFE]",
            classname: "ml-1.5 2xl:ml-0",
          },
          {
            name: "Chris",
            bgColor: "#F28164",
            borderColor: "#D46F55",
            fontColor: "text-[#FEFEFE]",
          },
        ]}
      />
      <section className="bg-[#262625] rounded-[60px] h-[600px] 2xl:h-[900px] relative">
        <div className="ml-[46px] 2xl:ml-[87px] pt-10 2xl:pt-[220px]">
          <span className="ml-0.5  2xl:ml-0 text-[#FEFEFE]">/ FINALE02</span>
          <p className="mt-[130px] text-justify 2xl:mt-0 font-semibold flex 2xl:h-[372px] flex-col justify-center text-[40px] leading-[48px] 2xl:text-[115px] 2xl:leading-[123px] text-[#F3F3F1] w-[272px] 2xl:w-[1172px]">
            Click Me ? Might enter the finals{" "}
          </p>
        </div>
        <img
          src={WhiteLogo}
          alt=""
          className="absolute top-[90.28px] left-[241px] 2xl:top-[516.14px] 2xl:left-[1061.97px] w-[53.55px] h-[49.56px]"
        />

        <div className="2xl:mt-[132px] mt-[125px] relative flex justify-center items-center mx-auto w-[185px] 2xl:w-[219px] h-[91px] ">
          <button className="z-20 bg-[#F3F3F1]  text-[13.67px] font-semibold  rounded-[60px] w-[178px] h-[58px] 2xl:w-[212px]   ">
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
      </section>
    </section>
  );
};

export default CardsSection;
