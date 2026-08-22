export type Division = {
  slug: string;
  name: string;
  focus: string;
  role: string;
  description: string;
  color: string;
  colorSoft: string;
  motif: string;
  mark: string;
  markName: string;
  tone: string;
  keywords: string[];
};

export type Project = {
  slug: string;
  name: string;
  divisionSlug: string;
  category: string;
  tagline: string;
  description: string;
  status: string;
  href: string;
  mark: string;
  accent: string;
};

export const company = {
  name: "Sypher",
  strapline: "Tecnologia · Engenharia · Pesquisa",
  headline: "Construir sistemas. Criar produtos. Explorar além do software.",
  description:
    "A Sypher é uma empresa de tecnologia em formação, construída em torno de produtos próprios, pesquisa aplicada e da conexão entre software e o mundo físico.",
  principle:
    "Uma marca-mãe. Disciplinas distintas. Cada produto mantém sua personalidade enquanto herda um padrão comum de engenharia, clareza e experimentação.",
};

export const founderLinks = {
  portfolio: "https://website-kohl-six-11.vercel.app/",
  github: "https://github.com/PHenriquen",
  linkedin: "https://www.linkedin.com/in/pedro-nogueira-138aa2304/",
};

export const founderUrl = founderLinks.portfolio;

export const divisions: Division[] = [
  {
    slug: "labs",
    name: "Labs",
    focus: "Pesquisa e P&D experimental",
    role: "Incubar o que ainda não está pronto para virar produto.",
    description:
      "Pesquisa exploratória, protótipos, estudos técnicos e experimentos. Labs é o espaço protegido para testar ideias antes de atribuí-las a uma divisão de produto.",
    color: "#E53935",
    colorSoft: "#FF8A80",
    motif: "Célula aberta / protótipo / estrutura de pesquisa",
    mark: "/brand/divisions/labs.svg",
    markName: "Open Cell",
    tone: "Experimental, técnico, direto e propositalmente inacabado.",
    keywords: ["pesquisa", "protótipo", "descoberta"],
  },
  {
    slug: "intelligence",
    name: "Intelligence",
    focus: "IA e automação inteligente",
    role: "Construir inteligência que entende contexto e age dentro de limites claros.",
    description:
      "Assistentes, agentes, voz, sistemas contextuais e automação inteligente. A divisão prioriza controle local, ações explicáveis e integração útil em vez de IA como espetáculo.",
    color: "#00D6FF",
    colorSoft: "#70E7FF",
    motif: "Núcleo / presença / luz controlada",
    mark: "/brand/divisions/intelligence.svg",
    markName: "Living Core",
    tone: "Clara, calma, luminosa e precisa.",
    keywords: ["inteligência", "contexto", "automação"],
  },
  {
    slug: "products",
    name: "Products",
    focus: "SaaS e produtos digitais",
    role: "Transformar fluxos bem definidos em produtos de software úteis.",
    description:
      "SaaS, produtos web e ferramentas digitais para uso profissional ou pessoal. Products é menos experimental que Labs e menos orientada a infraestrutura que Systems.",
    color: "#00C896",
    colorSoft: "#85FFDE",
    motif: "Camadas / módulos / software entregue",
    mark: "/brand/divisions/products.svg",
    markName: "Product Stack",
    tone: "Útil, acessível, modular e rápida.",
    keywords: ["produto", "workflow", "usabilidade"],
  },
  {
    slug: "systems",
    name: "Systems",
    focus: "Software industrial e operacional",
    role: "Conectar telemetria, operação e decisões em sistemas técnicos confiáveis.",
    description:
      "Software industrial, monitoramento, telemetria, integração, incidentes e apoio à decisão para ambientes operacionais onde confiabilidade e visibilidade importam.",
    color: "#3F73FF",
    colorSoft: "#A8BDFF",
    motif: "Sinal / trilho / fluxo sincronizado",
    mark: "/brand/divisions/systems.svg",
    markName: "Signal Rail",
    tone: "Técnica, confiável, densa e controlada.",
    keywords: ["telemetria", "integração", "confiabilidade"],
  },
  {
    slug: "engineering",
    name: "Engineering",
    focus: "Hardware, IoT e computação física",
    role: "Dar uma interface física ao software.",
    description:
      "Sistemas embarcados, IoT, dispositivos, robótica, wearables e protótipos que conectam código a sensores, mecânica, ambientes e interação humana.",
    color: "#E99A55",
    colorSoft: "#F5C79D",
    motif: "Intertravamento / estrutura / material",
    mark: "/brand/divisions/engineering.svg",
    markName: "Interlock",
    tone: "Estrutural, tátil, deliberada e robusta.",
    keywords: ["hardware", "embarcados", "físico"],
  },
  {
    slug: "interactive",
    name: "Interactive",
    focus: "Jogos e experiências digitais",
    role: "Usar tecnologia como meio de expressão, não apenas como infraestrutura.",
    description:
      "Jogos e experiências interativas em que mecânica, ritmo, atmosfera, arte e narrativa podem ter o mesmo peso da tecnologia por trás deles.",
    color: "#FFD200",
    colorSoft: "#FFF0A3",
    motif: "Input / resposta / pixel play",
    mark: "/brand/divisions/interactive.svg",
    markName: "Dual Input",
    tone: "Lúdica, autoral, responsiva e claramente interativa.",
    keywords: ["jogo", "experiência", "play"],
  },
];

