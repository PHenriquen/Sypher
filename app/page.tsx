import type { CSSProperties } from "react";
import Link from "next/link";
import { company, divisions, projects } from "../src/brand";
import { IdentityMark } from "../src/components/IdentityMark";
import { SiteFooter } from "../src/components/SiteFooter";
import { SiteHeader } from "../src/components/SiteHeader";

function accentStyle(color: string) {
  return { "--accent": color } as CSSProperties;
}

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell" id="top">
        <div className="hero-copy-block">
          <p className="eyebrow">{company.strapline}</p>
          <h1>Build systems.<br />Create products.<br /><span>Explore beyond software.</span></h1>
          <p className="hero-copy">{company.description}</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Explore the work</a>
            <Link className="button secondary" href="/brand">Open brand system</Link>
          </div>
        </div>

        <div className="hero-mark" aria-label="Sypher parent mark">
          <IdentityMark src="/brand/sypher.svg" alt="Sypher parent mark" size="lg" />
          <div className="hero-mark-caption">
            <span>Parent identity</span>
            <strong>Sypher</strong>
          </div>
        </div>

        <div className="hero-system" aria-label="Sypher division spectrum">
          {divisions.map((division) => (
            <span key={division.slug} style={{ backgroundColor: division.color }} title={division.name} />
          ))}
        </div>
      </section>

      <section className="statement shell" id="company">
        <p className="section-index">01 / Architecture</p>
        <div>
          <h2>One company. Distinct disciplines.</h2>
          <p>{company.principle}</p>
          <div className="company-principles">
            <span>Build proprietary products</span>
            <span>Connect digital and physical</span>
            <span>Research before scale</span>
          </div>
        </div>
      </section>

      <section className="section shell" id="divisions">
        <div className="section-heading">
          <p className="section-index">02 / Divisions</p>
          <div>
            <h2>A clear lineage for every kind of work.</h2>
            <p className="section-copy">Each division owns a domain, color and visual behavior. They are related through geometry and discipline rather than one logo repeated six times.</p>
          </div>
        </div>

        <div className="division-grid">
          {divisions.map((division, index) => (
            <Link className={`division-card division-${division.slug}`} href={`/divisions/${division.slug}`} key={division.slug} style={accentStyle(division.color)}>
              <div className="division-topline">
                <span>0{index + 1}</span>
                <IdentityMark src={division.mark} alt={`${division.name} mark`} size="sm" />
              </div>
              <p className="division-brand">Sypher</p>
              <h3>{division.name}</h3>
              <p className="division-focus">{division.focus}</p>
              <p className="division-description">{division.role}</p>
              <div className="division-meta">
                <span>{division.markName}</span>
                <strong>{division.motif}</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section projects-section shell" id="projects">
        <div className="section-heading">
          <p className="section-index">03 / Products & work</p>
          <div>
            <h2>The company should be visible through what it builds.</h2>
            <p className="section-copy">Products keep their own names and marks. Sypher acts as the lineage and endorsement behind them.</p>
          </div>
        </div>

        <div className="project-list">
          {projects.map((project) => {
            const division = divisions.find((item) => item.slug === project.divisionSlug);
            return (
              <Link className="project-row" href={`/projects/${project.slug}`} key={project.slug} style={accentStyle(project.accent)}>
                <div className="project-identity">
                  <IdentityMark src={project.mark} alt={`${project.name} mark`} size="sm" />
                  <div>
                    <p>{division?.name}</p>
                    <h3>{project.name}</h3>
                  </div>
                </div>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.tagline}</p>
                <span className="project-status">{project.status}</span>
                <span className="project-arrow">→</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="split-feature shell">
        <div className="split-panel labs-panel" style={accentStyle("#E53935")}>
          <p className="section-index">04 / Labs</p>
          <IdentityMark src="/brand/divisions/labs.svg" alt="Sypher Labs mark" size="sm" />
          <h2>Ideas do not need to pretend they are products.</h2>
          <p>Labs gives experiments, prototypes and technical studies a place to exist before they earn a permanent home.</p>
          <Link href="/divisions/labs">Enter Labs →</Link>
        </div>
        <div className="split-panel personal-panel after-hours-panel" style={accentStyle("#7C4DFF")}>
          <p className="section-index">05 / Founder</p>
          <IdentityMark src="/brand/after-hours.svg" alt="After Hours mark" size="sm" />
          <h2>Company work and personal work can coexist without being confused.</h2>
          <p>Art, streaming and creator experiments live in After Hours: clearly personal, clearly outside the company divisions.</p>
          <Link href="/after-hours">Open After Hours →</Link>
        </div>
      </section>

      <section className="manifesto shell">
        <p className="section-index">06 / Direction</p>
        <blockquote>Start with software. Earn the right to expand. Keep the architecture broad enough for the things we do not know how to build yet.</blockquote>
      </section>

      <SiteFooter />
    </main>
  );
}
