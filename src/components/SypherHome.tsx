'use client';

import type { CSSProperties } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiArrowDownRight, HiArrowUpRight } from 'react-icons/hi2';
import { divisions } from '../brand';

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-70px' },
  transition: { duration: 0.56, ease: [0.16, 1, 0.3, 1] as const },
};

const identitySlugs = ['intelligence', 'interactive', 'labs', 'products'];
const activeIdentities = divisions.filter((division) => identitySlugs.includes(division.slug));

const identityUse: Record<string, string> = {
  intelligence: 'IA, assistentes e automação contextual',
  interactive: 'Jogos e experiências interativas',
  labs: 'Pesquisa, estudos técnicos e protótipos',
  products: 'SaaS, ferramentas e produtos digitais',
};

function accent(color: string) {
  return { '--sy2-accent': color } as CSSProperties;
}

function SypherMark({ className = '' }: { className?: string }) {
  return <img className={className} src="/brand/sypher.svg" alt="Símbolo da Sypher" />;
}

function Header() {
  return (
    <header className="sy2-header">
      <div className="sy2-header-inner">
        <Link href="/" className="sy2-wordmark">SYPHER</Link>
        <nav aria-label="Navegação principal">
          <a href="#areas">Áreas</a>
          <a href="#about">Sobre</a>
          <Link href="/after-hours">After Hours</Link>
          <Link href="/brand">Identidade</Link>
        </nav>
        <a className="sy2-header-index" href="#areas">EXPLORE ↓</a>
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="sy2-hero-visual" aria-hidden="true">
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
    </div>
  );
}

function Hero() {
  return (
    <section className="sy2-hero">
      <div className="sy2-meta sy2-meta-left">SYPHER<br />BRASIL — 2026</div>
      <div className="sy2-meta sy2-meta-right">SOFTWARE / IA / PRODUTOS<br />INTERATIVO / PESQUISA</div>
      <HeroVisual />
      <motion.h1
        initial={{ opacity: 0, y: 18, letterSpacing: '-.06em' }}
        animate={{ opacity: 1, y: 0, letterSpacing: '-.078em' }}
        transition={{ duration: .85, ease: [0.16, 1, 0.3, 1] }}
      >
        SYPHER
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
                <p>{identityUse[division.slug]}</p>
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

function AfterHours() {
  return (
    <section className="sy2-after-hours">
      <div className="sy2-ah-brand">
        <div className="sy2-ah-grid-lines" aria-hidden="true" />
        <div className="sy2-ah-logo-panel">
          <span className="sy2-ah-orbit" />
          <span className="sy2-ah-orbit sy2-ah-orbit-2" />
          <img src="/brand/after-hours.svg" alt="Símbolo After Hours" />
        </div>
        <div className="sy2-ah-name">AFTER HOURS</div>
      </div>
      <motion.div {...reveal} className="sy2-ah-copy">
        <span>03 / ESPAÇO PARALELO</span>
        <h2>After Hours</h2>
        <p>
          Espaço separado para experimentos, estudos, conceitos visuais e ideias que ainda não pertencem a um produto ou área específica.
        </p>
        <Link href="/after-hours">Abrir After Hours <HiArrowUpRight /></Link>
      </motion.div>
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
          <a href="#about">Sobre</a>
          <Link href="/brand">Identidade</Link>
          <a href="#top">Topo ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default function SypherHome() {
  return (
    <main className="sy2-site" id="top">
      <Header />
      <Hero />
      <About />
      <Areas />
      <AfterHours />
      <Footer />
    </main>
  );
}
