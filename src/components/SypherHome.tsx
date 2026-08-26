'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiArrowDownRight, HiArrowUpRight } from 'react-icons/hi2';
import { divisions, projects } from '../brand';

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-70px' },
  transition: { duration: 0.58, ease: [0.16, 1, 0.3, 1] as const },
};

const identitySlugs = ['intelligence', 'interactive', 'labs', 'products'];
const activeIdentities = divisions.filter((division) => identitySlugs.includes(division.slug));

const identityUse: Record<string, string> = {
  intelligence: 'IA, assistentes e automação contextual',
  interactive: 'Jogos e experiências interativas',
  labs: 'Pesquisa, estudos técnicos e protótipos',
  products: 'SaaS, ferramentas e produtos digitais',
};

function SypherMark({ className = '' }: { className?: string }) {
  return <img className={className} src="/brand/sypher.svg" alt="Símbolo da Sypher" />;
}

function Header() {
  return (
    <header className="sy2-header">
      <div className="sy2-header-inner">
        <Link href="/" className="sy2-wordmark">SYPHER</Link>
        <nav aria-label="Navegação principal">
          <a href="#projects">Projetos</a>
          <a href="#areas">Áreas</a>
          <a href="#about">Sobre</a>
          <Link href="/brand">Identidade</Link>
        </nav>
        <a className="sy2-header-index" href="#projects">INDEX ↓</a>
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
    </div>
  );
}

function Hero() {
  return (
    <section className="sy2-hero">
      <div className="sy2-meta sy2-meta-left">EMPRESA DE TECNOLOGIA EM FORMAÇÃO<br />BRASIL — 2026</div>
      <div className="sy2-meta sy2-meta-right">SOFTWARE / IA / PRODUTOS<br />HARDWARE / INTERATIVO / PESQUISA</div>
      <HeroVisual />
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .78, ease: [0.16, 1, 0.3, 1] }}
      >
        SYPHER
      </motion.h1>
      <div className="sy2-hero-bottom">
        <p>
          A Sypher reúne projetos próprios de tecnologia. A estrutura da marca acompanha o que está sendo desenvolvido,
          sem limitar a empresa a uma única área.
        </p>
        <a href="#projects">Projetos atuais <HiArrowDownRight /></a>
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
            A Sypher é uma empresa de tecnologia em formação. Hoje os projetos passam por software, inteligência artificial,
            sistemas industriais, hardware e experiências interativas.
          </p>
          <p>
            As áreas da marca são organizadas quando existe trabalho suficiente para justificar uma identidade própria.
            Por isso, Intelligence, Interactive, Labs e Products já têm sistemas visuais definidos, enquanto outras áreas
            continuam abertas conforme novos projetos aparecem.
          </p>
        </div>
        <div className="sy2-about-facts">
          <div><span>BASE</span><strong>Brasil</strong></div>
          <div><span>STATUS</span><strong>Em formação</strong></div>
          <div><span>FOCO ATUAL</span><strong>Projetos próprios</strong></div>
          <div><span>MODELO</span><strong>Marca aberta a novas áreas</strong></div>
        </div>
      </motion.div>
    </section>
  );
}

function Projects() {
  return (
    <section className="sy2-projects" id="projects">
      <div className="sy2-section-heading sy2-section-heading-dark">
        <span>02 / PROJETOS</span>
        <div>
          <h2>Projetos atuais</h2>
          <p>Trabalhos que já existem como projeto, protótipo ou produto em desenvolvimento.</p>
        </div>
      </div>

      <div className="sy2-project-grid">
        {projects.map((project, index) => (
          <motion.div key={project.slug} {...reveal} transition={{ ...reveal.transition, delay: index * .035 }}>
            <Link href={`/projects/${project.slug}`} className="sy2-project-card">
              <div className="sy2-project-top">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{project.status}</span>
              </div>
              <div className="sy2-project-art">
                <span className="sy2-project-axis axis-horizontal" />
                <span className="sy2-project-axis axis-vertical" />
                <span className="sy2-project-ring" />
                <img src={project.mark} alt={`Marca ${project.name}`} />
              </div>
              <div className="sy2-project-info">
                <small>{project.category}</small>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <HiArrowUpRight className="sy2-project-arrow" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section className="sy2-areas" id="areas">
      <div className="sy2-section-heading">
        <span>03 / ÁREAS</span>
        <div>
          <h2>Identidades já definidas</h2>
          <p>
            Estas são as quatro áreas que já possuem linguagem visual própria. Os símbolos abaixo são os oficiais de cada identidade.
          </p>
        </div>
      </div>

      <div className="sy2-area-grid">
        {activeIdentities.map((division, index) => (
          <motion.div key={division.slug} {...reveal} transition={{ ...reveal.transition, delay: index * .04 }}>
            <Link href={`/divisions/${division.slug}`} className={`sy2-area-card sy2-area-${division.slug}`}>
              <div className="sy2-area-top">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{division.focus}</span>
              </div>
              <div className="sy2-area-logo-wrap">
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
        <span>OUTRAS ÁREAS</span>
        <p>
          Systems e Engineering continuam como possibilidades técnicas, mas não são apresentadas aqui como divisões consolidadas.
          Elas podem ganhar identidade própria quando os projetos justificarem isso.
        </p>
      </div>
    </section>
  );
}

function AfterHours() {
  return (
    <section className="sy2-after-hours">
      <div className="sy2-ah-brand">
        <div className="sy2-ah-logo-panel">
          <img src="/brand/after-hours.svg" alt="Símbolo After Hours" />
        </div>
        <div className="sy2-ah-name">AFTER HOURS</div>
      </div>
      <motion.div {...reveal} className="sy2-ah-copy">
        <span>04 / ESPAÇO PARALELO</span>
        <h2>After Hours</h2>
        <p>
          After Hours não é uma divisão da empresa. É um espaço separado para experimentos, estudos, conceitos visuais e ideias
          que ainda não pertencem a um produto ou área específica.
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
        <span>SYPHER / TECNOLOGIA</span>
        <span>BRASIL — 2026</span>
      </div>
      <div className="sy2-footer-word">SYPHER</div>
      <div className="sy2-footer-bottom">
        <span>© 2026 SYPHER</span>
        <div>
          <a href="#projects">Projetos</a>
          <a href="#areas">Áreas</a>
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
      <Projects />
      <Areas />
      <AfterHours />
      <Footer />
    </main>
  );
}
