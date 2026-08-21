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
  strapline: "Technology · Engineering · Research",
  headline: "Build systems. Create products. Explore beyond software.",
  description:
    "Sypher is a technology company in formation built around proprietary products, applied research and the connection between software and the physical world.",
  principle:
    "One parent brand. Distinct disciplines. Products keep their own personality while inheriting a shared standard for engineering, clarity and experimentation.",
};

export const founderUrl = "https://website-kohl-six-11.vercel.app/";

export const divisions: Division[] = [
  {
    slug: "labs",
    name: "Labs",
    focus: "Research & experimental R&D",
    role: "Incubate what is not ready to become a product yet.",
    description:
      "Exploratory research, prototypes, technical studies and experiments. Labs is the protected space for ideas to be tested before they are assigned to a product division.",
    color: "#8C6BFF",
    colorSoft: "#C6B8FF",
    motif: "Specimen / measurement / open field",
    mark: "/brand/divisions/labs.svg",
    markName: "Specimen Frame",
    tone: "Curious, precise, unfinished by design.",
    keywords: ["research", "prototype", "discovery"],
  },
  {
    slug: "intelligence",
    name: "Intelligence",
    focus: "AI & intelligent automation",
    role: "Build intelligence that can understand context and act within clear boundaries.",
    description:
      "Assistants, agents, voice, contextual systems and intelligent automation. The division prioritizes local control, explainable actions and useful integration over AI as spectacle.",
    color: "#43D7FF",
    colorSoft: "#A7EEFF",
    motif: "Core / lens / controlled light",
    mark: "/brand/divisions/intelligence.svg",
    markName: "Core Lens",
    tone: "Clear, calm, luminous and exact.",
    keywords: ["intelligence", "context", "automation"],
  },
  {
    slug: "products",
    name: "Products",
    focus: "SaaS & digital products",
    role: "Turn focused workflows into useful software products.",
    description:
      "Consumer and professional SaaS, web products and digital tools. Products is deliberately less experimental than Labs and less infrastructure-oriented than Systems.",
    color: "#38D6A4",
    colorSoft: "#A8F0D8",
    motif: "Modules / composition / interface",
    mark: "/brand/divisions/products.svg",
    markName: "Module Field",
    tone: "Useful, approachable, modular and fast.",
    keywords: ["product", "workflow", "usability"],
  },
  {
    slug: "systems",
    name: "Systems",
    focus: "Industrial & operational software",
    role: "Connect telemetry, operations and decisions into reliable technical systems.",
    description:
      "Industrial software, monitoring, telemetry, integration, incidents and decision support for operational environments where reliability and visibility matter.",
    color: "#3F73FF",
    colorSoft: "#A8BDFF",
    motif: "Signal / rail / synchronized flow",
    mark: "/brand/divisions/systems.svg",
    markName: "Signal Rail",
    tone: "Technical, dependable, dense and controlled.",
    keywords: ["telemetry", "integration", "reliability"],
  },
  {
    slug: "engineering",
    name: "Engineering",
    focus: "Hardware, IoT & physical computing",
    role: "Give software a physical interface.",
    description:
      "Embedded systems, IoT, devices, robotics, wearable concepts and prototypes that connect code to sensors, mechanics, environments and human interaction.",
    color: "#E99A55",
    colorSoft: "#F5C79D",
    motif: "Interlock / structure / material",
    mark: "/brand/divisions/engineering.svg",
    markName: "Interlock",
    tone: "Structural, tactile, deliberate and robust.",
    keywords: ["hardware", "embedded", "physical"],
  },
  {
    slug: "interactive",
    name: "Interactive",
    focus: "Games & digital experiences",
    role: "Use technology as an expressive medium, not only as infrastructure.",
    description:
      "Games and interactive experiences where mechanics, rhythm, atmosphere, art and narrative are allowed to carry as much weight as the underlying technology.",
    color: "#E05268",
    colorSoft: "#F3A6B2",
    motif: "Echo / beat / sigil",
    mark: "/brand/divisions/interactive.svg",
    markName: "Echo Gate",
    tone: "Expressive, atmospheric, authored and emotional.",
    keywords: ["game", "experience", "expression"],
  },
];

export const projects: Project[] = [
  {
    slug: "illume",
    name: "Illume",
    divisionSlug: "intelligence",
    category: "AI Assistant",
    tagline: "A local intelligence that lives with the computer instead of behind a browser tab.",
    description:
      "A local-first Windows assistant exploring voice, context, documents, controlled native automation, permissions and local models.",
    status: "Active development",
    href: "https://github.com/PHenriquen/Noa",
    mark: "/brand/projects/illume.svg",
    accent: "#43D7FF",
  },
  {
    slug: "nodi",
    name: "Nodi",
    divisionSlug: "products",
    category: "SaaS",
    tagline: "Keep the context and evolution behind the work, not only the task list.",
    description:
      "A project workspace centered on decisions, milestones, references, history and public project storytelling.",
    status: "MVP",
    href: "https://github.com/PHenriquen/Nodi",
    mark: "/brand/projects/nodi.svg",
    accent: "#38D6A4",
  },
  {
    slug: "sincrohub",
    name: "SincroHub",
    divisionSlug: "systems",
    category: "Industrial Platform",
    tagline: "Operational signals become state, incidents and action.",
    description:
      "An industrial operations platform for telemetry, monitoring, rules, incidents, integration and real-time technical visibility.",
    status: "Active development",
    href: "https://github.com/PHenriquen/SincroHub",
    mark: "/brand/projects/sincrohub.svg",
    accent: "#3F73FF",
  },
  {
    slug: "manopla",
    name: "Manopla Inteligente",
    divisionSlug: "engineering",
    category: "Hardware + Software",
    tagline: "A physical interface built from embedded firmware, mechanics and interaction.",
    description:
      "An ESP32-based device project combining embedded firmware, a binary serial protocol, digital mechanics and future physical validation.",
    status: "Prototype",
    href: "https://github.com/PHenriquen/Manopla-Inteligente",
    mark: "/brand/projects/manopla.svg",
    accent: "#E99A55",
  },
  {
    slug: "requiem",
    name: "Réquiem",
    divisionSlug: "interactive",
    category: "Game",
    tagline: "Rhythm, memory and combat inside a quiet dark-fantasy world.",
    description:
      "A dark rhythm-action roguelite in pre-production, built around cadence, solitude, layered narrative and a high-skill replayable combat loop.",
    status: "Pre-production",
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
