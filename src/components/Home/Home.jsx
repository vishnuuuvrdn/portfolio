import { useState, useEffect, useRef } from "react";
import "./Home.css";
import bgImage from "../../assets/background.webp";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoIosMail, IoIosArrowDown } from "react-icons/io";

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="home-container" id="home">
      <div className="home-bg">
        <img src={bgImage} alt="background" />
      </div>

      {!isMobile && (
        <div className="home-contact-icons">
          <span className="icon">
            <a
              href="https://github.com/vishnuuuvrdn"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare size={30} />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://linkedin.com/in/vishnuuuvrdn/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </span>
          <span className="icon">
            <a href="mailto:vishnuvardhan9376@gmail.com">
              <IoIosMail size={30} />
            </a>
          </span>
        </div>
      )}

      <div className="home-title">
        <h1>Vishnu Vardhan</h1>
      </div>

      <div className="scroll-down">
          <a href="#about" className="arrow">
            <IoIosArrowDown size={25} />
          </a>
      </div>
    </div>
  );
}
