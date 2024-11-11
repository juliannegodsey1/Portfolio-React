import "./resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume py-5 bg-light text-center">
      <div className="container">
        <a
          href="RESUME.pdf"
          download="Julianne_Godsey_Resume"
          className="btn resume-btn"
        >
          Download My Resume <i className="bx bx-download"></i>
        </a>
      </div>
    </section>
  );
};

export default Resume;
