const SKILLS = [
  "React.js",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Git & GitHub",
  "MS Office",
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label reveal">Technical</div>
      <div className="section-title reveal delay-1">My Skills</div>
      <div className="section-line reveal delay-2"></div>
      <div className="skills-card reveal delay-3">
        <div className="skills-tags">
          {SKILLS.map((skill) => (
            <span className="skill-tag" key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
