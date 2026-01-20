import FadeOnScroll from "../Fade";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <FadeOnScroll>
      <h2>Skills</h2>

      <div className="skills-grid">
        <span>HTML & CSS</span>
        <span>JavaScript</span>
        <span>React.js</span>
        <span>Next.js</span>
        <span>Spring Boot</span>
        <span>MySQL & Redis</span>
        <span>Git & Docker</span>
        <span>Linux</span>
      </div>
      </FadeOnScroll>
    </section>
  );
}
