import { useState } from 'react';

const jobs = [
  {
    company: "Today's Dental Services",
    title: 'Software Engineer',
    period: 'June 2025 — Present',
    subtitle: 'Multi-tenant SaaS platform for dental practice management, serving 70+ clinics across the US.',
    modules: [
      {
        name: 'Marketing Module',
        items: [
          'Built a design studio where clinics create one social media template and it auto-fills each clinic\'s name, logo, and contact — turning 1 design into 70+ personalized versions instantly',
          'Added bulk publishing to Facebook, Instagram, LinkedIn, and Google Business across all locations in a single click',
          'Developed Google Ads management with campaign creation, location-based targeting, budget controls, and performance tracking',
        ],
      },
      {
        name: 'HR Module',
        items: [
          'Built shift scheduling with timezone handling across US states — replaced Excel tracking with a centralized calendar for all clinic locations',
          'Created payroll dashboards comparing scheduled vs actual hours with overtime and advance pay calculations',
          'Added Advance Pay with approval workflows and automatic tracking — eliminated back-and-forth emails between staff and HR',
          'Set up automatic shift removal when leave is approved — no more double-bookings on the schedule',
        ],
      },
      {
        name: 'Dentipal',
        items: [
          'Built a job marketplace for dental clinics to post shifts, review applicants, negotiate rates, and hire — all in one place',
        ],
      },
    ],
    tech: 'React, TypeScript, Node.js, AWS (Lambda, DynamoDB, S3, SES, CDK), Ayrshare API, Open Dental API',
  },
  {
    company: 'Innovon.AI Technologies',
    title: 'Fullstack Developer',
    period: 'Aug 2024 — May 2025',
    subtitle: '',
    modules: [
      {
        name: '',
        items: [
          'Built a claims portal that uses AI to pull data from uploaded insurance documents — replacing manual data entry for Home & Auto claims',
          'Created an expense tracker that reads receipts using AI, stores them per user, and generates downloadable Excel/CSV/PDF reports with date filters',
        ],
      },
    ],
    tech: 'Django, Python, React.js, MongoDB, LLMs, Postman',
  },
  {
    company: 'Scintillate Solutions',
    title: 'Frontend Developer',
    period: 'Mar 2024 — Jul 2024',
    subtitle: '',
    modules: [
      {
        name: '',
        items: [
          'Contributed to web application development and gained experience in professional software engineering practices',
        ],
      },
    ],
    tech: 'React.js, JavaScript, HTML, CSS',
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const job = jobs[activeTab];

  return (
    <section id="experience">
      <h2 className="section-heading">
        <span className="num">03.</span> Where I've Worked
      </h2>
      <div className="experience-tabs">
        <div className="tab-list" role="tablist">
          {jobs.map((j, i) => (
            <button
              key={j.company}
              className={`tab-btn ${i === activeTab ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
              role="tab"
            >
              {j.company}
            </button>
          ))}
        </div>
        <div className="tab-content" role="tabpanel">
          <h3>
            {job.title} <span className="company">@ {job.company}</span>
          </h3>
          <span className="period">{job.period}</span>
          {job.subtitle && <p className="subtitle">{job.subtitle}</p>}
          {job.modules.map((mod, idx) => (
            <div key={idx}>
              {mod.name && <div className="module-title">{mod.name}</div>}
              <ul>
                {mod.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <p className="tech-used">Tech: {job.tech}</p>
        </div>
      </div>
    </section>
  );
}
