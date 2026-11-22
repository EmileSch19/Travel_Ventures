const Home = () => {
  return (
    <section className="wrap" id="accueil">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Explorez le monde</h1>
          <p className="hero-lead">Profitez des magnifiques paysages aux quatre coins du monde.</p>
          <div className="ctas">
            <a className="btn" href="#destinations">Voir nos destinations</a>
            <a className="btn btn-ghost-light" href="#contact">Nous contacter</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
