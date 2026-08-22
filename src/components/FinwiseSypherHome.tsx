'use client';

import { useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiBars3, HiOutlineXMark } from 'react-icons/hi2';
import { company, divisions, projects } from '../brand';

const navItems = [
  { label: 'Empresa', href: '#empresa' },
  { label: 'Divisões', href: '#divisoes' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Labs', href: '/divisions/labs' },
  { label: 'Fundador', href: '/founder' },
];

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-70px' },
  transition: { duration: 0.58, ease: [0.2, 0.8, 0.2, 1] as const },
};

function rgba(hex: string, alpha: number) {
  const clean = hex.replace('#', '');
  const value = Number.parseInt(clean, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function BrandMark({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} className={className} />;
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-black/[0.07] bg-white/90 px-4 py-3 shadow-[0_12px_45px_rgba(20,24,32,.07)] backdrop-blur-xl md:px-5">
        <Link href="/" className="flex items-center gap-3" aria-label="Página inicial da Sypher">
          <BrandMark src="/brand/sypher.svg" alt="" className="h-8 w-8 rounded-lg" />
          <div className="flex flex-col leading-none">
            <span className="text-[13px] font-extrabold tracking-[.24em] text-[#111216]">SYPHER</span>
            <span className="mt-1 text-[8px] uppercase tracking-[.17em] text-[#90949c]">Tecnologia · Engenharia · Pesquisa</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="rounded-full px-3 py-2 text-[12px] font-medium text-[#676c75] transition hover:bg-[#f3f4f6] hover:text-[#111216]">
              {item.label}
            </Link>
          ))}
          <Link href="/brand" className="ml-2 rounded-full bg-[#111216] px-4 py-2.5 text-[11px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black">
            Sistema de marca
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Abrir navegação"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full bg-[#111216] text-white md:hidden"
        >
          {open ? <HiOutlineXMark className="h-5 w-5" /> : <HiBars3 className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -8, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="mx-auto mt-2 max-w-6xl rounded-2xl border border-black/[0.07] bg-white p-3 shadow-card md:hidden">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-[#363941] hover:bg-[#f5f6f8]">
              {item.label}
            </Link>
          ))}
          <Link href="/brand" onClick={() => setOpen(false)} className="mt-1 block rounded-xl bg-[#111216] px-4 py-3 text-sm font-semibold text-white">
            Sistema de marca
          </Link>
        </motion.div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="empresa" className="relative overflow-hidden px-5 pb-0 pt-36 md:pt-44">
      <div className="template-grid-bg absolute inset-x-0 top-0 -z-10 h-[780px]" />
      <div className="absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#5967ff]/10 blur-3xl" />

      <div className="mx-auto max-w-5xl text-center">
        <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} className="inline-flex items-center gap-2 rounded-full border border-black/[0.07] bg-white/85 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#686d76] shadow-sm backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-[#111216]" />
          Empresa independente de tecnologia
        </motion.span>

        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .05 }} className="mx-auto mt-7 max-w-5xl text-balance text-[49px] font-extrabold leading-[.96] tracking-[-.055em] text-[#111216] sm:text-[64px] md:text-[80px] lg:text-[94px]">
          Tecnologia com<br />
          <span className="text-[#8b9099]">visão própria.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .12 }} className="mx-auto mt-7 max-w-2xl text-balance text-[15px] leading-7 text-[#666b74] md:text-[17px]">
          {company.description} Começamos por software, IA e automação, mas a arquitetura foi feita para crescer até hardware, sistemas industriais, experiências interativas e pesquisa aplicada.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .18 }} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#projetos" className="inline-flex min-w-44 items-center justify-center gap-3 rounded-full bg-[#111216] px-6 py-3.5 text-[12px] font-semibold text-white shadow-[0_12px_30px_rgba(17,18,22,.16)] transition hover:-translate-y-0.5 hover:bg-black">
            Explorar projetos <span>↘</span>
          </a>
          <Link href="/brand" className="inline-flex min-w-44 items-center justify-center rounded-full border border-black/[0.09] bg-white px-6 py-3.5 text-[12px] font-semibold text-[#22252a] transition hover:-translate-y-0.5 hover:border-black/[0.16]">
            Ver sistema de marca
          </Link>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 50, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .8, delay: .2, ease: [0.2, 0.8, 0.2, 1] }} className="relative mx-auto mt-14 max-w-6xl md:mt-18">
        <div className="overflow-hidden rounded-t-[30px] border border-black/[0.08] bg-white shadow-template">
          <div className="flex h-12 items-center justify-between border-b border-black/[0.06] px-4 md:px-5">
            <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#ff6b66]" /><span className="h-2.5 w-2.5 rounded-full bg-[#f5bf4d]" /><span className="h-2.5 w-2.5 rounded-full bg-[#62c554]" /></div>
            <span className="text-[9px] font-semibold uppercase tracking-[.16em] text-[#a0a4ab]">Sypher / ecossistema</span>
            <span className="rounded-full bg-[#f4f5f7] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[.12em] text-[#767b84]">Em formação</span>
          </div>

          <div className="grid min-h-[500px] lg:grid-cols-[220px_1fr]">
            <aside className="hidden border-r border-black/[0.06] bg-[#fafafb] p-5 lg:block">
              <p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#a1a5ac]">Divisões</p>
              <div className="mt-5 space-y-2">
                {divisions.map((division) => (
                  <Link key={division.slug} href={`/divisions/${division.slug}`} className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-white hover:shadow-sm">
                    <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-xl" style={{ background: rgba(division.color, .10) }}>
                      <BrandMark src={division.mark} alt={`Símbolo da Sypher ${division.name}`} className="h-8 w-8" />
                    </span>
                    <span className="text-[11px] font-semibold text-[#41454c]">{division.name}</span>
                  </Link>
                ))}
              </div>
            </aside>

            <div className="relative overflow-hidden p-5 sm:p-7 md:p-10">
              <div className="template-noise absolute inset-0 opacity-25" />
              <div className="relative grid gap-7 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[.18em] text-[#9aa0aa]">Marca-mãe</span>
                  <div className="mt-5 flex items-center gap-5">
                    <div className="grid h-24 w-24 place-items-center rounded-3xl bg-[#111216] shadow-[0_18px_45px_rgba(17,18,22,.20)] md:h-28 md:w-28">
                      <BrandMark src="/brand/sypher.svg" alt="Sypher" className="h-20 w-20 md:h-24 md:w-24" />
                    </div>
                    <div className="text-left">
                      <p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#111216]">Sypher</p>
                      <p className="mt-2 max-w-xs text-[12px] leading-5 text-[#747982]">Uma marca central. Divisões com personalidade própria. Produtos com autonomia visual.</p>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {divisions.map((division) => (
                      <Link key={division.slug} href={`/divisions/${division.slug}`} className="group rounded-2xl border border-black/[0.06] bg-white/90 p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-card">
                        <div className="flex items-center justify-between">
                          <BrandMark src={division.mark} alt="" className="h-9 w-9" />
                          <span className="h-2 w-2 rounded-full" style={{ background: division.color }} />
                        </div>
                        <p className="mt-4 text-[11px] font-bold text-[#25282d]">{division.name}</p>
                        <p className="mt-1 text-[8px] leading-4 text-[#979ba2]">{division.focus}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-black/[0.06] bg-[#111216] p-5 text-white shadow-[0_22px_60px_rgba(17,18,22,.18)] md:p-6">
                  <div className="flex items-center justify-between">
                    <div><span className="text-[8px] uppercase tracking-[.16em] text-white/45">Projetos em destaque</span><p className="mt-1 text-[13px] font-semibold">Trabalho atual</p></div>
                    <span className="text-[10px] text-white/45">{String(projects.length).padStart(2, '0')} projetos</span>
                  </div>
                  <div className="mt-5 space-y-2">
                    {projects.map((project) => (
                      <Link key={project.slug} href={`/projects/${project.slug}`} className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.04] p-3 transition hover:bg-white/[0.08]">
                        <BrandMark src={project.mark} alt="" className="h-10 w-10 rounded-xl" />
                        <div className="min-w-0 flex-1 text-left"><p className="truncate text-[11px] font-semibold">{project.name}</p><p className="mt-0.5 truncate text-[9px] text-white/45">{project.category}</p></div>
                        <span className="text-[10px] text-white/35">↗</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function DivisionRail() {
  return (
    <section id="divisoes" className="border-y border-black/[0.06] bg-white px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-black/[0.06] sm:grid-cols-3 lg:grid-cols-6">
        {divisions.map((division) => (
          <Link key={division.slug} href={`/divisions/${division.slug}`} className="group flex min-h-36 flex-col items-center justify-center gap-3 px-3 py-6 text-center transition hover:bg-[#fafafb]">
            <span className="grid h-16 w-16 place-items-center overflow-hidden rounded-2xl transition group-hover:-translate-y-1 group-hover:shadow-card" style={{ background: rgba(division.color, .09) }}>
              <BrandMark src={division.mark} alt={`Logo Sypher ${division.name}`} className="h-14 w-14" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[.12em] text-[#5d626b]">{division.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto mb-12 grid max-w-6xl gap-5 lg:grid-cols-[1fr_420px] lg:items-end">
      <div><p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#999da5]">{eyebrow}</p><h2 className="mt-3 max-w-3xl text-[40px] font-extrabold leading-[1.02] tracking-[-.045em] text-[#15171b] md:text-[58px]">{title}</h2></div>
      <p className="max-w-md text-[13px] leading-6 text-[#737881] lg:justify-self-end">{description}</p>
    </div>
  );
}

function DivisionStories() {
  return (
    <section className="bg-[#f7f8fa] px-5 py-24 md:py-32">
      <SectionHeading eyebrow="01 / Arquitetura" title="Cada divisão deve parecer um mundo próprio." description="A família visual vem da disciplina da Sypher. A personalidade vem de cor, tipografia, textura, ritmo e comportamento específicos para cada domínio." />
      <div className="mx-auto max-w-6xl space-y-5">
        {divisions.map((division, index) => (
          <motion.div key={division.slug} {...reveal}>
            <Link href={`/divisions/${division.slug}`} className={`division-preview division-preview-${division.slug} group grid min-h-[330px] overflow-hidden rounded-[30px] border border-black/[0.07] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-template lg:grid-cols-[.9fr_1.1fr] ${index % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`} style={{ '--division': division.color } as CSSProperties}>
              <div className="flex flex-col justify-between p-7 md:p-10">
                <div><span className="text-[9px] font-bold uppercase tracking-[.18em] text-[#9a9ea6]">Sypher / {String(index + 1).padStart(2, '0')}</span><h3 className="mt-4 text-[38px] font-extrabold tracking-[-.04em] text-[#17191d] md:text-[52px]">{division.name}</h3><p className="mt-3 max-w-md text-[14px] leading-6 text-[#70757e]">{division.role}</p></div>
                <div className="mt-8 flex flex-wrap gap-2">{division.keywords.map((keyword) => <span key={keyword} className="rounded-full border border-black/[0.07] bg-white/70 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.11em] text-[#6f747d]">{keyword}</span>)}</div>
              </div>
              <div className="division-preview-art relative grid min-h-[260px] place-items-center overflow-hidden p-8">
                <div className="division-preview-grid absolute inset-0" />
                <div className="division-preview-orbit absolute h-52 w-52 rounded-full border" style={{ borderColor: rgba(division.color, .18) }} />
                <div className="division-preview-mark relative z-10 grid h-36 w-36 place-items-center rounded-[34px] border bg-white shadow-[0_30px_70px_rgba(0,0,0,.12)]" style={{ borderColor: rgba(division.color, .18), background: division.slug === 'interactive' ? '#fff' : rgba(division.color, .045) }}>
                  <BrandMark src={division.mark} alt={`Símbolo da Sypher ${division.name}`} className="h-28 w-28" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projetos" className="bg-white px-5 py-24 md:py-32">
      <SectionHeading eyebrow="02 / Trabalho atual" title="A marca ganha valor quando vira coisa real." description="Projetos mantêm nome, símbolo e voz próprios. A divisão funciona como linhagem técnica e endosso, não como uma embalagem que engole o produto." />
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
        {projects.map((project, index) => {
          const division = divisions.find((item) => item.slug === project.divisionSlug);
          return (
            <motion.div key={project.slug} {...reveal} transition={{ ...reveal.transition, delay: index * .04 }}>
              <Link href={`/projects/${project.slug}`} className="group flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[28px] border border-black/[0.07] bg-[#fafafb] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-template md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3"><BrandMark src={project.mark} alt={`Logo ${project.name}`} className="h-14 w-14 rounded-2xl" /><div><p className="text-[9px] font-bold uppercase tracking-[.15em] text-[#a0a4ac]">{division?.name}</p><p className="mt-1 text-[11px] font-semibold text-[#555a63]">{project.status}</p></div></div>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-black/[0.07] bg-white text-sm text-[#555a63] transition group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
                </div>
                <div className="mt-12"><p className="text-[10px] font-bold uppercase tracking-[.16em]" style={{ color: project.accent }}>{project.category}</p><h3 className="mt-2 text-[34px] font-extrabold tracking-[-.04em] text-[#17191d]">{project.name}</h3><p className="mt-3 max-w-lg text-[13px] leading-6 text-[#737881]">{project.tagline}</p></div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="bg-[#111216] px-5 py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_.7fr] lg:items-end">
        <motion.div {...reveal}><p className="text-[9px] font-bold uppercase tracking-[.18em] text-white/40">03 / Direção</p><h2 className="mt-4 max-w-3xl text-[44px] font-extrabold leading-[1.02] tracking-[-.05em] md:text-[66px]">Começar por software.<br /><span className="text-white/42">Ganhar o direito de expandir.</span></h2><p className="mt-6 max-w-xl text-[14px] leading-7 text-white/55">A Sypher foi pensada para evoluir sem precisar trocar de identidade sempre que um novo tipo de produto surgir.</p></motion.div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <Link href="/brand" className="flex items-center justify-between rounded-2xl border border-white/[.10] bg-white/[.04] p-5 text-[12px] font-semibold transition hover:bg-white/[.08]"><span>Sistema de marca</span><span>↗</span></Link>
          <Link href="/after-hours" className="flex items-center justify-between rounded-2xl border border-white/[.10] bg-white/[.04] p-5 text-[12px] font-semibold transition hover:bg-white/[.08]"><span>After Hours / lado pessoal</span><span>↗</span></Link>
        </div>
      </div>
      <div className="mx-auto mt-20 flex max-w-6xl flex-col justify-between gap-4 border-t border-white/[.08] pt-6 text-[9px] uppercase tracking-[.14em] text-white/35 sm:flex-row"><span>Sypher · Tecnologia · Engenharia · Pesquisa</span><span>Construída para evoluir.</span></div>
    </section>
  );
}

export default function FinwiseSypherHome() {
  return (
    <main className="template-home min-h-screen bg-white text-[#17191d]">
      <Header />
      <Hero />
      <DivisionRail />
      <DivisionStories />
      <Projects />
      <Closing />
    </main>
  );
}
