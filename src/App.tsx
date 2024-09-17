import artisteImg from "./assets/artisteImg.svg";
import batisseurImg from "./assets/batisseurImg.svg";
import bossImg from "./assets/bossImg.svg";
import chercheurImg from "./assets/chercheurImg.svg";
import maitreImg from "./assets/maitreImg.svg";
import secretImg from "./assets/secretImg.svg";
import Section from "./components/Section";

function App() {
  return (
    <main className="max-w-7xl mx-auto px-3 2xl:px-0">
      <Section
        bgColor="bg-[#EBEDFF]"
        category="DESIGN"
        pointsNumber="/6 pts"
        name="L’ARTISTE DE RENOM"
        imgSrc={artisteImg}
        paragraphe1=<>
          <span className="font-bold">Le design</span>, c’est son terrain de
          jeu. Il maîtrise et retranscrit correctement chaque pixel de la
          maquette.
        </>
        paragraphe2=<>
          Virtuose des couleurs il ne se trompe jamais de code HEX, de spacing
          ou de border-radius ;{" "}
          <span className="font-bold">
            Figma n’a aucun secret pour ce Dev de talent.
          </span>
        </>
      />
      <Section
        bgColor="bg-[#FFEDF5]"
        category="CODE"
        pointsNumber="/6 pts"
        name="LE BÂTISSEUR DE CODE"
        imgSrc={batisseurImg}
        paragraphe1=<>
          Ses lignes de code sont des fondations solides. C’est{" "}
          <span className="font-bold">un maître du front</span>, capable de
          structurer les systèmes les plus complexes sans se casser la tête.
        </>
        paragraphe2=<>
          <span className="font-bold">Maitre de VSCode</span>, il a surement
          fini le challenge en s’assurant d’avoir le code le plus clair et le
          plus propre des 36 participants.
        </>
      />
      <Section
        bgColor="bg-[#ECFFCE]"
        category="MOTION"
        pointsNumber="/3 pts"
        name="LE MAITRE DE LA FLUIDITÉ"
        imgSrc={maitreImg}
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
      />
      <Section
        bgColor="bg-[#BADAFF]"
        category="RESPONSIVE"
        pointsNumber="/2 pts"
        name="LE CHERCHEUR DE BREAKPOINT"
        imgSrc={chercheurImg}
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
      />
      <Section
        bgColor="bg-[#FFFAC2]"
        category="EASTER EGG"
        pointsNumber="/3 pts"
        name="LE MAITRE DES SECRETS"
        imgSrc={secretImg}
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
      />
      <Section
        bgColor="bg-[#FFBCAB]"
        category="BIG BOSS"
        pointsNumber="/ Infinite pts"
        name="LE SUR-BOOSTED"
        imgSrc={bossImg}
        paragraphe1=<>
          Il excelle dans tous les domaines, alliant design, propreté de code,
          réactivité, animations fluides et créativité cachée.{" "}
          <span className="font-bold">Un vrai prodige</span>
          qui a su briller dans chaque aspect du développement.
        </>
        paragraphe2=<>
          Ce dev aux <span className="font-bold">multitalents</span> a reçu la
          standing ovation du jury.{" "}
        </>
      />
    </main>
  );
}

export default App;
