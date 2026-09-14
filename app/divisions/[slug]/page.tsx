import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { divisions, getDivision, projects } from "../../../src/brand";
import { IdentityMark } from "../../../src/components/IdentityMark";
import { SiteFooter } from "../../../src/components/SiteFooter";
import { SiteHeader } from "../../../src/components/SiteHeader";

export function generateStaticParams() {
  return divisions.map((division) => ({ slug: division.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const division = getDivision(slug);
  return { title: division ? `Sypher ${division.name}` : "Divisão" };
}

const narratives: Record<string, { art: string; principles: Array<[string, string]> }> = {
  intelligence: {
    art: "Núcleo contextual / inteligência local",
    principles: [
      ["Contexto antes da ação", "Entender o ambiente e a intenção antes de executar qualquer automação."],
      ["Controle é parte do produto", "Permissões, limites e confirmação não são extras: são parte da experiência."],
      ["IA útil, não performática", "Modelos e agentes existem para resolver tarefas reais, não para parecer futuristas."],
    ],
  },
  products: {
    art: "Produto modular / software em uso",
    principles: [
      ["Um problema claro", "Cada produto nasce de um fluxo concreto que pode ser simplificado ou melhor organizado."],
      ["Usabilidade vence complexidade", "A tecnologia fica nos bastidores quando o usuário só precisa que algo funcione bem."],
      ["Evolução observável", "Produtos crescem por uso, feedback e histórico — não por uma lista infinita de features."],
    ],
  },
  labs: {
    art: "Célula aberta / experimento em andamento",
    principles: [
      ["Testar antes de rotular", "Uma ideia não precisa fingir que já é produto para merecer investigação."],
      ["Falhar barato", "Protótipos pequenos servem para matar hipóteses ruins antes que elas fiquem caras."],
      ["Documentar descoberta", "Mesmo um experimento descartado pode deixar conhecimento técnico reutilizável."],
    ],
  },
  systems: {
    art: "Telemetria / estado / resposta operacional",
    principles: [
      ["Visibilidade primeiro", "Um sistema operacional precisa mostrar o que está acontecendo antes de tentar automatizar tudo."],
      ["Confiabilidade mensurável", "Eventos, estados e incidentes devem ser rastreáveis e tecnicamente explicáveis."],
      ["Da leitura à ação", "Telemetria só cria valor quando ajuda alguém ou outro sistema a decidir melhor."],
    ],
  },
  engineering: {
    art: "Estrutura física / interface digital",
    principles: [
      ["Software encontra matéria", "Firmware, sensores e mecânica devem funcionar como uma única experiência."],
      ["Protótipo é evidência", "Validação física vale mais do que uma renderização bonita quando o produto toca o mundo real."],
      ["Robustez desde cedo", "Protocolos, energia, tolerâncias e falhas fazem parte do design, não apenas da implementação."],
    ],
  },
  interactive: {
    art: "Input / resposta / pixel play",
    principles: [
      ["Toda ação precisa responder", "Movimento, combate e interface devem devolver sensação imediata ao jogador."],
      ["Atmosfera também é mecânica", "Ritmo, som, silêncio, cor e enquadramento fazem parte do que o jogo comunica."],
      ["Rejogar deve revelar algo", "Desafio, domínio e descoberta mantêm a experiência viva além da primeira conclusão."],
    ],
  },
};

export default async function DivisionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const division = getDivision(slug);
  if (!division) notFound();

  const relatedProjects = projects.filter((project) => project.divisionSlug === division.slug);
  const narrative = narratives[division.slug];
  const style = { "--accent": division.color, "--world-accent": division.color } as CSSProperties;

  return (
    <main className={`division-world division-${division.slug}`} style={style}>
      <SiteHeader />

      <section className="world-hero">
        <div className="world-shell world-hero-grid">
          <div>
            <div className="world-kicker"><i /><span>Sypher / Divisão</span></div>
            <h1 className="world-title">{division.name}</h1>
            <p className="world-role">{division.role}</p>
            <p className="world-description">{division.description}</p>
            <div className="world-tags">
              {division.keywords.map((keyword) => <span className="world-tag" key={keyword}>{keyword}</span>)}
            </div>
          </div>

          <div className="world-art" aria-label={`Identidade visual da Sypher ${division.name}`}>
            <div className="world-mark-stage">
              <IdentityMark src={division.mark} alt={`Símbolo da Sypher ${division.name}`} size="lg" />
            </div>
            <div className="world-art-label"><span>{narrative.art}</span><strong>{division.markName}</strong></div>
          </div>
        </div>
      </section>

      <section className="world-section">
        <div className="world-shell">
          <div className="world-section-head">
            <span className="world-index">01 / Como pensa</span>
            <div><h2>Um domínio com regras próprias.</h2><p>A divisão não é apenas uma cor dentro da Sypher. Ela define como esse tipo de trabalho deve pensar, se comportar e ser apresentado.</p></div>
          </div>
          <div className="world-principles">
            {narrative.principles.map(([title, description], index) => (
              <article className="world-principle" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="world-section">
        <div className="world-shell">
          <div className="world-section-head">
            <span className="world-index">02 / Identidade</span>
            <div><h2>{division.markName}</h2><p>{division.tone}</p></div>
          </div>
          <div className="world-identity-grid">
            <article className="world-identity-card"><small>Assinatura visual</small><strong>{division.color}</strong><div className="world-swatch" /></article>
            <article className="world-identity-card"><small>Motivo</small><strong>{division.motif}</strong><p>A geometria é o elo com a família Sypher; a execução visual é específica desta divisão.</p></article>
          </div>
        </div>
      </section>

      <section className="world-section">
        <div className="world-shell">
          <div className="world-section-head">
            <span className="world-index">03 / Trabalho atual</span>
            <div><h2>{relatedProjects.length ? "Projetos desta linhagem." : "Pesquisa antes do nome do produto."}</h2><p>{relatedProjects.length ? "Os produtos mantêm identidade própria, mas carregam a assinatura técnica desta divisão." : "Nem toda pesquisa precisa virar produto. Labs também serve para testar, aprender e descartar com inteligência."}</p></div>
          </div>

          {relatedProjects.length ? (
            <div className="world-project-grid">
              {relatedProjects.map((project) => (
                <Link href={`/projects/${project.slug}`} className="world-project-card" key={project.slug}>
                  <div className="world-project-card-top">
                    <IdentityMark src={project.mark} alt={`Logo ${project.name}`} size="md" />
                    <span className="world-project-card-arrow">↗</span>
                  </div>
                  <div><em>{project.status}</em><strong>{project.name}</strong><p>{project.tagline}</p></div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="world-empty">Labs abriga pesquisa temporária, protótipos sem nome e ideias que talvez nunca sejam promovidas para outra divisão. Isso é parte da função dela.</div>
          )}
        </div>
      </section>

      <div className="world-shell world-next">
        <Link href="/#areas">← Todas as áreas</Link>
        <Link href="/brand">Sistema de marca →</Link>
      </div>
      <SiteFooter />
    </main>
  );
}
