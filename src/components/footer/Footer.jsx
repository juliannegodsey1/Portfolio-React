import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <ul className="footer-links list-unstyled d-flex justify-content-center mb-4">
              <li className="mx-3">
                <a href="#home" id="home-link" className="text-light">
                  Home
                </a>
              </li>
              <li className="mx-3">
                <a href="#about-me" id="about-me-link" className="text-light">
                  About Me
                </a>
              </li>
              <li className="mx-3">
                <a
                  href="#projects"
                  id="project-footer-link"
                  className="text-light"
                >
                  Projects
                </a>
              </li>
              <li className="mx-3">
                <a
                  href="RESUME.pdf"
                  download="Julianne_Godsey_Resume"
                  className="text-light"
                >
                  Resume <i className="bx bx-download"></i>
                </a>
              </li>
              <li className="mx-3">
                <a
                  href="mailto:juliannegodseyy@gmail.com"
                  id="contact-footer-link"
                  className="text-light"
                >
                  Contact
                </a>
              </li>
            </ul>
            <p className="copyright mb-0 text-center small">
              © 2024 Julianne Godsey | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
