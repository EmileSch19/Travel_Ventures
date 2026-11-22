const Navbar = () => {
  return (
    <header className="navbar">
      <a href="#accueil" className="navbar-logo">Travel Ventures</a>

      <nav className="navbar-links" aria-label="Navigation principale">
        <a href="#accueil">Accueil</a>
        <a href="#destinations">Destinations</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
