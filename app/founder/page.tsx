import type { Metadata } from "next";
import Link from "next/link";
import { founderLinks } from "../../src/brand";
import { SiteFooter } from "../../src/components/SiteFooter";
import { SiteHeader } from "../../src/components/SiteHeader";

export const metadata: Metadata = { title: "Fundador" };

const professionalLinks = [
  { label: "Portfólio", href: founderLinks.portfolio },
  { label: "GitHub", href: founderLinks.github },
  { label: "LinkedIn", href: founderLinks.linkedin },
];

export default function FounderPage() {
  return (
    <main>
      <SiteHeader />
      <section className="detail-hero shell founder-hero">
        <p className="eyebrow">Fundador / identidade pessoal</p>
        <div className="detail-hero-grid founder-grid">
          <div>
            <h1>Pedro Nogueira</h1>
            <p>A Sypher é a identidade da empresa. Esta página conecta portfólio profissional, código e presença de carreira sem transformar o site corporativo em um perfil pessoal.</p>
            <div className="hero-actions">
              {professionalLinks.map((link, index) => (
                <a className={`button ${index === 0 ? "primary" : "secondary"}`} href={link.href} key={link.label} target="_blank" rel="noreferrer">
                  {link.label} ↗
                </a>
              ))}
              <Link className="button secondary" href="/after-hours">After Hours</Link>
            </div>
          </div>
          <div className="founder-seal"><span>Fundador</span><strong>PN</strong><small>Pessoal / profissional</small></div>
        </div>
      </section>

      <section className="section shell founder-boundary">
        <div><p className="section-index">Profissional</p><h2>Portfólio</h2><p>Carreira, habilidades técnicas, formação e trabalho profissional individual pertencem ao portfólio pessoal.</p></div>
        <div><p className="section-index">Empresa</p><h2>Sypher</h2><p>Divisões, produtos, pesquisa da empresa e a arquitetura de longo prazo pertencem aqui.</p></div>
        <div><p className="section-index">Pessoal</p><h2>After Hours</h2><p>Desenhos, streaming, jogos e experimentos de conteúdo são hobbies pessoais e não produtos da empresa.</p></div>
      </section>
      <SiteFooter />
    </main>
  );
}
