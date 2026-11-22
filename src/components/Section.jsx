import Navbar from './Navbar';
import Home from './Home';
import Decouvrir from './Decouvrir';
import Contact from './Contact';

const Section = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Decouvrir />
        <Contact />
      </main>
    </>
  );
};

export default Section;
