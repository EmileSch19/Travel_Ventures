import italie from "../assets/italie-1200.webp";

const Home = () => {
  return (
    <>
      <h1 className="page-title">Explorez le monde</h1>

      <section className="main" id="accueil">
        <div className="left">
          <div className="card1">
            <p className="card1-text">
              Profitez des magnifiques paysages aux quatre coins du monde.
            </p>
          </div>

          <div className="left_b1">
            <a className="button" href="#destinations">
              <span className="texts">
                <span className="text-2">Voir nos destinations</span>
              </span>
            </a>

            <a className="button" href="#contact">
              <span className="texts">
                <span className="text-2">Nous contacter</span>
              </span>
            </a>
          </div>
        </div>

        <div className="right">
          <div className="card3">
            <img
              src={italie}
              alt="Collines verdoyantes en Italie"
              className="card-img"
              width="1200"
              height="800"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
