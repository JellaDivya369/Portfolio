import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesBg from './components/ParticlesBg';

function App() {
  return (
    <>
      <ParticlesBg />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
