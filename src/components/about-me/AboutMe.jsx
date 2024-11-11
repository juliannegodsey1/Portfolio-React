import "./about-me.css";

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me py-5 bg-light">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-3 text-center mb-4 mb-md-0">
            <div className="img-box position-relative">
              <img
                src="port-img.jpg"
                alt="Portrait of Julianne Godsey, a Full-Stack Developer"
                className="img-fluid rounded-circle"
              />
              <div className="speech-bubble position-absolute top-0 start-50 translate-middle-x">
                Hi there! I'm Julianne!
              </div>
            </div>
          </div>

          <div className="col-md-6 px-4">
            <div className="about-content">
              <h1 className="display-6 fw-semibold">
                Hi, I'm <span>Julianne,</span> a Full-Stack Developer
              </h1>
              <p className="fs-5 lh-sm pt-2">
                I am a <em>self-directed, detail-oriented professional</em>{" "}
                specializing in building dynamic, responsive web applications
                that deliver seamless user experiences. With experience in
                designing, developing, and implementing client-server, web, and
                desktop applications, I thrive on solving complex problems and
                continuously improving my skills. I am committed to delivering
                high-quality solutions that exceed expectations.
              </p>
              <div className="mt-4">
                <div className="d-flex gap-4 justify-content-center">
                  <a
                    href="https://linkedin.com/in/julianne-godsey"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="linkedin-logo.svg"
                      alt="LinkedIn-Logo"
                      className="img-fluid social-logo"
                    />
                  </a>
                  <a
                    href="https://github.com/juliannegodsey1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="github-logo.svg"
                      alt="GitHub-Logo"
                      className="img-fluid social-logo"
                    />
                  </a>
                  <a href="mailto:juliannegodseyy@gmail.com">
                    <img
                      src="email-logo.png"
                      alt="Envelope-Logo"
                      className="img-fluid social-logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
