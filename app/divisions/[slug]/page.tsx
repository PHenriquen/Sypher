import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { divisions, getDivision, projects } from "../../../src/brand";
import { IdentityMark } from "../../../src/components/IdentityMark";
import { SiteFooter } from "../../../src/components/SiteFooter";
import { SiteHeader } from "../../../src/components/SiteHeader";

export function generateStaticParams() {
  return divisions.map((division) => ({ slug: division.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const division = getDivision(slug);
  return { title: division ? `${division.name} division` : "Division" };
}

export default async function DivisionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const division = getDivision(slug);
  if (!division) notFound();
  const relatedProjects = projects.filter((project) => project.divisionSlug === division.slug);
  const style = { "--accent": division.color } as CSSProperties;

  return (
    <main style={style}>
      <SiteHeader />
      <section className="detail-hero shell division-detail-hero">
        <div className="detail-kicker"><span>Sypher</span><strong>{division.name}</strong></div>
        <div className="detail-hero-grid">
          <div>
            <p className="eyebrow">{division.focus}</p>
            <h1>{division.role}</h1>
            <p>{division.description}</p>
          </div>
          <IdentityMark src={division.mark} alt={`${division.name} ${division.markName} mark`} size="lg" />
        </div>
      </section>

      <section className="section shell identity-spec">
        <div className="identity-spec-main">
          <p className="section-index">Identity</p>
          <h2>{division.markName}</h2>
          <p>{division.tone}</p>
        </div>
        <dl>
          <div><dt>Signature</dt><dd><i style={{ background: division.color }} />{division.color}</dd></div>
          <div><dt>Motif</dt><dd>{division.motif}</dd></div>
          <div><dt>Keywords</dt><dd>{division.keywords.join(" · ")}</dd></div>
        </dl>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="section-index">Current work</p>
          <div><h2>{relatedProjects.length ? "Projects in this lineage." : "A place for work before it has a product name."}</h2></div>
        </div>
        {relatedProjects.length ? (
          <div className="project-mark-grid">
            {relatedProjects.map((project) => (
              <Link href={`/projects/${project.slug}`} className="project-mark-card" key={project.slug} style={{ "--accent": project.accent } as CSSProperties}>
                <IdentityMark src={project.mark} alt={`${project.name} mark`} size="md" />
                <div><strong>{project.name}</strong><span>{project.status}</span></div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="empty-state"><p>Labs intentionally contains research that may be temporary, unnamed or discarded. Graduation into another division is a result, not a requirement.</p></div>
        )}
      </section>

      <section className="detail-next shell">
        <Link href="/#divisions">← All divisions</Link>
        <Link href="/brand">Brand rules →</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
