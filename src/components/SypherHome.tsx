'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiArrowDownRight, HiArrowUpRight } from 'react-icons/hi2';
import { company, divisions, projects } from '../brand';

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.68, ease: [0.16, 1, 0.3, 1] as const },
};

const identitySlugs = ['intelligence', 'interactive', 'labs', 'products'];
const activeIdentities = divisions.filter((division) => identitySlugs.includes(division.slug));

function BrandMark({ className = '' }: { className?: string }) {
  return <img className={className} src="/brand/sypher.svg" alt="Símbolo da Sypher" />;
}

function Header() {
  return (
    <header className="se-header">
      <div className="se-header-inner">
        <Link className="se-wordmark" href="/">SYPHER</Link>
        <nav aria-label="Navegação principal">
          <a href="#work">Projetos</a>
          <a href="#explore">Explorar</a>
          <a href="#about">Sobre</a>
          <Link href="/brand">Identidade</Link>
        </nav>
        <a className="se-index-link" href="#work">VIEW WORK ↘</a>
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
      <div className="se-orbit-axis axis-x" />
      <div className="se-orbit-axis axis-y" />
      <span className="se-star star-a">✦</span>
      <span className="se-star star-b">✦</span>
      <span className="se-star star-c">+</span>
      <BrandMark className="se-orbit-mark" />
    </div>
  );
}

