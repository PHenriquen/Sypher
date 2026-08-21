import type { CSSProperties, Metadata } from "react";
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
        <p className="eyebrow">Identity system / v1</p>
        <div className="detail-hero-grid">
          <div>
            <h1>Related by rules.<br />Not by repetition.</h1>
            <p>The parent identity stays monochrome. Divisions own their color and visual behavior. Products stay recognizable on their own.</p>
          </div>
          <IdentityMark src="/brand/sypher.svg" alt="Sypher Cipher Ribbon mark" size="lg" />
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="section-index">01 / Parent</p>
          <div>
            <h2>Cipher Ribbon</h2>
            <p className="section-copy">Two opposing angular ribbons create an abstract S. The central diamond cut behaves like a cipher interruption/key. The mark is monochrome so it can sit above all divisions.</p>
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
            <h2>Six disciplines, six visual behaviors.</h2>
            <p className="section-copy">Every mark uses compact geometry and negative space, but each expresses a different domain.</p>
          </div>
        </div>
        <div className="brand-grid">
          {divisions.map((division) => (
            <article className="brand-card" key={division.slug} style={accentStyle(division.color)}>
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
          <p className="section-index">03 / Project marks</p>
          <div>
            <h2>Products are endorsed, not swallowed.</h2>
            <p className="section-copy">A product mark can be more expressive than its division. The division creates lineage; it does not replace product identity.</p>
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
        <p className="section-index">04 / Rules</p>
        <div className="rules-grid">
          <article><span>01</span><h3>Silhouette first</h3><p>The mark must work before glow, blur or animation.</p></article>
          <article><span>02</span><h3>One accent</h3><p>Division color is a signature, not an excuse for permanent gradients.</p></article>
          <article><span>03</span><h3>No AI clichés</h3><p>No brain, robot face, chat bubble, literal atom or generic sparkle as a core identity.</p></article>
          <article><span>04</span><h3>Product autonomy</h3><p>Illume, Nodi, SincroHub and Réquiem should remain recognizable without the parent logo beside them.</p></article>
        </div>
      </section>

      <section className="manifesto shell compact-manifesto">
        <p className="section-index">Documentation</p>
        <blockquote>The repository is the source of truth: vectors, tokens, lineage and endorsement rules live with the code.</blockquote>
      </section>
      <SiteFooter />
    </main>
  );
}
