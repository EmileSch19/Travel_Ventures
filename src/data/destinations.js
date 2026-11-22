import italie from "../assets/italie-1200.webp";
import kyoto from "../assets/kyoto-700.webp";
import santaGiulia from "../assets/santa-giulia-700.webp";
import ponton from "../assets/ponton-700.webp";

// Pour ajouter une destination : une photo dans src/assets + un objet ici
export const destinations = [
  { id: "italie", name: "Italie", text: "Collines et routes de campagne", src: italie, width: 1200, height: 800 },
  { id: "japon", name: "Japon", text: "Couleurs d’automne au bord de l’eau", src: kyoto, width: 700, height: 466 },
  { id: "santa-giulia", name: "Santa Giulia", text: "Eaux turquoise et rochers", src: santaGiulia, width: 700, height: 1049 },
  { id: "lac", name: "Lac au crépuscule", text: "Ponton et ciel rose", src: ponton, width: 700, height: 1153 },
];
