import FadeOnScroll from "../Fade";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <FadeOnScroll direction="up">
      <h2>About Me</h2>
      <p>
        I’m a Cybersecurity undergraduate at Parul University with strong
        fundamentals in Data Structures and Algorithms. I enjoy translating
        complex ideas into simple, usable interfaces and building real-world
        projects that feel smooth and reliable.
      </p>
      </FadeOnScroll>
    </section>
  );
}
