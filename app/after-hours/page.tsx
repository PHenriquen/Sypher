import type { Metadata } from "next";
import Link from "next/link";
import { IdentityMark } from "../../src/components/IdentityMark";
import { SiteFooter } from "../../src/components/SiteFooter";
import { SiteHeader } from "../../src/components/SiteHeader";

export const metadata: Metadata = { title: "After Hours" };

const personalAreas = [
  {
    index: "01",
    name: "Desenhos",
    description: "Ilustrações, estudos de personagem, experimentos visuais e trabalho criativo pessoal.",
    href: null,
    cta: "Galeria em desenvolvimento",
  },
  {
    index: "02",
    name: "Twitch / Noguerss",
    description: "O lado ao vivo: gameplay, streams e uma identidade de jogos mais espontânea e pessoal.",
    href: "https://www.twitch.tv/noguerss",
    cta: "Abrir Twitch ↗",
  },
  {
    index: "03",
    name: "YouTube / Noguerss",
    description: "Espaço para vídeos mais editados ou autorais. Pode conversar com games sem virar apenas arquivo de live.",
    href: "https://youtube.com/@noguerss",
    cta: "Abrir YouTube ↗",
  },
  {
    index: "04",
    name: "Experimentos de creator",
    description: "TikTok, formatos dark, ideias sem rosto e testes de conteúdo que continuam pessoais, não produtos da Sypher.",
    href: null,
    cta: "Experimental",
  },
];

export default function AfterHoursPage() {
  return (
    <main className="after-hours-world">
      <SiteHeader />

      <section className="world-hero">
        <div className="world-shell world-hero-grid">
          <div>
            <div className="world-kicker"><i /><span>Pessoal / fora da empresa</span></div>
            <h1 className="world-title">After<br />Hours</h1>
            <p className="world-role">O espaço para coisas feitas porque são divertidas, expressivas ou simplesmente valem a tentativa.</p>
            <p className="world-description">Aqui entram arte, streaming, jogos e experiências de conteúdo sem transformar hobby em divisão corporativa.</p>
          </div>
          <div className="world-art">
            <div className="world-mark-stage"><IdentityMark src="/brand/after-hours.svg" alt="Logo After Hours" size="lg" /></div>
            <div className="world-art-label"><span>Creator / noite / experimentação</span><strong>After Hours</strong></div>
          </div>
        </div>
      </section>

      <section className="world-section">
        <div className="world-shell">
          <div className="world-section-head"><span className="world-index">01 / Espaços pessoais</span><div><h2>Sem precisar parecer trabalho.</h2><p>O objetivo é organizar e mostrar hobbies sem confundir o que é produção pessoal com o que pertence à empresa.</p></div></div>
          <div className="after-hours-grid">
            {personalAreas.map((area) => (
              <article className="after-hours-card" key={area.name}>
                <span>{area.index}</span>
                <h2>{area.name}</h2>
                <p>{area.description}</p>
                {area.href ? <a href={area.href} target="_blank" rel="noreferrer">{area.cta}</a> : <small>{area.cta}</small>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="world-section">
        <div className="world-shell">
          <div className="world-section-head"><span className="world-index">02 / Limite claro</span><div><h2>After Hours não é uma divisão da Sypher.</h2><p>Ele fica ligado ao perfil do fundador. Um hobby só vira projeto da empresa quando existe decisão explícita de promover aquela ideia para uma divisão.</p></div></div>
          <div className="world-empty">Arte, streaming e creator experiments continuam pessoais. Essa separação deixa o site mais rico sem diluir a seriedade da marca principal.</div>
        </div>
      </section>

      <div className="world-shell world-next"><Link href="/founder">← Voltar ao Fundador</Link><Link href="/">Sypher →</Link></div>
      <SiteFooter />
    </main>
  );
}
