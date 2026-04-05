import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';


function App() {

  return (
    <div className='container'>
      <Navbar /> 
      <main className="content">
        <section id='home'>
          <Home />
        </section>

        <section id='about'>
          <About />
        </section>

        <section id='projects'>
          <Projects />
        </section>
      </main>
    </div>
  )
}

export default App
