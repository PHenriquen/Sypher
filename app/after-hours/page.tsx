import type { Metadata } from "next";
import Link from "next/link";
import { IdentityMark } from "../../src/components/IdentityMark";
import { SiteFooter } from "../../src/components/SiteFooter";
import { SiteHeader } from "../../src/components/SiteHeader";

export const metadata: Metadata = { title: "After Hours" };

const personalAreas = [
  {
    index: "01",
    name: "Art",
    description: "Drawings, character studies, visual experiments and personal creative work.",
    href: null,
    cta: "Gallery in development",
  },
  {
    index: "02",
    name: "Twitch / Noguerss",
    description: "The live side of Noguerss: gameplay, streams and a more spontaneous gaming identity.",
    href: "https://www.twitch.tv/noguerss",
    cta: "Open Twitch ↗",
  },
  {
    index: "03",
    name: "YouTube / Noguerss",
    description: "An independent creator channel for more edited or editorial content. It can overlap with games without being limited to Twitch highlights or gameplay uploads.",
    href: "https://youtube.com/@noguerss",
    cta: "Open YouTube ↗",
  },
  {
    index: "04",
    name: "Creator experiments",
    description: "Future formats, TikTok or faceless/editorial experiments that remain personal media projects rather than Sypher products.",
    href: null,
    cta: "Experimental",
  },
];

export default function AfterHoursPage() {
  return (
    <main className="after-hours-page">
      <SiteHeader />
      <section className="detail-hero shell after-hours-hero">
        <div className="after-hours-lockup">
          <IdentityMark src="/brand/after-hours.svg" alt="After Hours mark" size="md" />
          <div>
            <p className="eyebrow">Personal / non-company</p>
            <h1 className="after-hours-title">After Hours</h1>
          </div>
        </div>
        <p>A deliberate boundary for the things done because they are fun, expressive or worth trying — not because they belong in a corporate division.</p>
      </section>

      <section className="section shell">
        <div className="personal-grid">
          {personalAreas.map((area) => (
            <article key={area.name}>
              <span>{area.index}</span>
              <h2>{area.name}</h2>
              <p>{area.description}</p>
              {area.href ? (
                <a href={area.href} target="_blank" rel="noreferrer">{area.cta}</a>
              ) : (
                <small>{area.cta}</small>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="personal-disclaimer shell">
        <strong>This is not a Sypher division.</strong>
        <p>After Hours is attached to the founder profile only. Content here should never be described as company R&D, client work or a Sypher product unless it actually graduates into one.</p>
        <Link href="/founder">← Back to Founder</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
