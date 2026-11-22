import kyoto from "../assets/kyoto-700.webp";
import santaGiulia from "../assets/santa-giulia-700.webp";
import ponton from "../assets/ponton-700.webp";

const destinations = [
  { src: kyoto, alt: "Paysage du Japon", width: 700, height: 466 },
  { src: santaGiulia, alt: "Plage de Santa Giulia", width: 700, height: 1049 },
  { src: ponton, alt: "Ponton au coucher du soleil", width: 700, height: 1153 },
];

const Decouvrir = () => {
  return (
    <section id="destinations" aria-label="Destinations">
      <div className="container">
        {destinations.map((d) => (
          <div className="card_d" key={d.alt}>
            {/* Chargées seulement à l'approche de l'écran */}
            <img
              src={d.src}
              alt={d.alt}
              className="card-img"
              width={d.width}
              height={d.height}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>

      <div className="but">
        <a className="button_d" href="#contact">
          <span className="texts">
            <span className="text-2">Organiser mon voyage</span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Decouvrir;
