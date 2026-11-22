const Navbar = () => {
  return (
    <header className="navbar">
      <div className="wrap navbar-inner">
        <a href="#accueil" className="navbar-logo">Travel Ventures</a>

        <nav aria-label="Navigation principale">
          <ul className="navbar-links">
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
