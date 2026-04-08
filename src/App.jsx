import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from './components/Contact/Contact';
import ResumeViewer from "./components/About/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function MainPage() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Resume" element={<ResumeViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
