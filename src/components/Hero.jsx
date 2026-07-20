export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow-left"></div>
      <div className="hero-glow-right"></div>

      {/* Circuit SVG background */}
      <div className="circuit-bg">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="100" x2="300" y2="100" stroke="#0d6efd" strokeWidth="1" />
          <line x1="300" y1="100" x2="300" y2="200" stroke="#0d6efd" strokeWidth="1" />
          <circle cx="300" cy="100" r="4" fill="#0d6efd" />
          <line x1="300" y1="200" x2="600" y2="200" stroke="#0d6efd" strokeWidth="1" />
          <circle cx="600" cy="200" r="4" fill="#0d6efd" />
          <line x1="600" y1="200" x2="600" y2="50" stroke="#0d6efd" strokeWidth="1" />
          <line x1="600" y1="50" x2="900" y2="50" stroke="#0d6efd" strokeWidth="1" />
          <line x1="100" y1="300" x2="100" y2="500" stroke="#00d4ff" strokeWidth="1" />
          <circle cx="100" cy="300" r="4" fill="#00d4ff" />
          <line x1="100" y1="500" x2="400" y2="500" stroke="#00d4ff" strokeWidth="1" />
          <circle cx="400" cy="500" r="4" fill="#00d4ff" />
          <line x1="400" y1="500" x2="400" y2="350" stroke="#00d4ff" strokeWidth="1" />
          <line x1="400" y1="350" x2="800" y2="350" stroke="#00d4ff" strokeWidth="1" />
          <line x1="700" y1="0" x2="700" y2="150" stroke="#0d6efd" strokeWidth="1" />
          <circle cx="700" cy="150" r="4" fill="#0d6efd" />
          <line x1="700" y1="150" x2="1000" y2="150" stroke="#0d6efd" strokeWidth="1" />
          <line x1="200" y1="400" x2="500" y2="400" stroke="#00d4ff" strokeWidth="1" />
          <circle cx="200" cy="400" r="4" fill="#00d4ff" />
        </svg>
      </div>

      <div className="hero-content">
        <h1 className="hero-name">A. PRATHYUSH</h1>
        <div className="hero-badge">React Developer & Full Stack Learner</div>
        <p className="hero-desc">
          A Passionate React Developer and Full Stack learner with a strong foundation in Computer Science. 
          Dedicated to building modern, responsive web applications
          and continuously learning new technologies to create impactful digital solutions.
        </p>
        <div className="hero-btns">
          <a href="#resume" className="btn-primary">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>
            View Resume
          </a>
          <a href="https://github.com/Prathyush-Rx" target="_blank" rel="noreferrer" className="btn-outline">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/prathyush-a-343560383" target="_blank" rel="noreferrer" className="btn-outline">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-image-wrap">
        <div className="hero-img-frame">
          <div className="hero-img-inner">
            <img src="/profile.jpg" alt="A. Prathyush" />
          </div>
          <div className="hero-available">
            <div className="pulse-dot"></div>
            Available for Opportunities
          </div>
        </div>
      </div>
    </section>
  )
}
