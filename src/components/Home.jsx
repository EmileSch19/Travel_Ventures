// src/components/Home.jsx

import React from "react";
import italie from "../assets/italie.jpg";

const Home = () => {
  return (
    <>
      <h1 className="page-title">Explore the World</h1>

      <section className="main" id="home">
        <div className="left">
          <div className="card1">
            <p className="card1-text">
              Profitez des magnifiques paysages aux quatre coins du monde.
            </p>
          </div>

          <div className="left_b1">
            <a className="button" href="#decouvrir">
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
            <img src={italie} alt="Italie" className="card-img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
