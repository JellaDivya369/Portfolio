import { FaReact, FaNodeJs, FaPython, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiDjango, SiMongodb, SiPostman, SiHtml5, SiCss } from 'react-icons/si';
import { TbApi, TbBrain, TbDatabase } from 'react-icons/tb';

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Django', icon: <SiDjango /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'DynamoDB', icon: <TbDatabase /> },
  { name: 'REST APIs', icon: <TbApi /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <SiCss /> },
  { name: 'LLMs', icon: <TbBrain /> },
  { name: 'Postman', icon: <SiPostman /> },
];

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-heading">
        <span className="num">02.</span> Skills & Technologies
      </h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
