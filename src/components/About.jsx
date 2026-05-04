export default function About() {
  return (
    <section id="about">
      <h2 className="section-heading">
        <span className="num">01.</span> About Me
      </h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            Hello! I'm <span className="highlight">Divya</span>, a full-stack developer based in 
            <span className="highlight"> Hyderabad, India</span>. I enjoy building things that live on the 
            internet — from complex SaaS platforms to sleek web applications.
          </p>
          <p>
            Currently, I work as a <span className="highlight">Software Engineer at Today's Dental Services</span>, 
            where I build and maintain a multi-tenant SaaS platform serving <span className="highlight">70+ dental 
            clinics</span> across the US. My work spans marketing automation (social media bulk publishing, 
            Google Ads), HR management (shift scheduling, payroll dashboards), and third-party API integrations.
          </p>
          <p>
            Previously, I worked at <span className="highlight">Innovon.AI Technologies</span> building 
            AI-powered claims portals and expense trackers using Django, Python, and LLMs.
          </p>
          <p>
            I hold a <span className="highlight">B.Tech in Computer Science</span> from Sree Chaithanya 
            Institute of Technological Sciences (CGPA: 7.33).
          </p>
        </div>
        <div className="about-image">
          <img src={`${import.meta.env.BASE_URL}profile.png`} alt="Jella Divya" />
        </div>
      </div>
    </section>
  );
}