function Hero() {
  return (
    <section className="se-hero">
      <div className="se-hero-meta se-meta-left">INDEPENDENT TECHNOLOGY COMPANY<br />BRASIL — 2026</div>
      <div className="se-hero-meta se-meta-right">NO FIXED ROADMAP<br />BUILD → LEARN → EXPAND</div>

      <OrbitArtwork />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .82, ease: [0.16, 1, 0.3, 1] }}
        className="se-hero-title-wrap"
      >
        <h1>SYPHER</h1>
      </motion.div>

      <div className="se-hero-bottom">
        <p>
          A Sypher é uma marca de tecnologia em construção. O que ela se torna não é definido por um organograma —
          é definido pelo que vale a pena construir.
        </p>
        <a href="#work">Ver trabalho <HiArrowDownRight /></a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="se-manifesto" id="about">
      <div className="se-section-index">01 / DIRECTION</div>
      <motion.div {...reveal} className="se-manifesto-grid">
        <div className="se-manifesto-side">
          <p className="se-eyebrow">NOT A ROADMAP.<br />A DIRECTION.</p>
          <span>EST. 2026</span>
        </div>
        <h2>
          A estrutura não vem antes do trabalho.
          <span> Ela nasce dele.</span>
        </h2>
        <div className="se-manifesto-copy">
          <p>
            A Sypher começa por software, mas não se limita a uma categoria. Inteligência, produtos, experiências,
            sistemas físicos e pesquisa entram quando existe um projeto real que justifique esse espaço.
          </p>
          <p>
            Sem departamentos inventados para parecer maior. Sem promessa de futuro tratada como presente. Primeiro a
            coisa existe; depois a marca encontra a forma certa de organizá-la.
          </p>
          <div className="se-principles">
            <span><b>01</b> BUILD FIRST</span>
            <span><b>02</b> NAME WHAT EXISTS</span>
            <span><b>03</b> EXPAND WHEN EARNED</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Work() {
  return (
    <section className="se-work" id="work">
      <div className="se-section-head se-section-head-light">
        <span>02 / CURRENT WORK</span>
        <div>
          <h2>O trabalho vem<br />antes da estrutura.</h2>
          <p>Projetos reais são o centro da Sypher. O restante da arquitetura existe para dar contexto a eles — não o contrário.</p>
        </div>
      </div>

      <div className="se-work-grid">
        {projects.slice(0, 4).map((project, index) => (
          <motion.div key={project.slug} {...reveal} transition={{ ...reveal.transition, delay: index * .05 }}>
            <Link href={`/projects/${project.slug}`} className={`se-project-card se-project-${index + 1}`}>
              <div className="se-project-top"><span>0{index + 1}</span><span>{project.status}</span></div>
              <div className="se-project-visual">
                <span className="se-project-crosshair" />
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

function Explore() {
  return (
    <section className="se-explore" id="explore">
      <div className="se-section-head">
        <span>03 / IDENTITIES</span>
        <div>
          <h2>Linguagens prontas.<br />Não departamentos.</h2>
          <p>
            Algumas áreas já têm identidade própria porque representam tipos de trabalho que fazem sentido para a Sypher.
            Elas existem como possibilidades organizadas — e ganham peso conforme os projetos ganham vida.
          </p>
        </div>
      </div>

      <div className="se-identity-grid">
        {activeIdentities.map((division, index) => (
          <motion.div key={division.slug} {...reveal} transition={{ ...reveal.transition, delay: index * .05 }}>
            <Link href={`/divisions/${division.slug}`} className="se-identity-card">
              <div className="se-identity-top">
                <span>0{index + 1}</span>
                <span>IDENTITY SYSTEM</span>
              </div>
              <div className="se-identity-mark">
                <span className="se-identity-ring" />
                <img src={division.mark} alt={`Marca Sypher ${division.name}`} />
              </div>
              <div className="se-identity-copy">
                <small>SYPHER</small>
                <h3>{division.name}</h3>
                <p>{division.role}</p>
              </div>
              <div className="se-identity-bottom">
                <span>{division.keywords.slice(0, 3).join(' / ')}</span>
                <HiArrowUpRight />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="se-explore-note">
        <span>OPEN ARCHITECTURE</span>
        <p>Se amanhã surgir uma área que mereça existir, a Sypher pode criá-la. Se uma ideia não se sustentar, ela não precisa virar uma divisão.</p>
      </div>
    </section>
  );
}

function AfterHours() {
  return (
    <section className="se-after-hours">
      <div className="se-ah-visual" aria-hidden="true">
        <span className="se-ah-line line-1" />
        <span className="se-ah-line line-2" />
        <span className="se-ah-dot dot-1" />
        <span className="se-ah-dot dot-2" />
        <div className="se-ah-word"><span>AFTER</span><span>HOURS</span></div>
      </div>
      <motion.div {...reveal} className="se-ah-copy">
        <span>04 / PARALLEL SPACE</span>
        <p className="se-ah-label">NOT A DIVISION.</p>
        <h2>Nem tudo precisa<br />caber no organograma.</h2>
        <p>
          After Hours é o espaço paralelo da Sypher para experimentos, cultura, estudos e ideias que podem ser estranhas,
          incompletas ou simplesmente interessantes demais para esperar uma categoria.
        </p>
        <Link href="/after-hours">Entrar no After Hours <HiArrowUpRight /></Link>
      </motion.div>
    </section>
  );
}

function Closing() {
  return (
    <section className="se-closing">
      <span>05 / OPEN SYSTEM</span>
      <motion.div {...reveal} className="se-closing-grid">
        <p>THE FORM FOLLOWS THE WORK.</p>
        <h2>Sypher não é uma lista do que vamos fazer.<br /><em>É o nome do que estamos construindo.</em></h2>
        <Link href="/brand">Ver sistema de identidade <HiArrowUpRight /></Link>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="se-footer">
      <div className="se-footer-top">
        <span>TECHNOLOGY / CREATION / ENGINEERING</span>
        <span>BRASIL — 2026</span>
      </div>
      <div className="se-footer-word">SYPHER</div>
      <div className="se-footer-bottom">
        <span>© 2026 SYPHER</span>
        <div>
          <a href="#work">Projetos</a>
          <Link href="/brand">Identidade</Link>
          <a href="#top">Topo ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default function SypherHome() {
  return (
    <main className="se-site" id="top">
      <Header />
      <Hero />
      <About />
      <Work />
      <Explore />
      <AfterHours />
      <Closing />
      <Footer />
    </main>
  );
}
