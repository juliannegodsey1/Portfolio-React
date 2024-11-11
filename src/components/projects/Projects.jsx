import "./projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "CRUD Cat Adoption Database Website",
      link: "https://github.com/juliannegodsey1/MVC-Pet-Store",
      description: [
        "Developed a C# cat database model, highlighting and displaying key properties of each cat in the system.",
        "Engineered CRUD functionality within a cat repository following MVC architecture, integrating SQL commands for efficient data management.",
        "Designed user-friendly HTML/CSS view pages using ASP.Net MVC framework for cat profile management and catalog display.",
      ],
    },
    {
      title: "CSV Parsing and Geolocation TDD Project",
      link: "https://github.com/juliannegodsey1/GeolocationApp",
      description: [
        "Developed in Visual Studio using C#, .Net Core, and xUnit testing.",
        "Parsed city names and coordinates from a CSV document to calculate distances between locations, identifying the two restaurants with the greatest distance.",
        "Utilized test-driven development to handle invalid or missing data, ensuring accuracy in parsing location, latitude, and longitude.",
      ],
    },
    {
      title: "KanyeREST",
      link: "https://github.com/juliannegodsey1/KanyeAPI",
      description: [
        "Developed an application simulating dialogue between Kanye West and Ron Swanson via external API requests to create engaging and entertaining interactions for users.",
        "Utilized Newtonsoft.JSON to retrieve Kanye West’s quotes as 'kanyeQuote' strings.",
        "Engineered alternating API calls to create a dynamic simulated dialogue between the two characters.",
      ],
    },
  ];

  return (
    <section id="projects" className="projects py-5 bg-dark">
      <div className="container">
        <h2 className="text-center mb-4 text-light">Projects</h2>
        <div className="row">
          {projectData.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card h-100 project-card text-decoration-none"
              >
                <div className="card-body">
                  <h3 className="card-title text-light">
                    {project.title} <i className="bx bx-link-external"></i>
                  </h3>
                  <ul className="list-unstyled text-light">
                    {project.description.map((desc, idx) => (
                      <li key={idx} className="mt-3">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
