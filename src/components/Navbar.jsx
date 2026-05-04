import { useState, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';

const navItems = [
  { num: '01', label: 'About', href: '#about' },
  { num: '02', label: 'Skills', href: '#skills' },
  { num: '03', label: 'Experience', href: '#experience' },
  { num: '04', label: 'Projects', href: '#projects' },
  { num: '05', label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-logo">
          {'< '}<span>Divya</span>{' />'}
        </a>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.num}>
              <a href={item.href}>
                <span className="num">{item.num}.</span>{item.label}
              </a>
            </li>
          ))}
          <li>
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Jella_Divya_Resume.pdf">
              <button className="resume-btn"><FiDownload /> Download Resume</button>
            </a>
          </li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a key={item.num} href={item.href} onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            <span style={{ color: 'var(--accent)', marginRight: 8 }}>{item.num}.</span>{item.label}
          </a>
        ))}
        <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Jella_Divya_Resume.pdf">
          <button className="resume-btn" style={{ marginTop: 16 }}><FiDownload /> Download Resume</button>
        </a>
      </div>
    </>
  );
}
