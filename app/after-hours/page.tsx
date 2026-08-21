import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../src/components/SiteFooter";
import { SiteHeader } from "../../src/components/SiteHeader";

export const metadata: Metadata = { title: "After Hours" };

const personalAreas = [
  { index: "01", name: "Art", description: "Drawings, character studies, visual experiments and personal creative work." },
  { index: "02", name: "Streaming", description: "Gameplay, live content and a possible creator identity if streaming grows into something bigger." },
  { index: "03", name: "Creator experiments", description: "YouTube, TikTok or dark-channel experiments that are personal media projects rather than Sypher products." },
];

export default function AfterHoursPage() {
  return (
    <main className="after-hours-page">
      <SiteHeader />
      <section className="detail-hero shell after-hours-hero">
        <p className="eyebrow">Personal / non-company</p>
        <h1>After Hours.</h1>
        <p>A deliberate boundary for the things done because they are fun, expressive or worth trying — not because they belong in a corporate division.</p>
      </section>

      <section className="section shell">
        <div className="personal-grid">
          {personalAreas.map((area) => (
            <article key={area.name}>
              <span>{area.index}</span>
              <h2>{area.name}</h2>
              <p>{area.description}</p>
              <small>Links can be connected when the public identity for this area is chosen.</small>
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
