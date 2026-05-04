import { TypeAnimation } from 'react-type-animation';
import { FiLinkedin, FiMail } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <p className="hero-greeting">Hello 👋, This is</p>
      <h1 className="hero-name">Jella Divya.</h1>
      <h2 className="hero-tagline">
        I build{' '}
        <TypeAnimation
          sequence={[
            'scalable SaaS platforms.', 2000,
            'full-stack web apps.', 2000,
            'AI-powered solutions.', 2000,
            'beautiful user interfaces.', 2000,
          ]}
          wrapper="span"
          className="typing-text"
          repeat={Infinity}
          speed={50}
        />
      </h2>
      <p className="hero-description">
        Full-stack developer with 2+ years of experience in React, Node.js, Django, Python, and AWS. 
        I've built a multi-tenant SaaS platform serving 70+ dental clinics across the US — from marketing 
        automation to HR management and payroll analytics.
      </p>
      <div className="hero-buttons">
        <a href="#contact" className="btn-primary btn-filled">
          <FiMail /> Get In Touch
        </a>
        <a href="https://linkedin.com/in/jella-divya" target="_blank" rel="noopener noreferrer" className="btn-primary">
          <FiLinkedin /> LinkedIn
        </a>
      </div>
    </section>
  );
}
