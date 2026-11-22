import { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Decouvrir from './Decouvrir';
import Contact from './Contact';
import { destinations } from '../data/destinations';

const Section = () => {
  // La destination cliquée dans une carte pré-remplit le formulaire
  const [destination, setDestination] = useState(destinations[0].name);

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Decouvrir onChoose={setDestination} />
        <Contact destination={destination} setDestination={setDestination} />
      </main>
      <footer className="wrap footer">
        <span>© 2025 Travel Ventures — projet d’Emile Dufoulon</span>
        <span>Photos : banques d’images libres de droits</span>
      </footer>
    </>
  );
};

export default Section;
