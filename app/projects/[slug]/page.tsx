import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDivision, getProject, projects } from "../../../src/brand";
import { IdentityMark } from "../../../src/components/IdentityMark";
import { SiteFooter } from "../../../src/components/SiteFooter";
import { SiteHeader } from "../../../src/components/SiteHeader";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project?.name ?? "Project" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const division = getDivision(project.divisionSlug);
  if (!division) notFound();
  const style = { "--accent": project.accent } as CSSProperties;

  return (
    <main style={style}>
      <SiteHeader />
      <section className="detail-hero shell project-detail-hero">
        <p className="eyebrow">{division.name} / {project.category}</p>
        <div className="detail-hero-grid">
          <div>
            <h1>{project.name}</h1>
            <p className="project-tagline">{project.tagline}</p>
            <p>{project.description}</p>
            <div className="hero-actions">
              <a className="button primary" href={project.href} target="_blank" rel="noreferrer">Open repository ↗</a>
              <Link className="button secondary" href={`/divisions/${division.slug}`}>Sypher {division.name}</Link>
            </div>
          </div>
          <IdentityMark src={project.mark} alt={`${project.name} working mark`} size="lg" />
        </div>
      </section>

      <section className="section shell identity-spec">
        <div className="identity-spec-main">
          <p className="section-index">Lineage</p>
          <h2>{project.name} — Sypher {division.name}</h2>
          <p>The product keeps its own mark and voice. The division is the technical lineage and endorsement behind it.</p>
        </div>
        <dl>
          <div><dt>Status</dt><dd>{project.status}</dd></div>
          <div><dt>Category</dt><dd>{project.category}</dd></div>
          <div><dt>Division</dt><dd><i style={{ background: division.color }} />{division.name}</dd></div>
        </dl>
      </section>

      <section className="detail-next shell">
        <Link href="/#projects">← All projects</Link>
        <a href={project.href} target="_blank" rel="noreferrer">GitHub →</a>
      </section>
      <SiteFooter />
    </main>
  );
}
