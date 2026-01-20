import FadeOnScroll from "../Fade";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <FadeOnScroll direction="up">
      <h2>Projects</h2>

      <div className="project-card">
        <h3>P2P File Sharing Application</h3>
        <p>
          A peer-to-peer file transfer system that enables users to send very
          large files directly between devices without centralized storage.
        </p>
      </div>
      </FadeOnScroll>
    </section>
  );
}
