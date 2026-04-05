import { useState, useEffect } from "react";
import "./Home.css";
import bgImage from "../../assets/background.webp";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useRef } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const aboutSection = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToAbout = () => {
    aboutSection.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="home-container">
      <div className="home-bg">
        <img src={bgImage} alt="Batman image"></img>
      </div>
      {!isMobile && (
        <div className="home-contact-icons">
          <span className="icon">
            <a href="https://github.com/vishnuuuvrdn" target="_blank">
              <FaGithubSquare size={30} />
            </a>
          </span>
          <span className="icon">
            <a href="https://linkedin.com/in/vishnuuuvrdn/" target="_blank">
              <FaLinkedin size={30} />
            </a>
          </span>
          <span className="icon">
            <a href="mailto:vishnuvardhan9376@gmail.com" target="_blank">
              <IoIosMail size={30} />
            </a>
          </span>
        </div>
      )}
      <div className="home-title">
        <h1>Vishnu Vardhan</h1>
      </div>

      <div className="scroll-down" onClick={scrollToAbout}>
        <span className="arrow">
          <IoIosArrowDown size={25} />
        </span>
      </div>
    </div>
  );
}
