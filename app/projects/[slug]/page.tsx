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
  return { title: project?.name ?? "Projeto" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const division = getDivision(project.divisionSlug);
  if (!division) notFound();

  const style = { "--accent": project.accent, "--world-accent": division.color } as CSSProperties;

  return (
    <main className={`project-world project-${division.slug}`} style={style}>
      <SiteHeader />

      <section className="world-hero">
        <div className="world-shell world-hero-grid">
          <div>
            <div className="world-kicker"><i /><span>Sypher {division.name} / {project.category}</span></div>
            <h1 className="world-title">{project.name}</h1>
            <p className="world-role">{project.tagline}</p>
            <p className="world-description">{project.description}</p>
            <div className="project-actions">
              <a className="project-primary" href={project.href} target="_blank" rel="noreferrer">Abrir repositório ↗</a>
              <Link className="project-secondary" href={`/divisions/${division.slug}`}>Ver Sypher {division.name}</Link>
            </div>
          </div>

          <div className="world-art" aria-label={`Identidade visual do projeto ${project.name}`}>
            <div className="world-mark-stage">
              <IdentityMark src={project.mark} alt={`Logo ${project.name}`} size="lg" />
            </div>
            <div className="world-art-label"><span>{project.status}</span><strong>{division.name}</strong></div>
          </div>
        </div>
      </section>

      <section className="world-section">
        <div className="world-shell">
          <div className="world-section-head">
            <span className="world-index">01 / Linhagem</span>
            <div><h2>{project.name} pertence à Sypher {division.name}.</h2><p>O projeto mantém sua própria marca e voz. A divisão funciona como origem técnica, linguagem de apresentação e endosso dentro do ecossistema Sypher.</p></div>
          </div>
          <div className="world-identity-grid">
            <article className="world-identity-card"><small>Status</small><strong>{project.status}</strong><p>Estado atual do desenvolvimento apresentado publicamente pela Sypher.</p></article>
            <article className="world-identity-card"><small>Categoria</small><strong>{project.category}</strong><p>Divisão: Sypher {division.name}</p><div className="world-swatch" /></article>
          </div>
        </div>
      </section>

      <section className="world-section">
        <div className="world-shell">
          <div className="world-section-head">
            <span className="world-index">02 / Direção</span>
            <div><h2>Produto próprio, contexto próprio.</h2><p>A Sypher não transforma todos os projetos em clones da marca-mãe. Cada produto pode construir uma identidade mais expressiva desde que sua relação com a divisão permaneça clara.</p></div>
          </div>
          <div className="world-principles">
            <article className="world-principle"><span>01</span><h3>Identidade autônoma</h3><p>O projeto precisa continuar reconhecível mesmo quando o nome Sypher não aparece ao lado.</p></article>
            <article className="world-principle"><span>02</span><h3>Linhagem técnica</h3><p>A divisão comunica a disciplina, o padrão de construção e o tipo de problema que o projeto explora.</p></article>
            <article className="world-principle"><span>03</span><h3>Evolução pública</h3><p>Status e escopo devem refletir o estágio real do projeto, sem fingir maturidade que ainda não existe.</p></article>
          </div>
        </div>
      </section>

      <div className="world-shell world-next">
        <Link href="/#projetos">← Todos os projetos</Link>
        <a href={project.href} target="_blank" rel="noreferrer">GitHub →</a>
      </div>
      <SiteFooter />
    </main>
  );
}
