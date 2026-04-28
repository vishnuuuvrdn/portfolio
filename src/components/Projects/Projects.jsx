import "./Projects.css";
import cinescopeImg from "../../assets/CineScope/img.png";
import TranslatorImg from "../../assets/TranslatorIMG.png";

const projectData = [
  {
    id: 1,
    title: "CineScope",
    image: cinescopeImg,
    github: "https://github.com/vishnuuuvrdn/MovieApp",
    preview: "https://cineboxd.vishnuuuvrdn.workers.dev",
  },
  {
    id: 2,
    title: "Telugu Translator Chrome Extension",
    image: TranslatorImg,
    github: "https://github.com/vishnuuuvrdn/Telugu-Translator-Extension",
    preview: "#",
  },
];

export default function Projects() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">Projects</h1>
      </header>

      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-media">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <div className="links">
                  <a
                    href={project.github}
                    target="_blank"
                    className="btn github-btn"
                  >
                    GitHub
                  </a>
                  <a href={project.preview} className="btn preview-btn">
                    Preview
                  </a>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <h3 className="project-name">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
