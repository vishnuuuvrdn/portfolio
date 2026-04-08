import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_py3gnra",
        "template_o6ms1ig",
        form.current,
        "wNzUaeVWFQCmilBBa",
      )
      .then(
        (result) => {
          console.log("Success!", result.text);
          setSent(true);
          setTimeout(() => setSent(false), 3000);
          setFormData({ lastName: "", firstName: "", email: "", message: "" });
        },
        (error) => {
          console.log("Failed...", error.text);
          alert("Something went wrong. Please try again.");
        },
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Contact</h2>
      <div className="contact-divider" />

      <div className="contact-body">
        {/* ── LEFT PANEL ── */}
        <div className="left-panel">
          <div className="profile-row">
            <div className="avatar">V</div>
            <div>
              <div className="profile-name">Vishnu Vardhan</div>
              <div className="status-badge">
                <span className="status-dot" />
                Available
              </div>
            </div>
          </div>

          <div>
            <div className="links-label">Useful links</div>
            <div className="links-list">
              <a
                href="https://www.linkedin.com/in/vishnuuuvrdn/"
                target="_blank"
                className="link-btn linkedin"
              >
                <FaLinkedin size={16} /> LinkedIn
              </a>

              <a
                href="https://github.com/vishnuuuvrdn"
                target="_blank"
                className="link-btn github"
              >
                <FaGithub size={16} /> GitHub
              </a>

              <a
                href="mailto:vishnuvardhan9376@gmail.com"
                target="_blank"
                className="link-btn email"
              >
                <FaEnvelope size={14} /> Email
              </a>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL (FORM) ── */}
        <form ref={form} className="right-panel" onSubmit={handleSubmit}>
          <div className="form-title">Send me a message</div>

          {sent && (
            <div className="sent-notification">
              <FaCheck /> Message sent! I'll get back to you soon.
            </div>
          )}

          <div className="name-row">
            <div className="field-wrap">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field-wrap">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field-wrap">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-wrap">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={`send-btn ${sent ? "success" : ""}`}>
            {sent ? "Sent!" : "Send"}
            <span className="arrow">
              {sent ? <FaCheck size={16} /> : <FaArrowRight size={16} />}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
