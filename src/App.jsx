import { useEffect } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import AboutMe from "./components/about-me/AboutMe";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer/Footer";

function App() {
  useEffect(() => {
    const handleScrollOffset = (event) => {
      if (event.target.hash) {
        event.preventDefault();
        const targetId = event.target.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 85,
            behavior: "smooth",
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", handleScrollOffset));

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleScrollOffset)
      );
    };
  }, []);

  return (
    <div>
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
