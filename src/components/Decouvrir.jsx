// src/components/Decouvrir.jsx

import React from "react";
import photo from "../assets/kyoto.jpg";
import santa_guilia from "../assets/santa_guilia.jpg";
import pont from "../assets/pont.jpg";

const Decouvrir = () => {
  return (
    <>
      <section id="decouvrir">
        <div className="container">
          <div className="card_d">
            <img src={photo} alt="Paysage du Japon" className="card-img" />
          </div>

          <div className="card_d">
            <img src={santa_guilia} alt="Plage de Santa Guilia" className="card-img" />
          </div>

          <div className="card_d">
            <img src={pont} alt="Ponton au coucher de soleil" className="card-img" />
          </div>
        </div>

        <div className="but">
          <a className="button_d" href="#contact">
            <span className="texts">
              <span className="text-2">Découvrir</span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Decouvrir;
