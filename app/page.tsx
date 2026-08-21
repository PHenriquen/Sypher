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
    <main className="home-v2">
      <SiteHeader />

      <section className="home-hero shell" id="top">
        <div className="home-hero-grid">
          <div className="home-hero-copy">
            <div className="home-hero-kicker">
              <span>Independent technology company</span>
              <i />
              <span>2026 / in formation</span>
            </div>
            <h1>
              Technology with
              <span>a point of view.</span>
            </h1>
            <p className="home-hero-lede">
              Sypher builds proprietary software, intelligent systems, digital products and experimental technology — with one standard across every discipline.
            </p>
            <div className="home-hero-actions">
              <a className="button home-primary" href="#projects">Explore the work <span>↘</span></a>
              <Link className="button home-secondary" href="/brand">Brand system</Link>
            </div>
          </div>

          <div className="home-hero-identity" aria-label="Sypher identity">
            <div className="home-hero-orbit" aria-hidden="true" />
            <div className="home-hero-mark-frame">
              <IdentityMark src="/brand/sypher.svg" alt="Sypher parent mark" size="lg" />
            </div>
            <div className="home-identity-meta">
              <span>Parent identity</span>
              <strong>Sypher</strong>
              <small>Software · AI · Systems · Engineering</small>
            </div>
          </div>
        </div>

        <div className="home-spectrum" aria-label="Sypher division spectrum">
          {divisions.map((division, index) => (
            <Link href={`/divisions/${division.slug}`} key={division.slug} style={accentStyle(division.color)}>
              <span className="home-spectrum-index">0{index + 1}</span>
              <i />
              <strong>{division.name}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-metrics shell" aria-label="Company architecture summary">
        <article><strong>{String(divisions.length).padStart(2, "0")}</strong><span>disciplines</span></article>
        <article><strong>{String(projects.length).padStart(2, "0")}</strong><span>current projects</span></article>
        <article><strong>01</strong><span>shared standard</span></article>
        <p>{company.principle}</p>
      </section>

      <section className="home-section shell" id="divisions">
        <div className="home-section-head">
          <div>
            <p className="section-index">01 / Company architecture</p>
            <h2>Different disciplines.<br /><span>One operating system.</span></h2>
          </div>
          <p>Each division owns a domain, color, visual behavior and technical mandate. The family resemblance comes from discipline — not from repeating one logo six times.</p>
        </div>

        <div className="home-division-bento">
          {divisions.map((division, index) => (
            <Link
              href={`/divisions/${division.slug}`}
              key={division.slug}
              className={`home-division-tile home-division-${division.slug}`}
              style={accentStyle(division.color)}
            >
              <div className="home-tile-top">
                <span>0{index + 1}</span>
                <span>{division.focus}</span>
              </div>
              <div className="home-tile-mark">
                <IdentityMark src={division.mark} alt={`${division.name} mark`} size="md" />
              </div>
              <div className="home-tile-copy">
                <small>Sypher</small>
                <h3>{division.name}</h3>
                <p>{division.role}</p>
              </div>
              <div className="home-tile-footer">
                <span>{division.markName}</span>
                <span>View division ↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section home-work-section shell" id="projects">
        <div className="home-section-head home-work-head">
          <div>
            <p className="section-index">02 / Selected work</p>
            <h2>Ideas become real<br /><span>through products.</span></h2>
          </div>
          <p>Sypher is not a collection of logos. The company earns its identity through what it actually builds, tests and ships.</p>
        </div>

        <div className="home-project-grid">
          {projects.map((project, index) => {
            const division = divisions.find((item) => item.slug === project.divisionSlug);
            return (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className={`home-project-card home-project-${index + 1}`}
                style={accentStyle(project.accent)}
              >
                <div className="home-project-accent" />
                <div className="home-project-topline">
                  <span>{division?.name}</span>
                  <span>{project.status}</span>
                </div>
                <div className="home-project-mark-wrap">
                  <IdentityMark src={project.mark} alt={`${project.name} mark`} size="md" />
                </div>
                <div className="home-project-copy">
                  <p>{project.category}</p>
                  <h3>{project.name}</h3>
                  <strong>{project.tagline}</strong>
                </div>
                <span className="home-project-link">Open project ↗</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="home-operating shell">
        <div className="home-operating-intro">
          <p className="section-index">03 / How Sypher works</p>
          <h2>Research.<br />Build.<br /><span>Graduate.</span></h2>
        </div>
        <div className="home-operating-steps">
          <article>
            <span>01</span>
            <div><strong>Explore before committing.</strong><p>Labs protects unfinished ideas long enough to discover whether they deserve to become products.</p></div>
          </article>
          <article>
            <span>02</span>
            <div><strong>Give every product a lineage.</strong><p>Intelligence, Products, Systems, Engineering and Interactive create technical ownership without flattening product identity.</p></div>
          </article>
          <article>
            <span>03</span>
            <div><strong>Keep the standard shared.</strong><p>Engineering clarity, strong visual systems and deliberate scope connect the company even when the outputs are completely different.</p></div>
          </article>
        </div>
      </section>

      <section className="home-dual shell">
        <Link className="home-dual-card home-dual-labs" href="/divisions/labs" style={accentStyle("#E53935")}>
          <div className="home-dual-top"><span>Sypher / Research</span><IdentityMark src="/brand/divisions/labs.svg" alt="Sypher Labs mark" size="sm" /></div>
          <h2>Not everything needs to be a product yet.</h2>
          <p>Prototypes, technical studies and strange ideas belong somewhere before they earn a permanent home.</p>
          <strong>Enter Labs ↗</strong>
        </Link>
        <Link className="home-dual-card home-dual-hours" href="/after-hours" style={accentStyle("#7C4DFF")}>
          <div className="home-dual-top"><span>Founder / Personal</span><IdentityMark src="/brand/after-hours.svg" alt="After Hours mark" size="sm" /></div>
          <h2>The personal side stays personal.</h2>
          <p>Art, streaming and creator experiments can live beside the company without pretending to be corporate work.</p>
          <strong>Open After Hours ↗</strong>
        </Link>
      </section>

      <section className="home-manifesto shell">
        <div className="home-manifesto-line"><span>04 / Direction</span><i /></div>
        <blockquote>Start with software. Earn the right to expand. Build a company broad enough for the things we do not know how to make yet.</blockquote>
        <div className="home-manifesto-foot">
          <span>Technology</span><span>Engineering</span><span>Research</span><span>Interactive</span>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
