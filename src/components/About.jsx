export default function About() {
  return (
    <section id="about">
      <div className="section-label reveal">Get to know me!</div>
      <div className="section-title reveal delay-1">About Me</div>
      <div className="section-line reveal delay-2"></div>
      <div className="about-grid">
        <div className="about-text reveal-left">
          <p>
           I am a Bachelor of Computer Science graduate from SRM University Vadapalani 
           and currently pursuing my Master of Computer Applications (MCA) at Vels University.
            I enjoy creating modern, responsive web applications using React and JavaScript 
            while continuously improving my Full Stack Development skills.
          </p>
          <p>
           My goal is to build high-quality software, solve real-world problems,
          and grow as a Full Stack Developer. 
          I am always eager to learn new technologies and improve my technical
          and problem-solving skills.
          </p>
        </div>
        <div className="about-3d-icon reveal-right">
          <div className="cube-wrap">
            <div className="cube-glow"></div>
            <svg className="cube-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="cubeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0d6efd" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="cubeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0a58ca" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0d6efd" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="cubeGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#0d6efd" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              {/* Cube top face */}
              <polygon points="100,30 160,65 100,100 40,65" fill="url(#cubeGrad1)" stroke="#00d4ff" strokeWidth="1.5" strokeOpacity="0.8" />
              {/* Cube left face */}
              <polygon points="40,65 100,100 100,160 40,125" fill="url(#cubeGrad2)" stroke="#0d6efd" strokeWidth="1.5" strokeOpacity="0.6" />
              {/* Cube right face */}
              <polygon points="160,65 100,100 100,160 160,125" fill="url(#cubeGrad3)" stroke="#00d4ff" strokeWidth="1.5" strokeOpacity="0.6" />
              {/* Code icon */}
              <text x="100" y="130" textAnchor="middle" fontFamily="monospace" fontSize="28" fontWeight="bold" fill="rgba(255,255,255,0.9)">{'</>'}</text>
              {/* Glow circles */}
              <circle cx="100" cy="30" r="4" fill="#00d4ff" opacity="0.9" />
              <circle cx="160" cy="65" r="4" fill="#00d4ff" opacity="0.9" />
              <circle cx="40" cy="65" r="4" fill="#00d4ff" opacity="0.9" />
              <circle cx="100" cy="160" r="4" fill="#0d6efd" opacity="0.9" />
              <circle cx="40" cy="125" r="4" fill="#0d6efd" opacity="0.7" />
              <circle cx="160" cy="125" r="4" fill="#0d6efd" opacity="0.7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
