import { FiMail, FiLinkedin } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';
import { TbCertificate } from 'react-icons/tb';

export default function Contact() {
  return (
    <>
      {/* Education */}
      <section id="education">
        <h2 className="section-heading">
          <span className="num">05.</span> Education
        </h2>
        <div className="education-card">
          <FaGraduationCap className="edu-icon" />
          <div>
            <h3>B.Tech in Computer Science and Engineering</h3>
            <p className="institution">Sree Chaithanya Institute of Technological Sciences</p>
            <span className="edu-meta">2019 — 2023 • CGPA: 7.33</span>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications">
        <h2 className="section-heading">
          <span className="num">06.</span> Certifications
        </h2>
        <div className="cert-grid">
          {[
            { name: 'LangGraph Course', org: 'LangChain Academy' },
            { name: 'Microsoft Azure Data Fundamentals', org: 'Microsoft' },
            { name: 'Full Stack Web Development', org: 'Edunet Foundation' },
          ].map((cert) => (
            <div key={cert.name} className="cert-card">
              <TbCertificate className="cert-icon" />
              <div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-org">{cert.org}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Available for new projects */}
      <section id="available">
        <div className="available-card">
          <div className="available-status">
            <span className="status-dot" />
            <span className="status-text">Available for new projects</span>
          </div>
          <p className="available-description">
            I'm currently open to new opportunities and collaborations. Let's connect to
            discuss technology, innovation, and impactful projects.
          </p>
          <div className="available-details">
            <div className="detail-row">
              <span className="detail-label">Focus:</span>
              <span className="detail-value">Full-Stack Development, AI-Powered Apps, SaaS Platforms & Cloud Architecture</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Specialties:</span>
              <span className="detail-value">React, Node.js, Python, Django, AWS, DynamoDB, LLMs, TypeScript</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <p className="overline">07. What's Next?</p>
        <h2>Get In Touch</h2>
        <p>
          I'm currently open to new opportunities. Whether you have a question, a project idea, 
          or just want to say hi — my inbox is always open!
        </p>
        <a href="mailto:jelladivya369@gmail.com" className="btn-primary btn-filled">
          <FiMail /> Say Hello
        </a>
        <div className="contact-links">
          <a href="mailto:jelladivya369@gmail.com" className="contact-link">
            <FiMail className="icon" /> jelladivya369@gmail.com
          </a>
          <a href="https://linkedin.com/in/jella-divya" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FiLinkedin className="icon" /> LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="social-links">
          <a href="https://linkedin.com/in/jella-divya" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href="mailto:jelladivya369@gmail.com" aria-label="Email"><FiMail /></a>
        </div>
        <p>Designed & Built by <a href="#">Jella Divya</a></p>
      </footer>
    </>
  );
}
