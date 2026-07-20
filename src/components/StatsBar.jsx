import { Fragment } from 'react'

const STATS = [
  {
    icon: "🎯",
    title: "MCA Pursuing",
    subtitle: "Vels University",
  },
  {
    icon: "⚛️",
    title: "React Developer",
    subtitle: "Full Stack Learner",
  },
  {
    icon: "💼",
    title: "Personal Portfolio",
    subtitle: "Built with React.js",
  },
  {
    icon: "🎓",
    title: "Bachelor of Computer Science",
    subtitle: "Graduated • SRM University Vadapalani",
  },
];

export default function StatsBar() {
  return (
    <div className="stats-bar reveal">
      {STATS.map((stat, i) => (
        <Fragment key={stat.title}>
          <div className="stat-item">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-text">
              <strong>{stat.title}</strong>
              <span>{stat.subtitle}</span>
            </div>
          </div>
          {i < STATS.length - 1 && <div className="stat-divider"></div>}
        </Fragment>
      ))}
    </div>
  )
}
