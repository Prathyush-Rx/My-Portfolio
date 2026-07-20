# A. Prathyush — Portfolio (React)

This is your original HTML/CSS/JS portfolio converted to a React app, built with Vite.

## Structure
- `src/App.jsx` – top-level layout, assembles all sections
- `src/components/` – one component per section (Navbar, Hero, StatsBar, About, EducationProjects, Skills, Resume, Contact, Footer)
- `src/useScrollReveal.js` – custom hook replicating the original scroll-reveal `IntersectionObserver` logic
- `src/index.css` – your original stylesheet, ported as-is (same class names, same design)
- `public/profile.jpg` – your profile photo, extracted from the base64 image embedded in the original HTML

## Getting started
```bash
npm install
npm run dev       # start local dev server
npm run build     # production build (outputs to dist/)
npm run preview   # preview the production build
```

## Note about the resume PDF
The original file linked to `My Resume/A_PRATHYUSH_Resume.pdf`, but that PDF wasn't included in your upload, so it wasn't available to bring over.
Drop your resume PDF into `public/resume/A_PRATHYUSH_Resume.pdf` and the "View Resume" / "Download Resume" buttons on the Resume section will work immediately — no code changes needed.

## What changed vs. the original
- Same design, same CSS, same animations (scroll reveal, hero fade-ins, cube float, pulse dot, etc.) — nothing visual was redesigned.
- `class` → `className`, `onclick` → `onClick`, inline `style="..."` strings → JS style objects (React conventions).
- The old `<script>` at the bottom (scroll reveal, active nav link, hamburger toggle, navbar shadow) was rewritten as React hooks inside `Navbar.jsx` and `useScrollReveal.js`.
- The embedded base64 profile image was extracted into `public/profile.jpg` as a real file, referenced via `/profile.jpg`.
