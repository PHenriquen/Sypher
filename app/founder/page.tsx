import type { Metadata } from "next";
import Link from "next/link";
import { founderLinks } from "../../src/brand";
import { SiteFooter } from "../../src/components/SiteFooter";
import { SiteHeader } from "../../src/components/SiteHeader";

export const metadata: Metadata = { title: "Founder" };

const professionalLinks = [
  { label: "Portfolio", href: founderLinks.portfolio },
  { label: "GitHub", href: founderLinks.github },
  { label: "LinkedIn", href: founderLinks.linkedin },
];

export default function FounderPage() {
  return (
    <main>
      <SiteHeader />
      <section className="detail-hero shell founder-hero">
        <p className="eyebrow">Founder / personal identity</p>
        <div className="detail-hero-grid founder-grid">
          <div>
            <h1>Pedro Nogueira</h1>
            <p>Sypher is the company identity. The founder profile connects the professional portfolio, code and career presence without turning the company site into a personal profile.</p>
            <div className="hero-actions">
              {professionalLinks.map((link, index) => (
                <a className={`button ${index === 0 ? "primary" : "secondary"}`} href={link.href} key={link.label} target="_blank" rel="noreferrer">
                  {link.label} ↗
                </a>
              ))}
              <Link className="button secondary" href="/after-hours">After Hours</Link>
            </div>
          </div>
          <div className="founder-seal"><span>Founder</span><strong>PN</strong><small>Personal / professional</small></div>
        </div>
      </section>

      <section className="section shell founder-boundary">
        <div>
          <p className="section-index">Professional</p>
          <h2>Portfolio</h2>
          <p>Career, technical skills, education and individual professional work belong in the personal portfolio.</p>
        </div>
        <div>
          <p className="section-index">Company</p>
          <h2>Sypher</h2>
          <p>Divisions, products, company research and the long-term technology architecture belong here.</p>
        </div>
        <div>
          <p className="section-index">Personal</p>
          <h2>After Hours</h2>
          <p>Drawings, streaming, games and creator experiments are personal hobbies and are explicitly not company products.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
