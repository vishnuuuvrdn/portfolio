import { useState, useEffect } from "react";
import myBigPic from "../../assets/me.jpeg";
import myShortPic from "../../assets/me_mobile.jpeg";
import "./About.css";
import { FaLocationDot } from "react-icons/fa6";

const educationData = [
  {
    school: "PARUL UNIVERSITY (Currently Pursuing)",
    degree:
      "Bachelor of Technology in Computer Science & Engineering (Cyber Security)",
    date: "2023 - 2027",
  },
  {
    school: "NARAYANA JUNIOR COLLEGE",
    degree: "Board of Intermediate Education (MPC)",
    date: "2020 - 2022",
  },
  {
    school: "SIDHARTH HIGH SCHOOL",
    degree: "Secondary School Certificate (SSC)",
    date: "2020",
  },
];

export default function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="about-container">
      <header className="about-header">
        <h1 className="about-title">About</h1>
      </header>

      <section className="about-hero">
        <div className="photo-wrapper">
          <img
            src={isMobile ? myShortPic : myBigPic}
            alt="Vishnu's Profile"
            className="profile-img"
          />
        </div>

        <div className="about-content">
          <h2 className="name">
            Vishnu <br />
            <span>Vardhan</span>
          </h2>

          <div className="tags">
            <span className="tag">
              {" "}
              <FaLocationDot style={{ fontSize: "0.8rem" }} /> Hyderabad{" "}
            </span>
            <span className="tag">MERN Stack</span>
            <span className="tag">C++ / DSA</span>
            <span className="tag">Full-Stack</span>
          </div>

          <p className="bio">
            Third-Year Student in Cyber Security at Parul Institute of
            Engineering and Technology. Passionate about web development(MERN
            stack). I create intuitive and aesthetic user experiences by
            combining design and development.
          </p>

          <section className="education-section">
            <h2 className="section-title">My Education</h2>

            <div className="timeline-container">
              {educationData.map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>{item.school}</h3>
                      <span className="timeline-date">{item.date}</span>
                    </div>
                    <p>{item.degree}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="cv-button" >
              View my Resume<span>↗</span>
            </button>
          </section>
        </div>
      </section>
    </div>
  );
}
