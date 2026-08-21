'use client';

import { useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiBars3, HiOutlineXMark } from 'react-icons/hi2';
import { company, divisions, projects, founderLinks } from '../brand';

const navItems = [
  { label: 'Company', href: '#company' },
  { label: 'Divisions', href: '#divisions' },
  { label: 'Projects', href: '#projects' },
  { label: 'Labs', href: '/divisions/labs' },
  { label: 'Founder', href: '/founder' },
];

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1] as const },
};

function rgba(hex: string, alpha: number) {
  const clean = hex.replace('#', '');
  const value = Number.parseInt(clean, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function titleClass(slug: string) {
  if (slug === 'interactive') return 'template-interactive-title';
  if (slug === 'labs') return 'template-labs-title';
  return '';
}

function BrandMark({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} className={className} />;
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-black/[0.07] bg-white/85 px-4 py-3 shadow-[0_12px_45px_rgba(20,24,32,.07)] backdrop-blur-xl md:px-5">
        <Link href="/" className="flex items-center gap-3" aria-label="Sypher home">
          <BrandMark src="/brand/sypher.svg" alt="" className="h-8 w-8 rounded-lg" />
          <div className="flex flex-col leading-none">
            <span className="text-[13px] font-extrabold tracking-[.24em] text-[#111216]">SYPHER</span>
            <span className="mt-1 text-[8px] uppercase tracking-[.17em] text-[#90949c]">Technology company</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="rounded-full px-3 py-2 text-[12px] font-medium text-[#676c75] transition hover:bg-[#f3f4f6] hover:text-[#111216]">
              {item.label}
            </Link>
          ))}
          <Link href="/brand" className="ml-2 rounded-full bg-[#111216] px-4 py-2.5 text-[11px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black">
            Brand system
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full bg-[#111216] text-white md:hidden"
        >
          {open ? <HiOutlineXMark className="h-5 w-5" /> : <HiBars3 className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="mx-auto mt-2 max-w-6xl rounded-2xl border border-black/[0.07] bg-white p-3 shadow-card md:hidden"
        >
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-[#363941] hover:bg-[#f5f6f8]">
              {item.label}
            </Link>
          ))}
          <Link href="/brand" onClick={() => setOpen(false)} className="mt-1 block rounded-xl bg-[#111216] px-4 py-3 text-sm font-semibold text-white">
            Brand system
          </Link>
        </motion.div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="company" className="relative overflow-hidden px-5 pb-0 pt-36 md:pt-44">
      <div className="template-grid-bg absolute inset-x-0 top-0 -z-10 h-[760px]" />
      <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#5f6fff]/10 blur-3xl" />

      <div className="mx-auto max-w-5xl text-center">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.07] bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#686d76] shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#111216]" />
            Technology · Engineering · Research
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="mx-auto mt-7 max-w-5xl text-balance text-[48px] font-extrabold leading-[.96] tracking-[-.055em] text-[#111216] sm:text-[64px] md:text-[78px] lg:text-[92px]"
        >
          Build the technology.<br />
          <span className="text-[#8b9099]">Keep the point of view.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="mx-auto mt-7 max-w-2xl text-balance text-[15px] leading-7 text-[#666b74] md:text-[17px]"
        >
          {company.description} Software comes first, but the architecture is intentionally broad enough for AI, hardware, industrial systems, games and experimental R&amp;D.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a href="#projects" className="inline-flex min-w-44 items-center justify-center gap-3 rounded-full bg-[#111216] px-6 py-3.5 text-[12px] font-semibold text-white shadow-[0_12px_30px_rgba(17,18,22,.16)] transition hover:-translate-y-0.5 hover:bg-black">
            Explore projects <span>↘</span>
          </a>
          <Link href="/brand" className="inline-flex min-w-44 items-center justify-center rounded-full border border-black/[0.09] bg-white px-6 py-3.5 text-[12px] font-semibold text-[#22252a] transition hover:-translate-y-0.5 hover:border-black/[0.16]">
            View brand system
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative mx-auto mt-14 max-w-6xl px-0 md:mt-18"
      >
        <div className="overflow-hidden rounded-t-[30px] border border-black/[0.08] bg-white shadow-template">
          <div className="flex h-12 items-center justify-between border-b border-black/[0.06] px-4 md:px-5">
            <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#ff6b66]" /><span className="h-2.5 w-2.5 rounded-full bg-[#f5bf4d]" /><span className="h-2.5 w-2.5 rounded-full bg-[#62c554]" /></div>
            <span className="text-[9px] font-semibold uppercase tracking-[.16em] text-[#a0a4ab]">Sypher / brand hub</span>
            <span className="rounded-full bg-[#f4f5f7] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[.12em] text-[#767b84]">In formation</span>
          </div>

          <div className="grid min-h-[470px] lg:grid-cols-[210px_1fr]">
            <aside className="hidden border-r border-black/[0.06] bg-[#fafafb] p-5 lg:block">
              <p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#a1a5ac]">Divisions</p>
              <div className="mt-5 space-y-2">
                {divisions.map((division) => (
                  <Link key={division.slug} href={`/divisions/${division.slug}`} className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-white hover:shadow-sm">
                    <span className="grid h-8 w-8 place-items-center rounded-lg" style={{ background: rgba(division.color, .11) }}>
                      <BrandMark src={division.mark} alt="" className="h-6 w-6 rounded-md" />
                    </span>
                    <span className="text-[11px] font-semibold text-[#41454c]">{division.name}</span>
                  </Link>
                ))}
              </div>
            </aside>

            <div className="relative overflow-hidden p-5 sm:p-7 md:p-10">
              <div className="template-noise absolute inset-0 opacity-30" />
              <div className="relative grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[.18em] text-[#9aa0aa]">Parent identity</span>
                  <div className="mt-5 flex items-center gap-5">
                    <div className="grid h-24 w-24 place-items-center rounded-3xl bg-[#111216] shadow-[0_18px_45px_rgba(17,18,22,.20)] md:h-28 md:w-28">
                      <BrandMark src="/brand/sypher.svg" alt="Sypher" className="h-20 w-20 md:h-24 md:w-24" />
                    </div>
                    <div className="text-left">
                      <p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#111216]">Sypher</p>
                      <p className="mt-2 max-w-xs text-[12px] leading-5 text-[#747982]">One parent brand. Distinct disciplines. Products keep their own identity.</p>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {divisions.map((division) => (
                      <div key={division.slug} className="rounded-2xl border border-black/[0.06] bg-white/85 p-3 shadow-sm">
                        <div className="flex items-center justify-between">
                          <span className="h-2 w-2 rounded-full" style={{ background: division.color }} />
                          <span className="text-[8px] uppercase tracking-[.14em] text-[#a2a6ad]">{division.slug.slice(0, 3)}</span>
                        </div>
                        <p className={`mt-4 text-[11px] font-bold text-[#25282d] ${titleClass(division.slug)}`}>{division.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-black/[0.06] bg-[#111216] p-5 text-white shadow-[0_22px_60px_rgba(17,18,22,.18)] md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[8px] uppercase tracking-[.16em] text-white/45">Selected work</span>
                      <p className="mt-1 text-[13px] font-semibold">Current portfolio</p>
                    </div>
                    <span className="text-[10px] text-white/45">{String(projects.length).padStart(2, '0')} projects</span>
                  </div>
                  <div className="mt-5 space-y-2">
                    {projects.slice(0, 4).map((project) => (
                      <Link key={project.slug} href={`/projects/${project.slug}`} className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.04] p-3 transition hover:bg-white/[0.08]">
                        <BrandMark src={project.mark} alt="" className="h-9 w-9 rounded-xl" />
                        <div className="min-w-0 flex-1 text-left">
                          <p className="truncate text-[11px] font-semibold">{project.name}</p>
                          <p className="mt-0.5 truncate text-[9px] text-white/45">{project.category}</p>
                        </div>
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
    <section id="divisions" className="border-y border-black/[0.06] bg-white px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-black/[0.06] sm:grid-cols-3 lg:grid-cols-6">
        {divisions.map((division) => (
          <Link key={division.slug} href={`/divisions/${division.slug}`} className="group flex min-h-32 flex-col items-center justify-center gap-3 px-3 py-6 text-center transition hover:bg-[#fafafb]">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition group-hover:-translate-y-1" style={{ background: rgba(division.color, .10) }}>
              <BrandMark src={division.mark} alt={`${division.name} mark`} className="h-9 w-9 rounded-xl" />
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-[.12em] text-[#5d626b] ${titleClass(division.slug)}`}>{division.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#9a9fa7]">{eyebrow}</span>
      <h2 className="mt-4 text-balance text-[36px] font-extrabold leading-[1.03] tracking-[-.045em] text-[#111216] sm:text-[46px] md:text-[56px]">{title}</h2>
      <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-[#6d727b] md:text-[15px]">{description}</p>
    </div>
  );
}

function Architecture() {
  const pairs = [
    [divisions.find((item) => item.slug === 'intelligence')!, divisions.find((item) => item.slug === 'products')!],
    [divisions.find((item) => item.slug === 'systems')!, divisions.find((item) => item.slug === 'engineering')!],
    [divisions.find((item) => item.slug === 'labs')!, divisions.find((item) => item.slug === 'interactive')!],
  ];

  return (
    <section className="bg-[#f7f8fb] px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Company architecture"
          title="Different disciplines. One standard."
          description="The Finwise-style structure gives every Sypher division room to breathe instead of forcing all of them into one dense dashboard. Each pair gets its own visual space, color behavior and technical purpose."
        />

        <div className="space-y-8 md:space-y-12">
          {pairs.map((pair, index) => (
            <motion.div key={pair[0].slug} {...reveal} className={`grid overflow-hidden rounded-[30px] border border-black/[0.07] bg-white shadow-[0_18px_60px_rgba(20,24,32,.06)] lg:grid-cols-2 ${index % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div className="flex min-h-[390px] flex-col justify-center p-8 md:p-12 lg:p-14">
                <span className="text-[9px] font-bold uppercase tracking-[.18em] text-[#9a9fa7]">0{index + 1} / Sypher divisions</span>
                <h3 className="mt-5 max-w-md text-[34px] font-extrabold leading-[1.05] tracking-[-.04em] text-[#111216] md:text-[44px]">
                  {pair[0].name} <span className="text-[#a0a4ab]">×</span> {pair[1].name}
                </h3>
                <p className="mt-5 max-w-lg text-[14px] leading-7 text-[#6e737c]">{pair[0].role} {pair[1].role}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {[...pair[0].keywords, ...pair[1].keywords].map((keyword) => (
                    <span key={keyword} className="rounded-full border border-black/[0.07] bg-[#f7f8fa] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.12em] text-[#747981]">{keyword}</span>
                  ))}
                </div>
                <div className="mt-8 flex gap-3">
                  <Link href={`/divisions/${pair[0].slug}`} className="text-[11px] font-bold text-[#111216]">Open {pair[0].name} ↗</Link>
                  <span className="text-[#c1c4c9]">/</span>
                  <Link href={`/divisions/${pair[1].slug}`} className="text-[11px] font-bold text-[#111216]">Open {pair[1].name} ↗</Link>
                </div>
              </div>

              <div className="relative min-h-[390px] overflow-hidden bg-[#f1f2f5] p-7 md:p-10">
                <div className="template-grid-bg absolute inset-0 opacity-60" />
                <div className="relative grid h-full grid-cols-2 gap-4">
                  {pair.map((division) => (
                    <Link
                      href={`/divisions/${division.slug}`}
                      key={division.slug}
                      className="group flex flex-col justify-between overflow-hidden rounded-[24px] border border-black/[0.06] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-card"
                    >
                      <div className="flex items-center justify-between">
                        <span className="h-2 w-2 rounded-full" style={{ background: division.color }} />
                        <span className="text-[8px] uppercase tracking-[.14em] text-[#aaaeb5]">Sypher</span>
                      </div>
                      <div className="flex flex-1 items-center justify-center py-6">
                        <div className="grid h-28 w-28 place-items-center rounded-[28px]" style={{ background: rgba(division.color, .11), boxShadow: `0 18px 50px ${rgba(division.color, .13)}` }}>
                          <BrandMark src={division.mark} alt={`${division.name} mark`} className="h-20 w-20 rounded-2xl transition duration-300 group-hover:scale-105" />
                        </div>
                      </div>
                      <div>
                        <h4 className={`text-[19px] font-extrabold text-[#22252b] ${titleClass(division.slug)}`}>{division.name}</h4>
                        <p className="mt-1 text-[10px] leading-5 text-[#858a93]">{division.focus}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectGrid() {
  return (
    <section id="projects" className="bg-white px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="The company is only as real as what it builds."
          description="Projects keep their own names, marks and personalities. Sypher is the endorsement behind them, not a skin pasted on top."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const division = divisions.find((item) => item.slug === project.divisionSlug)!;
            return (
              <motion.div key={project.slug} {...reveal} transition={{ ...reveal.transition, delay: Math.min(index * .05, .2) }}>
                <Link href={`/projects/${project.slug}`} className="group flex min-h-[350px] flex-col overflow-hidden rounded-[26px] border border-black/[0.07] bg-[#fafafb] p-5 transition duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-card">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.14em] text-[#8d929b]"><i className="h-1.5 w-1.5 rounded-full" style={{ background: division.color }} />{division.name}</span>
                    <span className="rounded-full border border-black/[0.06] bg-white px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[.1em] text-[#8a8f98]">{project.status}</span>
                  </div>

                  <div className="relative mt-5 grid flex-1 place-items-center overflow-hidden rounded-[22px] border border-black/[0.05] bg-white">
                    <div className="template-grid-bg absolute inset-0 opacity-55" />
                    <div className="relative grid h-28 w-28 place-items-center rounded-[30px] transition duration-300 group-hover:scale-105" style={{ background: rgba(project.accent, .10), boxShadow: `0 18px 55px ${rgba(project.accent, .12)}` }}>
                      <BrandMark src={project.mark} alt={`${project.name} mark`} className="h-20 w-20 rounded-2xl" />
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-[9px] font-bold uppercase tracking-[.14em]" style={{ color: project.accent }}>{project.category}</p>
                    <div className="mt-1 flex items-end justify-between gap-5">
                      <div>
                        <h3 className="text-[25px] font-extrabold tracking-[-.035em] text-[#202329]">{project.name}</h3>
                        <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-[#7b8089]">{project.tagline}</p>
                      </div>
                      <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-[#111216] text-[12px] text-white transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}

          <motion.div {...reveal} className="flex min-h-[350px] flex-col justify-between rounded-[26px] bg-[#111216] p-7 text-white shadow-[0_20px_60px_rgba(17,18,22,.15)]">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[.17em] text-white/45">Working model</span>
              <h3 className="mt-5 text-[32px] font-extrabold leading-[1.02] tracking-[-.04em]">Research.<br />Build.<br /><span className="text-white/45">Graduate.</span></h3>
            </div>
            <p className="text-[11px] leading-6 text-white/55">Ideas can begin in Labs, mature into a division and eventually become a product with its own identity. The structure is designed to evolve instead of being rewritten every year.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-black/[0.06] bg-[#f7f8fb] px-5 py-16">
      <div className="mx-auto grid max-w-6xl gap-8 text-center sm:grid-cols-3">
        <div><strong className="text-[40px] font-extrabold tracking-[-.05em] text-[#111216]">{String(divisions.length).padStart(2, '0')}</strong><p className="mt-1 text-[9px] font-bold uppercase tracking-[.16em] text-[#8e939b]">Divisions</p></div>
        <div><strong className="text-[40px] font-extrabold tracking-[-.05em] text-[#111216]">{String(projects.length).padStart(2, '0')}</strong><p className="mt-1 text-[9px] font-bold uppercase tracking-[.16em] text-[#8e939b]">Current projects</p></div>
        <div><strong className="text-[40px] font-extrabold tracking-[-.05em] text-[#111216]">01</strong><p className="mt-1 text-[9px] font-bold uppercase tracking-[.16em] text-[#8e939b]">Parent standard</p></div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-white px-5 py-24 md:py-32">
      <motion.div {...reveal} className="relative mx-auto max-w-6xl overflow-hidden rounded-[34px] bg-[#111216] px-7 py-16 text-center text-white shadow-[0_28px_90px_rgba(17,18,22,.22)] md:px-14 md:py-24">
        <div className="template-grid-bg absolute inset-0 opacity-[.08] invert" />
        <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-[#7280ff]/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <BrandMark src="/brand/sypher.svg" alt="Sypher" className="mx-auto h-16 w-16" />
          <span className="mt-7 block text-[9px] font-bold uppercase tracking-[.18em] text-white/45">Sypher / Direction</span>
          <h2 className="mt-4 text-balance text-[38px] font-extrabold leading-[1.03] tracking-[-.05em] sm:text-[48px] md:text-[60px]">Start with software.<br /><span className="text-white/45">Earn the right to expand.</span></h2>
          <p className="mx-auto mt-6 max-w-xl text-[13px] leading-7 text-white/55">The website is a living brand hub for the company, its divisions and the products that come out of them.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/brand" className="rounded-full bg-white px-6 py-3.5 text-[11px] font-bold text-[#111216] transition hover:-translate-y-0.5">Open brand system</Link>
            <a href={founderLinks.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-6 py-3.5 text-[11px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.06]">GitHub ↗</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-[#f7f8fb] px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <BrandMark src="/brand/sypher.svg" alt="" className="h-8 w-8 rounded-lg" />
          <div><p className="text-[11px] font-extrabold tracking-[.20em] text-[#111216]">SYPHER</p><p className="mt-1 text-[9px] text-[#8d929a]">Technology company in formation.</p></div>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-semibold text-[#6f747d]">
          <Link href="/brand">Brand</Link><Link href="/founder">Founder</Link><Link href="/after-hours">After Hours</Link><a href={founderLinks.portfolio} target="_blank" rel="noreferrer">Portfolio ↗</a><a href={founderLinks.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
    </footer>
  );
}

export default function FinwiseSypherHome() {
  return (
    <main className="finwise-sypher min-h-screen overflow-hidden bg-[#f7f8fb] text-[#111216]">
      <Header />
      <Hero />
      <DivisionRail />
      <Architecture />
      <ProjectGrid />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
