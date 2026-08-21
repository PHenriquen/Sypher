import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { divisions, projects } from "../../src/brand";
import { IdentityMark } from "../../src/components/IdentityMark";
import { SiteFooter } from "../../src/components/SiteFooter";
import { SiteHeader } from "../../src/components/SiteHeader";

export const metadata: Metadata = { title: "Brand system" };

function accentStyle(color: string) {
  return { "--accent": color } as CSSProperties;
}

export default function BrandPage() {
  return (
    <main>
      <SiteHeader />
      <section className="detail-hero shell">
        <p className="eyebrow">Identity system / v2</p>
        <div className="detail-hero-grid">
          <div>
            <h1>Related by rules.<br />Not by repetition.</h1>
            <p>The parent identity stays monochrome and corporate. Divisions own their color, mark and title behavior. Products stay recognizable on their own.</p>
          </div>
          <IdentityMark src="/brand/sypher.svg" alt="Sypher parent mark" size="lg" />
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="section-index">01 / Parent</p>
          <div>
            <h2>Sypher</h2>
            <p className="section-copy">The parent mark remains monochrome, geometric and intentionally neutral so the company can expand across software, AI, hardware, research and interactive work without being visually trapped in one field.</p>
          </div>
        </div>
        <div className="palette-row neutral-palette">
          <div><i style={{ background: "#07090D" }} /><span>Obsidian</span><code>#07090D</code></div>
          <div><i style={{ background: "#0D1016" }} /><span>Carbon</span><code>#0D1016</code></div>
          <div><i style={{ background: "#F4F6F8" }} /><span>Porcelain</span><code>#F4F6F8</code></div>
          <div><i style={{ background: "#919AA8" }} /><span>Steel</span><code>#919AA8</code></div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="section-index">02 / Division marks</p>
          <div>
            <h2>Distinct disciplines, one standard.</h2>
            <p className="section-copy">Intelligence is blue, Products green, Labs red and Interactive black/yellow. Systems and Engineering keep their existing technical lineages. The marks are related by compact geometry, not by copying one silhouette.</p>
          </div>
        </div>
        <div className="brand-grid">
          {divisions.map((division) => (
            <article className={`brand-card division-${division.slug}`} key={division.slug} style={accentStyle(division.color)}>
              <IdentityMark src={division.mark} alt={`${division.name} mark`} size="md" />
              <div>
                <p className="division-brand">Sypher</p>
                <h3>{division.name}</h3>
                <strong>{division.markName}</strong>
                <p>{division.tone}</p>
                <code>{division.color}</code>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="section-index">03 / Personal identity</p>
          <div>
            <h2>After Hours stays outside the company divisions.</h2>
            <p className="section-copy">Purple is reserved for the founder's personal creator space. The identity can be expressive without making streaming, art or creator experiments look like Sypher products.</p>
          </div>
        </div>
        <Link className="after-hours-brand-card" href="/after-hours" style={accentStyle("#7C4DFF")}>
          <IdentityMark src="/brand/after-hours.svg" alt="After Hours mark" size="md" />
          <div><span>Personal / non-company</span><strong>After Hours</strong><p>Art · Streaming · Creator experiments</p></div>
        </Link>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="section-index">04 / Project marks</p>
          <div>
            <h2>Products are endorsed, not swallowed.</h2>
            <p className="section-copy">A project mark can be more expressive than its division. The division creates lineage; it does not replace project identity.</p>
          </div>
        </div>
        <div className="project-mark-grid">
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} className="project-mark-card" key={project.slug} style={accentStyle(project.accent)}>
              <IdentityMark src={project.mark} alt={`${project.name} mark`} size="md" />
              <div><strong>{project.name}</strong><span>{project.category}</span></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section shell rules-grid-section">
        <p className="section-index">05 / Rules</p>
        <div className="rules-grid">
          <article><span>01</span><h3>Silhouette first</h3><p>The mark must work before glow, blur or animation.</p></article>
          <article><span>02</span><h3>Color means lineage</h3><p>Blue, green, red and yellow are signatures with purpose, not decorative gradients.</p></article>
          <article><span>03</span><h3>Title has a job</h3><p>Sypher stays corporate; Interactive can feel pixel/game-native; Labs stays technical; After Hours stays creator-led.</p></article>
          <article><span>04</span><h3>Product autonomy</h3><p>Illume, Nodi, SincroHub and Réquiem should remain recognizable without the parent logo beside them.</p></article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
