import "./home.css";

const Home = () => {
  return (
    <section id="home" className="home bg-dark py-5">
      <div className="home-content text-center">
        <h1 className="display-5 text-light border border-1 border-light py-2 px-4 d-inline-block">
          JULIANNE GODSEY
        </h1>
        <h2 className="text-secondary fw-light fs-3 mb-4">
          FULL-STACK DEVELOPER
        </h2>
        <div className="lang-logos d-flex justify-content-center gap-4">
          <img
            src="react-logo.svg"
            alt="REACT"
            className="img-fluid square-logo"
          />
          <img
            src="javascript-logo.svg"
            alt="JS"
            className="img-fluid square-logo"
          />
          <img
            src="c-sharp-logo.png"
            alt="C#"
            className="img-fluid square-logo"
          />
          <img src="sql-logo.png" alt="SQL" className="img-fluid square-logo" />
          <img src="css-logo.png" alt="CSS" className="img-fluid square-logo" />
          <img
            src="html-logo.svg"
            alt="HTML"
            className="img-fluid square-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
