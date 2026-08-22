'use client';

import type { CSSProperties } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiArrowDownRight, HiArrowUpRight } from 'react-icons/hi2';
import { company, divisions, projects } from '../brand';
import { ThemeToggle } from './ThemeToggle';

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.56, ease: [0.2, 0.8, 0.2, 1] as const },
};

function accent(color: string) {
  return { '--card-accent': color } as CSSProperties;
}

function Mark({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} className={className} />;
}

function Header() {
  return (
    <header className="sy-home-header">
      <div className="sy-home-header-inner">
        <Link href="/" className="sy-home-brand" aria-label="Página inicial da Sypher">
          <Mark src="/brand/sypher.svg" alt="" />
          <span><strong>SYPHER</strong><small>Tecnologia · Engenharia · Pesquisa</small></span>
        </Link>
        <nav aria-label="Navegação principal">
          <a href="#divisoes">Divisões</a>
          <a href="#projetos">Projetos</a>
          <Link href="/brand">Marca</Link>
          <Link href="/founder">Fundador</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="sy-hero">
      <div className="sy-hero-grid" aria-hidden="true" />
      <div className="sy-hero-glow" aria-hidden="true" />
      <div className="sy-shell sy-hero-layout">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }} className="sy-hero-copy">
          <p className="sy-kicker"><span /> Empresa independente de tecnologia</p>
          <h1>Tecnologia com<br /><em>visão própria.</em></h1>
          <p className="sy-hero-lede">{company.description} Software é o ponto de partida; IA, sistemas, hardware, jogos e pesquisa fazem parte do mesmo horizonte.</p>
          <div className="sy-hero-actions">
            <a className="sy-btn primary" href="#projetos">Explorar projetos <HiArrowDownRight /></a>
            <Link className="sy-btn secondary" href="/brand">Sistema de marca</Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .96, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .75, delay: .08 }} className="sy-hero-symbol">
          <div className="sy-symbol-orbit orbit-a" />
          <div className="sy-symbol-orbit orbit-b" />
          <div className="sy-symbol-core"><Mark src="/brand/sypher.svg" alt="Símbolo da Sypher" /></div>
          <span className="sy-symbol-label label-a">SOFTWARE</span>
          <span className="sy-symbol-label label-b">INTELLIGENCE</span>
          <span className="sy-symbol-label label-c">ENGINEERING</span>
          <span className="sy-symbol-label label-d">INTERACTIVE</span>
        </motion.div>
      </div>

      <div className="sy-shell sy-brand-strip" aria-label="Identidades da Sypher">
        {divisions.map((division) => (
          <Link href={`/divisions/${division.slug}`} key={division.slug} className={`sy-brand-chip chip-${division.slug}`} style={accent(division.color)}>
            <Mark src={division.mark} alt={`Logo Sypher ${division.name}`} />
            <span><small>Sypher</small><strong>{division.name}</strong></span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Divisions() {
  return (
    <section className="sy-section" id="divisoes">
      <div className="sy-shell">
        <motion.div {...reveal} className="sy-section-head">
          <div><p className="sy-kicker"><span /> 01 / Divisões</p><h2>Uma empresa.<br />Seis universos.</h2></div>
          <p>Cada divisão tem símbolo, cor, linguagem e comportamento próprios. O que une tudo é o padrão de construção da Sypher — não um template repetido seis vezes.</p>
        </motion.div>

        <div className="sy-division-grid">
          {divisions.map((division, index) => (
            <motion.div key={division.slug} {...reveal} transition={{ ...reveal.transition, delay: index * .045 }} className={`sy-division-wrap wrap-${division.slug}`}>
              <Link href={`/divisions/${division.slug}`} className={`sy-division-card card-${division.slug}`} style={accent(division.color)}>
                <div className="sy-division-top"><span>0{index + 1}</span><span>{division.focus}</span></div>
                <div className="sy-division-visual">
                  <div className="sy-division-mark"><Mark src={division.mark} alt={`Logo ${division.name}`} /></div>
                  <span className="sy-division-scan" />
                </div>
                <div className="sy-division-copy">
                  <small>SYPHER</small>
                  <h3>{division.name}</h3>
                  <p>{division.role}</p>
                </div>
                <div className="sy-division-bottom"><span>{division.keywords.join(' · ')}</span><HiArrowUpRight /></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="sy-section sy-projects-section" id="projetos">
      <div className="sy-shell">
        <motion.div {...reveal} className="sy-section-head">
          <div><p className="sy-kicker"><span /> 02 / Projetos</p><h2>A identidade precisa<br />virar coisa real.</h2></div>
          <p>Os projetos mantêm voz e símbolo próprios. A divisão funciona como linhagem técnica; o produto continua reconhecível sozinho.</p>
        </motion.div>
        <div className="sy-project-grid">
          {projects.map((project, index) => {
            const division = divisions.find((item) => item.slug === project.divisionSlug);
            return (
              <motion.div key={project.slug} {...reveal} transition={{ ...reveal.transition, delay: index * .04 }}>
                <Link href={`/projects/${project.slug}`} className={`sy-project-card project-${project.divisionSlug}`} style={accent(project.accent)}>
                  <div className="sy-project-header">
                    <div className="sy-project-mark"><Mark src={project.mark} alt={`Logo ${project.name}`} /></div>
                    <span>{project.status}</span>
                  </div>
                  <div className="sy-project-copy"><small>{division?.name} / {project.category}</small><h3>{project.name}</h3><p>{project.tagline}</p></div>
                  <div className="sy-project-link"><span>Abrir projeto</span><HiArrowUpRight /></div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IdentityPreview() {
  const showcase = divisions.filter((division) => ['intelligence', 'interactive', 'labs', 'products'].includes(division.slug));
  return (
    <section className="sy-section sy-identity-section">
      <div className="sy-shell sy-identity-layout">
        <motion.div {...reveal} className="sy-identity-copy">
          <p className="sy-kicker"><span /> 03 / Sistema visual</p>
          <h2>Os símbolos não são decoração.</h2>
          <p>Intelligence, Interactive, Labs e Products já têm linguagens visuais próprias. Systems e Engineering seguem a mesma lógica de autonomia sem quebrar a família.</p>
          <Link href="/brand" className="sy-text-link">Ver sistema completo <HiArrowUpRight /></Link>
        </motion.div>
        <div className="sy-identity-board">
          {showcase.map((division) => (
            <Link href={`/divisions/${division.slug}`} key={division.slug} className={`sy-identity-tile identity-${division.slug}`}>
              <span>PRIMARY LOGO</span>
              <Mark src={division.mark} alt={`Logo ${division.name}`} />
              <strong>{division.name.toUpperCase()}</strong>
              <div className="sy-palette"><i style={{ background: division.color }} /><i style={{ background: division.colorSoft }} /><i /></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="sy-closing">
      <div className="sy-shell sy-closing-layout">
        <div><p className="sy-kicker"><span /> 04 / Direção</p><h2>Começar por software.<br /><em>Ganhar o direito de expandir.</em></h2></div>
        <div className="sy-closing-actions"><Link href="/founder">Fundador <HiArrowUpRight /></Link><Link href="/after-hours">After Hours <HiArrowUpRight /></Link></div>
      </div>
      <div className="sy-shell sy-footer-line"><span>SYPHER</span><span>Tecnologia · Engenharia · Pesquisa</span><span>Construída para evoluir.</span></div>
    </section>
  );
}

export default function SypherHome() {
  return (
    <main className="sy-home">
      <Header />
      <Hero />
      <Divisions />
      <Projects />
      <IdentityPreview />
      <Closing />
    </main>
  );
}
