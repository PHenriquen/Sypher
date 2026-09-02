'use client';

import type { CSSProperties } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiArrowDownRight, HiArrowUpRight } from 'react-icons/hi2';
import { divisions, projects } from '../brand';

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-70px' },
  transition: { duration: 0.56, ease: [0.16, 1, 0.3, 1] as const },
};

const identitySlugs = ['intelligence', 'interactive', 'labs', 'products'];
const activeIdentities = identitySlugs
  .map((slug) => divisions.find((division) => division.slug === slug))
  .filter((division): division is (typeof divisions)[number] => Boolean(division));

const identityDetails: Record<string, { use: string; palette: string[] }> = {
  intelligence: {
    use: 'IA, assistentes e automação contextual',
    palette: ['#07152B', '#0D1F3F', '#1E40FF', '#00D6FF', '#70E7FF'],
  },
  interactive: {
    use: 'Jogos e experiências interativas',
    palette: ['#1D1D1D', '#2B2B2B', '#FFD200', '#FFB800', '#E6E6E6'],
  },
  labs: {
    use: 'Pesquisa, estudos técnicos e protótipos',
    palette: ['#E53935', '#F44336', '#FF5252', '#FF8A80', '#B71C1C'],
  },
  products: {
    use: 'SaaS, ferramentas e produtos digitais',
    palette: ['#06301F', '#0E4D32', '#00C896', '#6DFFC1', '#B5FFDE'],
  },
};

