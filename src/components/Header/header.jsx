import './header.css';

export const Header = () => {
  return (
    <header>
      <div className="header__content container">
        <div className="site-logo"></div>

        <div className="navigation">
          <button className="nav-btn"></button>
          <nav className="rollout-nav nav-closed">
            <a href="#home" id="home">
              domů
            </a>
            <a href="#menu" id="menu">
              menu
            </a>
            <a href="#gallery" id="gallery">
              galerie
            </a>
            <a href="#contact" id="contact">
              kontakt
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
