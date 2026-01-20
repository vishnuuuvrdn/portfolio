import FadeOnScroll from "../Fade";
import "./Contact.css";
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <FadeOnScroll direction="up">
      <h2>Contact</h2>

      <div className="contact-box">
        <a href="vishnuvardhan9376@gmail.com" rel="noopener noreferrer"> Email </a>
        <a href="github.com/vishnuuuvrdn" target="_blank"><button>GitHub</button></a>
        <p>Phone: +91 9392252751</p>
      </div>
      </FadeOnScroll>
    </section>
  );
}