const letterReveal = {
  hidden: { y: '118%', opacity: 0, rotate: 3 },
  visible: (index: number) => ({
    y: '0%',
    opacity: 1,
    rotate: 0,
    transition: { delay: .72 + index * .07, duration: .72, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

function accent(color: string) {
  return { '--sy2-accent': color } as CSSProperties;
}

function SypherMark({ className = '' }: { className?: string }) {
  return <img className={className} src="/brand/sypher.svg" alt="Símbolo da Sypher" />;
}

function Intro() {
  return (
    <motion.div
      className="sy2-intro"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.35, duration: .55, ease: 'easeOut' }}
      aria-hidden="true"
    >
      <motion.div
        className="sy2-intro-lockup"
        initial={{ opacity: 0, scale: .92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .55, ease: [0.16, 1, 0.3, 1] }}
      >
        <SypherMark />
        <span>SYPHER</span>
      </motion.div>
      <motion.span
        className="sy2-intro-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}

function Header() {
  return (
    <header className="sy2-header">
      <div className="sy2-header-inner">
        <Link href="/" className="sy2-wordmark">SYPHER</Link>
        <nav aria-label="Navegação principal">
          <a href="#areas">Áreas</a>
          <a href="#projetos">Projetos</a>
          <a href="#about">Sobre</a>
          <Link href="/brand">Identidade</Link>
        </nav>
        <Link className="sy2-header-index" href="/founder">FUNDADOR ↗</Link>
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <motion.div
      className="sy2-hero-visual"
      initial={{ opacity: 0, scale: .82, rotate: -4 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: .38, duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden="true"
    >
      <div className="sy2-noise-orb orb-one" />
      <div className="sy2-noise-orb orb-two" />
      <div className="sy2-orbit orbit-one" />
      <div className="sy2-orbit orbit-two" />
      <span className="sy2-cross cross-x" />
      <span className="sy2-cross cross-y" />
      <span className="sy2-spark spark-a">✦</span>
      <span className="sy2-spark spark-b">✦</span>
      <SypherMark className="sy2-hero-mark" />
      {activeIdentities.map((division, index) => (
        <span
          key={division.slug}
          className={`sy2-satellite sy2-satellite-${index + 1}`}
          style={accent(division.color)}
        >
          <img src={division.mark} alt="" />
        </span>
      ))}
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="sy2-hero">
      <div className="sy2-meta sy2-meta-left">SYPHER<br />BRASIL — 2026</div>
      <div className="sy2-meta sy2-meta-right">SOFTWARE / IA / PRODUTOS<br />INTERATIVO / PESQUISA</div>
      <HeroVisual />
      <motion.h1 initial="hidden" animate="visible" aria-label="Sypher">
        {'SYPHER'.split('').map((letter, index) => (
          <motion.span key={letter + index} custom={index} variants={letterReveal}>
            {letter}
          </motion.span>
        ))}
      </motion.h1>
      <div className="sy2-hero-bottom">
        <p>
          Uma empresa de tecnologia em formação, organizada em torno das áreas que realmente ganham projetos, produtos e pesquisa próprios.
        </p>
        <a href="#areas">Conhecer as áreas <HiArrowDownRight /></a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="sy2-about" id="about">
      <div className="sy2-section-label">01 / SOBRE</div>
      <motion.div {...reveal} className="sy2-about-grid">
        <div className="sy2-about-title">
          <span>SYPHER / 2026</span>
          <h2>O que é a Sypher</h2>
        </div>
        <div className="sy2-about-copy">
          <p>
            A Sypher é uma empresa de tecnologia em formação. O trabalho atual passa por software, inteligência artificial,
            experiências interativas, produtos digitais e pesquisa técnica.
          </p>
          <p>
            Intelligence, Interactive, Labs e Products já possuem identidades próprias. Outras áreas só entram na estrutura
            quando houver trabalho suficiente para justificar isso.
          </p>
        </div>
        <div className="sy2-about-facts">
          <div><span>BASE</span><strong>Brasil</strong></div>
          <div><span>STATUS</span><strong>Em formação</strong></div>
          <div><span>FOCO</span><strong>Tecnologia própria</strong></div>
          <div><span>ESTRUTURA</span><strong>Expansão por área</strong></div>
        </div>
      </motion.div>
    </section>
  );
}


function Areas() {
  return (
    <section className="sy2-areas" id="areas">
      <div className="sy2-section-heading">
        <span>02 / ÁREAS</span>
        <div>
          <h2>Áreas com identidade própria</h2>
          <p>Cada área tem símbolo, paleta e linguagem visual próprios, mantendo a Sypher como marca principal.</p>
        </div>
      </div>

      <div className="sy2-area-grid">
        {activeIdentities.map((division, index) => (
          <motion.div
            key={division.slug}
            {...reveal}
            transition={{ ...reveal.transition, delay: index * .055 }}
            className="sy2-area-cell"
          >
            <Link
              href={`/divisions/${division.slug}`}
              className={`sy2-area-card sy2-area-${division.slug}`}
              style={accent(division.color)}
              aria-label={`Conhecer Sypher ${division.name}`}
            >
              <div className="sy2-area-glow" aria-hidden="true" />
              <div className="sy2-area-top">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{division.focus}</span>
              </div>
              <div className="sy2-area-logo-wrap">
                <span className="sy2-area-orbit" />
                <span className="sy2-area-orbit sy2-area-orbit-2" />
                <img src={division.mark} alt={`Símbolo Sypher ${division.name}`} />
              </div>
              <div className="sy2-area-copy">
                <small>SYPHER</small>
                <h3>{division.name}</h3>
                <p>{identityDetails[division.slug].use}</p>
              </div>
              <div className="sy2-area-palette" aria-label={`Paleta Sypher ${division.name}`}>
                {identityDetails[division.slug].palette.map((color) => (
                  <span key={color}>
                    <i style={{ backgroundColor: color }} />
                    <small>{color.slice(1)}</small>
                  </span>
                ))}
              </div>
              <div className="sy2-area-footer">
                <span>{division.keywords.join(' / ')}</span>
                <HiArrowUpRight />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="sy2-area-note">
        <span>ESTRUTURA ABERTA</span>
        <p>Novas áreas podem ganhar identidade própria quando houver projetos e trabalho suficientes para sustentá-las.</p>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="sy2-work" id="projetos">
      <div className="sy2-section-heading">
        <span>03 / EM CONSTRUÇÃO</span>
        <div>
          <h2>Projetos reais, estágios claros.</h2>
          <p>
            A Sypher começa pelo que já pode ser construído e demonstrado. Cada projeto abaixo mantém identidade própria e mostra seu estágio atual sem sugerir produtos, clientes ou equipes que ainda não existem.
          </p>
        </div>
      </div>

      <div className="sy2-project-grid">
        {projects.map((project, index) => {
          const division = divisions.find((item) => item.slug === project.divisionSlug);
          return (
            <motion.article
              key={project.slug}
              {...reveal}
              transition={{ ...reveal.transition, delay: index * .045 }}
              className="sy2-project-cell"
              style={accent(project.accent)}
            >
              <Link href={`/projects/${project.slug}`} className="sy2-project-card">
                <div className="sy2-project-top">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{project.status}</span>
                </div>
                <div className="sy2-project-identity">
                  <img src={project.mark} alt={`Símbolo de ${project.name}`} />
                  <div>
                    <small>Sypher {division?.name}</small>
                    <h3>{project.name}</h3>
                  </div>
                </div>
                <p>{project.tagline}</p>
                <div className="sy2-project-footer">
                  <span>{project.category}</span>
                  <HiArrowUpRight aria-hidden="true" />
                </div>
              </Link>
            </motion.article>
          );
        })}
      </div>

      <div className="sy2-work-note">
        <span>AGORA</span>
        <p>Software e produtos digitais sustentam a primeira fase. Hardware, sistemas e experiências interativas avançam como protótipos autorais até justificarem uma operação própria.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="sy2-footer">
      <div className="sy2-footer-top">
        <div className="sy2-footer-brand"><SypherMark /><span>SYPHER</span></div>
        <span>BRASIL — 2026</span>
      </div>
      <div className="sy2-footer-bottom">
        <span>© 2026 SYPHER</span>
        <div>
          <a href="#areas">Áreas</a>
          <a href="#projetos">Projetos</a>
          <a href="#about">Sobre</a>
          <Link href="/brand">Identidade</Link>
          <Link href="/founder">Fundador</Link>
          <a href="https://website-kohl-six-11.vercel.app/" target="_blank" rel="noopener noreferrer">Portfólio ↗</a>
          <a href="#top">Topo ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default function SypherHome() {
  return (
    <main className="sy2-site" id="top">
      <a className="sy2-skip-link" href="#about">Pular para o conteúdo</a>
      <Intro />
      <Header />
      <Hero />
      <About />
      <Areas />
      <Work />
      <Footer />
    </main>
  );
}
