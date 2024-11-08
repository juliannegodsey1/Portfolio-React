const Header = () => {
  return (
    <header className="header py-3">
      <div className="container d-flex justify-content-evenly align-items-center">
        <a href="#home" className="logo fs-5 fw-semibold" id="name-logo">
          <span>Julianne</span> Godsey
        </a>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid d-flex">
            <a className="nav-link navbar-brand ms-4" href="#about-me">
              About Me
            </a>
            <a className="nav-link navbar-brand ms-4" href="#projects">
              Projects
            </a>
            <a className="nav-link navbar-brand ms-4" href="#resume">
              Resume
            </a>
          </div>
        </nav>
        <a
          href="mailto:juliannegodseyy@gmail.com"
          className="contact-btn btn fw-semibold px-4 py-2"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
