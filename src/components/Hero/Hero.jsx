import FadeOnScroll from "../Fade";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <FadeOnScroll direction="up">
      <h1>Vishnu Vardhan</h1>
      <p className="hero-sub">Frontend-focused Full-Stack Developer</p>
      <p className="hero-desc">
        I build clean, responsive, and user-friendly web interfaces using
        React and Next.js.
      </p>
      </FadeOnScroll>
    </section>
  );
}