export const projects: Project[] = [
  {
    slug: "illume",
    name: "Illume",
    divisionSlug: "intelligence",
    category: "Assistente de IA",
    tagline: "Uma inteligência local que vive com o computador em vez de ficar presa a uma aba do navegador.",
    description:
      "Assistente local-first para Windows explorando voz, contexto, documentos, automação nativa controlada, permissões e modelos locais.",
    status: "Em desenvolvimento",
    href: "https://github.com/PHenriquen/Noa",
    mark: "/brand/projects/illume.svg",
    accent: "#00D6FF",
  },
  {
    slug: "nodi",
    name: "Nodi",
    divisionSlug: "products",
    category: "SaaS",
    tagline: "Guardar o contexto e a evolução por trás do trabalho, não só a lista de tarefas.",
    description:
      "Workspace de projetos centrado em decisões, marcos, referências, histórico e narrativa pública do projeto.",
    status: "MVP",
    href: "https://github.com/PHenriquen/Nodi",
    mark: "/brand/projects/nodi.svg",
    accent: "#00C896",
  },
  {
    slug: "sincrohub",
    name: "SincroHub",
    divisionSlug: "systems",
    category: "Plataforma industrial",
    tagline: "Sinais operacionais viram estado, incidentes e ação.",
    description:
      "Plataforma de operações industriais para telemetria, monitoramento, regras, incidentes, integração e visibilidade técnica em tempo real.",
    status: "Em desenvolvimento",
    href: "https://github.com/PHenriquen/SincroHub",
    mark: "/brand/projects/sincrohub.svg",
    accent: "#3F73FF",
  },
  {
    slug: "manopla",
    name: "DEXTR",
    divisionSlug: "engineering",
    category: "Wearable / Embarcados",
    tagline: "Uma interface física de controle construída com firmware embarcado, mecânica e interação.",
    description:
      "Nome de trabalho do protótipo atual da Manopla Inteligente: um conceito de wearable baseado em ESP32, combinando firmware embarcado, protocolo serial binário, mecânica digital e futura validação física.",
    status: "Nome provisório · Protótipo",
    href: "https://github.com/PHenriquen/Manopla-Inteligente",
    mark: "/brand/projects/manopla.svg",
    accent: "#E99A55",
  },
  {
    slug: "requiem",
    name: "Réquiem",
    divisionSlug: "interactive",
    category: "Jogo",
    tagline: "Ritmo, memória e combate dentro de um mundo dark fantasy silencioso.",
    description:
      "Roguelite de ação rítmica em pré-produção, construído em torno de cadência, solidão, narrativa em camadas e um loop de combate rejogável de alta habilidade.",
    status: "Pré-produção",
    href: "https://github.com/PHenriquen/Game-R-quiem",
    mark: "/brand/projects/requiem.svg",
    accent: "#C64659",
  },
];

export function getDivision(slug: string) {
  return divisions.find((division) => division.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
