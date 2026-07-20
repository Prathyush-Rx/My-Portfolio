export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="section-label reveal" style={{ justifyContent: 'center' }}>My Resume</div>
      <div className="section-title reveal delay-1">View Resume</div>
      <div className="section-line reveal delay-2" style={{ margin: '0 auto 50px' }}></div>
      <div className="resume-card reveal delay-3">
        <div className="resume-icon-big">📄</div>
       <h3>A. PRATHYUSH</h3>
<p>
  React Developer • Full Stack Learner
  <br /><br />
  Building modern, responsive, and user-friendly web
  applications with React and JavaScript.
  Explore my resume to learn more about my education,
  technical skills, projects, and career goals.
</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 14 }}>
          <a
            href="/resume/A_PRATHYUSH_Resume.pdf"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
            </svg>
            View Resume
          </a>
          <a
            href="/resume/A_PRATHYUSH_Resume.pdf"
            className="btn-outline"
            download
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
