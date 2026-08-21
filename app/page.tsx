import type { CSSProperties } from "react";
import { divisions, projects } from "../src/brand";

const founderUrl = "https://website-kohl-six-11.vercel.app/";

function accentStyle(color: string) {
  return { "--accent": color } as CSSProperties;
}

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="#top" aria-label="Sypher home">SYPHER</a>
        <nav>
          <a href="#divisions">Divisions</a>
          <a href="#projects">Projects</a>
          <a href="#company">Company</a>
          <a href={founderUrl} target="_blank" rel="noreferrer">Founder</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <p className="eyebrow">Technology · Engineering · Research</p>
        <h1>Build beyond<br />a single category.</h1>
        <p className="hero-copy">
          Sypher is being shaped as a long-term technology company for products that move between software,
          intelligence, physical systems and interactive experiences.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">Explore the work</a>
          <a className="button secondary" href="#divisions">View the structure</a>
        </div>
        <div className="hero-system" aria-label="Sypher division spectrum">
          {divisions.map((division) => (
            <span key={division.slug} style={{ backgroundColor: division.color }} title={division.name} />
          ))}
        </div>
      </section>

      <section className="statement shell" id="company">
        <p className="section-index">01 / Company</p>
        <div>
          <h2>One company. Distinct disciplines.</h2>
          <p>
            The goal is not to become a generic software house. Sypher is a home for technologies and products
            with their own identity, while sharing the same standard for engineering, experimentation and long-term thinking.
          </p>
        </div>
      </section>

      <section className="section shell" id="divisions">
        <div className="section-heading">
          <p className="section-index">02 / Divisions</p>
          <h2>A clear lineage for every kind of work.</h2>
        </div>
        <div className="division-grid">
          {divisions.map((division, index) => (
            <article className="division-card" key={division.slug} style={accentStyle(division.color)}>
              <div className="division-topline">
                <span>0{index + 1}</span>
                <i aria-hidden="true" />
              </div>
              <p className="division-brand">Sypher</p>
              <h3>{division.name}</h3>
              <p className="division-focus">{division.focus}</p>
              <p className="division-description">{division.description}</p>
              <div className="division-meta">
                <span>Visual motif</span>
                <strong>{division.motif}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section shell" id="projects">
        <div className="section-heading">
          <p className="section-index">03 / Projects</p>
          <h2>The company should be visible through what it builds.</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => {
            const division = divisions.find((item) => item.name === project.division);
            return (
              <a
                className="project-row"
                href={project.href}
                key={project.name}
                target="_blank"
                rel="noreferrer"
                style={accentStyle(division?.color ?? "#ffffff")}
              >
                <div className="project-identity">
                  <span className="project-dot" />
                  <div>
                    <p>{project.division}</p>
                    <h3>{project.name}</h3>
                  </div>
                </div>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                <span className="project-status">{project.status}</span>
                <span className="project-arrow">↗</span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="manifesto shell">
        <p className="section-index">04 / Direction</p>
        <blockquote>
          Start with software. Earn the right to expand. Keep the company broad enough for the things we do not know how to build yet.
        </blockquote>
      </section>

      <footer className="footer shell">
        <div>
          <p className="wordmark footer-wordmark">SYPHER</p>
          <p>Technology company in formation.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/PHenriquen" target="_blank" rel="noreferrer">GitHub</a>
          <a href={founderUrl} target="_blank" rel="noreferrer">Founder portfolio</a>
        </div>
      </footer>
    </main>
  );
}
