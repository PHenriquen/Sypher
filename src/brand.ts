export type Division = {
  slug: string;
  name: string;
  focus: string;
  description: string;
  color: string;
  motif: string;
};

export type Project = {
  name: string;
  division: string;
  category: string;
  description: string;
  status: string;
  href: string;
};

export const divisions: Division[] = [
  {
    slug: "labs",
    name: "Labs",
    focus: "Research & experiments",
    description: "Exploratory research, prototypes and ideas that are still earning the right to become products.",
    color: "#8C7BFF",
    motif: "Orbit / field",
  },
  {
    slug: "intelligence",
    name: "Intelligence",
    focus: "AI & intelligent automation",
    description: "Assistants, agents, voice, context and intelligent systems designed to act with clear boundaries.",
    color: "#43CFFF",
    motif: "Core / halo",
  },
  {
    slug: "products",
    name: "Products",
    focus: "SaaS & digital tools",
    description: "Focused software products built around real workflows, useful interfaces and durable product thinking.",
    color: "#52D9AE",
    motif: "Modules / grid",
  },
  {
    slug: "systems",
    name: "Systems",
    focus: "Industrial & operational software",
    description: "Monitoring, telemetry, integration and decision-support systems for technical and operational environments.",
    color: "#3973FF",
    motif: "Hub / signal",
  },
  {
    slug: "engineering",
    name: "Engineering",
    focus: "Hardware & physical computing",
    description: "IoT, embedded systems, devices, robotics and prototypes that connect software to the physical world.",
    color: "#E99A55",
    motif: "Interlock / structure",
  },
  {
    slug: "interactive",
    name: "Interactive",
    focus: "Games & digital experiences",
    description: "Games and interactive work where technology, atmosphere, mechanics and narrative can carry equal weight.",
    color: "#E05268",
    motif: "Echo / sigil",
  },
];

export const projects: Project[] = [
  {
    name: "Illume",
    division: "Intelligence",
    category: "AI Assistant",
    description: "A local-first Windows assistant exploring voice, context, automation, privacy and controlled native actions.",
    status: "Active development",
    href: "https://github.com/PHenriquen/Noa",
  },
  {
    name: "Nodi",
    division: "Products",
    category: "SaaS",
    description: "A project workspace focused on preserving decisions, milestones, context and the evolution behind the work.",
    status: "MVP",
    href: "https://github.com/PHenriquen/Nodi",
  },
  {
    name: "SincroHub",
    division: "Systems",
    category: "Industrial Platform",
    description: "An operations platform for telemetry, monitoring, incidents, rules and real-time technical visibility.",
    status: "Active development",
    href: "https://github.com/PHenriquen/SincroHub",
  },
  {
    name: "Manopla Inteligente",
    division: "Engineering",
    category: "Hardware + Software",
    description: "An embedded-device project combining ESP32 firmware, serial protocols, digital mechanics and physical interaction.",
    status: "Prototype",
    href: "https://github.com/PHenriquen/Manopla-Inteligente",
  },
  {
    name: "Réquiem",
    division: "Interactive",
    category: "Game",
    description: "A dark rhythm-action roguelite concept built around solitude, memory, combat, cadence and layered narrative.",
    status: "Pre-production",
    href: "https://github.com/PHenriquen/Game-R-quiem",
  },
];
