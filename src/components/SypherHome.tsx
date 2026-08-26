'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiArrowDownRight, HiArrowUpRight } from 'react-icons/hi2';
import { company, divisions, projects } from '../brand';

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
};

function BrandMark({ className = '' }: { className?: string }) {
  return <img className={className} src="/brand/sypher.svg" alt="Símbolo da Sypher" />;
}

function EditorialHeader() {
  return (
    <header className="se-header">
      <div className="se-header-inner">
        <Link className="se-wordmark" href="/">SYPHER</Link>
        <nav aria-label="Navegação principal">
          <a href="#about">Manifesto</a>
          <a href="#divisions">Divisões</a>
          <a href="#work">Projetos</a>
          <Link href="/brand">Identidade</Link>
        </nav>
        <Link className="se-index-link" href="/founder">Founder ↗</Link>
      </div>
    </header>
  );
}

function OrbitArtwork() {
  return (
    <div className="se-orbit-art" aria-hidden="true">
      <div className="se-orbit-noise" />
      <div className="se-orbit-blob blob-a" />
      <div className="se-orbit-blob blob-b" />
      <div className="se-orbit-line line-a" />
      <div className="se-orbit-line line-b" />
      <span className="se-star star-a">✦</span>
      <span className="se-star star-b">✦</span>
      <span className="se-star star-c">✦</span>
      <BrandMark className="se-orbit-mark" />
    </div>
  );
}

function Hero() {
  return (
    <section className="se-hero">
      <div className="se-hero-meta se-meta-left">INDEPENDENT TECHNOLOGY COMPANY<br />BRASIL — 2026</div>
      <div className="se-hero-meta se-meta-right">SOFTWARE / AI / ENGINEERING<br />RESEARCH / INTERACTIVE</div>

      <OrbitArtwork />

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="se-hero-title-wrap">
        <h1>SYPHER</h1>
      </motion.div>

      <div className="se-hero-bottom">
        <p>{company.description}</p>
        <a href="#about">Explore the system <HiArrowDownRight /></a>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="se-manifesto" id="about">
      <div className="se-section-index">01 / MANIFESTO</div>
      <motion.div {...reveal} className="se-manifesto-grid">
        <p className="se-eyebrow">BUILDING SYSTEMS WITH A POINT OF VIEW.</p>
        <h2>
          Não queremos parecer com o futuro.
          <span> Queremos ajudar a construí-lo.</span>
        </h2>
        <div className="se-manifesto-copy">
          <p>Software é o ponto de partida. Inteligência artificial, engenharia, experiências interativas e pesquisa fazem parte do mesmo sistema.</p>
          <p>A Sypher cresce como uma plataforma de ideias: cada divisão pode ter linguagem própria, mas todas compartilham precisão, curiosidade e ambição técnica.</p>
        </div>
      </motion.div>
    </section>
  );
}

function Divisions() {
  return (
    <section className="se-divisions" id="divisions">
      <div className="se-section-head">
        <span>02 / DIVISIONS</span>
        <h2>One company.<br />Multiple disciplines.</h2>
      </div>

      <div className="se-division-list">
        {divisions.map((division, index) => (
          <motion.div key={division.slug} {...reveal} transition={{ ...reveal.transition, delay: index * .04 }}>
            <Link href={`/divisions/${division.slug}`} className="se-division-row">
              <span className="se-row-index">0{index + 1}</span>
              <div className="se-row-name"><small>SYPHER</small><strong>{division.name}</strong></div>
              <p>{division.role}</p>
              <div className="se-row-mark"><img src={division.mark} alt="" /></div>
              <HiArrowUpRight />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="se-work" id="work">
      <div className="se-section-head se-section-head-light">
        <span>03 / SELECTED WORK</span>
        <h2>Ideas become<br />real systems.</h2>
      </div>

      <div className="se-work-grid">
        {projects.slice(0, 4).map((project, index) => (
          <motion.div key={project.slug} {...reveal} transition={{ ...reveal.transition, delay: index * .05 }}>
            <Link href={`/projects/${project.slug}`} className={`se-project-card se-project-${index + 1}`}>
              <div className="se-project-top"><span>0{index + 1}</span><span>{project.status}</span></div>
              <div className="se-project-visual">
                <img src={project.mark} alt={`Marca ${project.name}`} />
                <span className="se-project-orbit" />
              </div>
              <div className="se-project-copy">
                <small>{project.category}</small>
                <h3>{project.name}</h3>
                <p>{project.tagline}</p>
              </div>
              <HiArrowUpRight className="se-project-arrow" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Lab() {
  return (
    <section className="se-lab">
      <div className="se-lab-art" aria-hidden="true">
        <div className="se-lab-circle" />
        <div className="se-lab-ring r1" />
        <div className="se-lab-ring r2" />
        <BrandMark className="se-lab-mark" />
      </div>
      <motion.div {...reveal} className="se-lab-copy">
        <span>04 / LAB NOTES</span>
        <h2>Experiment first.<br />Explain later.</h2>
        <p>Protótipos, pesquisas, interfaces, sistemas e ideias que ainda estão ganhando forma.</p>
        <Link href="/after-hours">Enter After Hours <HiArrowUpRight /></Link>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="se-footer">
      <div className="se-footer-top">
        <span>TECHNOLOGY / ENGINEERING / RESEARCH</span>
        <span>BETIM — MINAS GERAIS — BR</span>
      </div>
      <div className="se-footer-word">SYPHER</div>
      <div className="se-footer-bottom">
        <span>© 2026 SYPHER</span>
        <div><Link href="/brand">Brand system</Link><Link href="/founder">Founder</Link><a href="#top">Back to top ↑</a></div>
      </div>
    </footer>
  );
}

export default function SypherHome() {
  return (
    <main className="se-site" id="top">
      <EditorialHeader />
      <Hero />
      <Manifesto />
      <Divisions />
      <Work />
      <Lab />
      <Footer />
    </main>
  );
}
