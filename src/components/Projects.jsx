import { FiFolder } from 'react-icons/fi';

const projects = [
  {
    title: 'Multi-Tenant SaaS Platform',
    description: 'A comprehensive dental practice management platform serving 70+ clinics with marketing automation, HR management, shift scheduling, and payroll analytics.',
    tech: ['React', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'S3'],
  },
  {
    title: 'Design Studio — Bulk Publisher',
    description: 'Clinics create one social media template that auto-fills each clinic\'s branding — then bulk publish to Facebook, Instagram, LinkedIn, and Google Business in one click.',
    tech: ['React', 'Ayrshare API', 'Canvas', 'Node.js'],
  },
  {
    title: 'AI Claims Portal',
    description: 'An intelligent portal that uses AI to extract data from uploaded insurance documents, replacing manual data entry for Home & Auto insurance claims processing.',
    tech: ['Django', 'Python', 'LLMs', 'React.js', 'MongoDB'],
  },
  {
    title: 'AI Expense Tracker',
    description: 'Reads receipts using AI/LLMs, stores expenses per user, and generates downloadable Excel/CSV/PDF reports with customizable date filters.',
    tech: ['Python', 'React', 'MongoDB', 'LLMs'],
  },
  {
    title: 'Dentipal — Job Marketplace',
    description: 'A job marketplace for dental clinics to post shifts, review applicants, negotiate rates, and hire dental professionals — all in one platform.',
    tech: ['React', 'TypeScript', 'AWS', 'Open Dental API'],
  },
  {
    title: 'Payroll & HR Dashboard',
    description: 'Shift scheduling with timezone handling across US states, payroll dashboards with overtime calculations, and advance pay approval workflows.',
    tech: ['React', 'Node.js', 'DynamoDB', 'AWS CDK'],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-heading">
        <span className="num">04.</span> Things I've Built
      </h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <div className="card-top">
              <FiFolder className="folder-icon" />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
