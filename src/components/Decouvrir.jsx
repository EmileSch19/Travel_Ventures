import { destinations } from "../data/destinations";

const Decouvrir = ({ onChoose }) => {
  return (
    <section className="wrap section" id="destinations">
      <h2 className="section-title">Destinations</h2>
      <p className="muted">Quatre paysages pour commencer à rêver.</p>

      <div className="dest-grid">
        {destinations.map((d) => (
          <article className="dest-card" key={d.id}>
            {/* Chargées seulement à l'approche de l'écran */}
            <img
              src={d.src}
              alt={`${d.name} — ${d.text}`}
              className="dest-img"
              width={d.width}
              height={d.height}
              loading="lazy"
              decoding="async"
            />
            <div className="dest-body">
              <h3 className="dest-name">{d.name}</h3>
              <p className="muted">{d.text}</p>
              <a className="text-link" href="#contact" onClick={() => onChoose(d.name)}>
                Organiser ce voyage →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Decouvrir;
