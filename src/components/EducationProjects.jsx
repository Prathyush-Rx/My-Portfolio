export default function EducationProjects() {
  return (
    <section id="education">
      <div className="section-label reveal">Background</div>
      <div className="section-title reveal delay-1">Education &amp; Projects</div>
      <div className="section-line reveal delay-2"></div>
      <div className="edu-project-grid">
        {/* Education Card */}
        <div className="card reveal-left">
          <div className="card-label">Education</div>
        <div className="edu-item">
  <div className="edu-icon">🎓</div>
  <div className="edu-info">
    <strong>Vels University</strong>
    <span>Master of Computer Applications (MCA)</span>
    <span>Thiruvanmiyur, Chennai | 2026 - 2028 (Pursuing)</span>
  </div>
</div>
        <div className="edu-item">
  <div className="edu-icon">🎓</div>
  <div className="edu-info">
    <strong>SRM University Vadapalani</strong>
    <span>Bachelor of Computer Science</span>
    <span> 2023 - 2026 | Graduated</span>
  </div>
</div>
        </div>

        {/* Project Card */}
        <div className="card reveal-right" id="projects" style={{ position: 'relative' }}>
          <div className="card-label">Featured Project</div>
          <div className="project-title">Personal Portfolio Website</div>
          <p className="project-desc">
           A modern and responsive portfolio website developed using React,
          JavaScript, HTML and CSS to showcase my education, technical skills,
          projects and contact information with a clean user experience.
          </p>
          <ul className="project-features">
          <li>Responsive Design</li>
          <li>Reusable React Components</li>
          <li>Modern Glassmorphism UI</li>
          <li>Smooth Animations</li>
          <li>Clean & User-Friendly Interface</li>
          </ul>
          <div className="project-icon-wrap">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none">
              <rect x="10" y="20" width="80" height="70" rx="8" stroke="#0d6efd" strokeWidth="4" />
              <rect x="10" y="20" width="80" height="18" rx="8" fill="#0d6efd" opacity="0.4" />
              <rect x="25" y="52" width="50" height="6" rx="3" fill="#0d6efd" opacity="0.6" />
              <rect x="25" y="65" width="35" height="6" rx="3" fill="#0d6efd" opacity="0.4" />
              <rect x="25" y="78" width="42" height="6" rx="3" fill="#0d6efd" opacity="0.3" />
              <circle cx="25" cy="30" r="5" stroke="#00d4ff" strokeWidth="2" />
              <circle cx="75" cy="30" r="5" stroke="#00d4ff" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
