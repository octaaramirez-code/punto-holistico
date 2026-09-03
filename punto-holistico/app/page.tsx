'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  profile, socials as socialsData, bio, quote, trayectoria, areas,
  identidad, convergencia, projects, closingLine, contactBody,
} from './content'

// ── Reveal ────────────────────────────────────────────────────────────────────

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal${inView ? ' in' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

// ── Icons ─────────────────────────────────────────────────────────────────────

const ic = 'w-[18px] h-[18px]'
const InstagramIcon = () => <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" /></svg>
const YoutubeIcon = () => <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="2" y="5" width="20" height="14" rx="4" /><path d="M10 9.5v5l4.5-2.5z" fill="currentColor" stroke="none" /></svg>
const TiktokIcon = () => <svg className={ic} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M14.5 2h3c.2 1.7 1.4 3.3 3 3.9.7.3 1.5.4 2.5.4v3.1c-1.7 0-3.3-.5-4.7-1.4v7.3c0 3.7-3 6.7-6.7 6.7S5 18.6 5 14.9s3-6.7 6.6-6.7c.4 0 .7 0 1 .1v3.2c-.3-.1-.6-.2-1-.2-1.9 0-3.5 1.6-3.5 3.6s1.6 3.6 3.5 3.6 3.6-1.5 3.7-3.5V2z" /></svg>
const MailIcon = () => <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
const WhatsappIcon = () => <svg className={ic} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.47 1.29 4.93L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.09c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.11.11-1.79-.11-.41-.13-.94-.31-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.15-1.53-1.15-2.92 0-1.39.72-2.07.98-2.35.26-.28.56-.35.75-.35h.54c.17 0 .4-.06.63.48.24.56.8 1.95.87 2.09.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.19-.28.37-.23.63-.14.26.09 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.36z" /></svg>
const Arrow = ({ c = 'w-3.5 h-3.5' }: { c?: string }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M7 17L17 7M7 7h10v10" /></svg>

const iconMap = { instagram: InstagramIcon, youtube: YoutubeIcon, tiktok: TiktokIcon, mail: MailIcon, whatsapp: WhatsappIcon }
const socials = socialsData.map((s) => ({ ...s, Icon: iconMap[s.icon] }))

// ── Section shell ─────────────────────────────────────────────────────────────

function Section({ id, n, title, children }: { id: string; n: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="rule py-16 md:py-24">
      <div className="grid md:grid-cols-[200px_1fr] gap-y-6 gap-x-10">
        <div>
          <Reveal>
            <p className="idx md:sticky md:top-28">{n} — {title}</p>
          </Reveal>
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const ids = ['perfil', 'trayectoria', 'proyectos', 'contacto']
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!els.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting)
        if (vis.length) setActive(vis[0].target.id)
      },
      { rootMargin: '-72px 0px -65% 0px', threshold: 0 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const navItems = [
    { id: 'perfil', label: 'Perfil' },
    { id: 'trayectoria', label: 'Trayectoria' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' },
  ]

  return (
    <div className="min-h-[100dvh] relative overflow-hidden">
      {/* Nav */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{
          borderColor: 'var(--border)',
          backgroundColor: 'color-mix(in srgb, var(--bg) 90%, transparent)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        <div className="max-w-[1180px] mx-auto px-6 h-20 flex items-center justify-between gap-6">
          <a href="#" className="serif text-[16px] font-medium tracking-[0.01em]">Punto Holístico Consciente</a>
          <div className="hidden md:flex items-center gap-7 text-[13.5px] tracking-[0.04em] uppercase font-medium">
            {navItems.map((n) => (
              <a key={n.id} href={`#${n.id}`} className={`dim${active === n.id ? ' nav-on' : ''}`}>{n.label}</a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-[1180px] mx-auto px-6 relative">

        {/* ── Hero ── */}
        <section className="relative pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden">
          <div className="deco-circle hidden md:block" style={{ width: 620, height: 620, top: -220, right: -220 }} />
          <div className="deco-circle hidden md:block" style={{ width: 420, height: 420, top: -80, right: 40, borderColor: 'color-mix(in srgb, var(--terracotta) 35%, transparent)' }} />

          <div className="grid md:grid-cols-[340px_1fr] gap-10 md:gap-16 items-center relative">
            <div className="rise order-2 md:order-1">
              <div className="overflow-hidden rounded-lg relative" style={{ boxShadow: '0 30px 60px -20px rgba(36,28,17,.35)' }}>
                <Image
                  src={profile.portrait}
                  alt={profile.name}
                  width={548}
                  height={768}
                  priority
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="rise order-1 md:order-2" style={{ animationDelay: '70ms' }}>
              <p className="label mb-5">{profile.role} — {profile.project}</p>

              <h1 className="name mb-7">{profile.name}</h1>

              <p className="quote max-w-[640px] mb-10">&ldquo;{profile.tagline}&rdquo;</p>

              <div className="flex flex-wrap items-center gap-3 mb-9">
                <a href={profile.phones[0].whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-solid">Escribir por WhatsApp</a>
                <a href={socials[0].href} target="_blank" rel="noopener noreferrer" className="btn">Ver en Instagram</a>
              </div>

              <div className="flex items-center gap-5">
                {socials.map((s) => (
                  <a key={s.label} href={s.href}
                    target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer" aria-label={s.label} className="dim">
                    <s.Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 01 Perfil ── */}
        <Section id="perfil" n="01" title="Perfil">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10">
            <div className="space-y-5 max-w-[62ch]" style={{ color: 'var(--gray)' }}>
              {bio.map((p, i) => <Reveal key={i} delay={i * 60}><p className="text-[17px] leading-[1.7]">{p}</p></Reveal>)}
            </div>
            <Reveal delay={100}>
              <blockquote className="quote card px-7 py-8" style={{ borderLeft: '3px solid var(--terracotta)' }}>
                &ldquo;{quote}&rdquo;
              </blockquote>
            </Reveal>
          </div>
        </Section>

        {/* ── 02 Trayectoria y formación ── */}
        <Section id="trayectoria" n="02" title="Trayectoria y formación">
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-1">
            {trayectoria.map((item, i) => (
              <Reveal key={item.area} delay={(i % 5) * 45}>
                <div className="rule row-hover py-5">
                  <p className="h-card mb-1.5">{item.area}</p>
                  <p className="text-[15px] leading-[1.6]" style={{ color: 'var(--gray)' }}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ── Identidad ── */}
        <section id="identidad" className="rule py-16 md:py-24 relative overflow-hidden">
          <div className="deco-circle hidden md:block" style={{ width: 380, height: 380, bottom: -160, left: -160, borderColor: 'color-mix(in srgb, var(--gold) 35%, transparent)' }} />
          <Reveal>
            <p className="label mb-4">{identidad.eyebrow}</p>
            <h2 className="h-section mb-3">{identidad.title}</h2>
            <p className="lead mb-8 max-w-[62ch]">{identidad.subtitle}</p>
            <p className="text-[17px] leading-[1.75] max-w-[68ch]" style={{ color: 'var(--gray)' }}>{identidad.text}</p>
          </Reveal>
        </section>

        {/* ── Áreas de interés ── */}
        <Section id="areas" n="03" title="Áreas de interés">
          <div className="grid md:grid-cols-2 gap-5">
            {areas.map((a, i) => (
              <Reveal key={a.t} delay={(i % 4) * 45}>
                <div className="card px-6 py-6 h-full">
                  <p className="h-card mb-2">{a.t}</p>
                  <p className="text-[15px] leading-[1.6]" style={{ color: 'var(--gray)' }}>{a.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ── Convergencia ── */}
        <section className="rule py-16 md:py-24">
          <Reveal>
            <p className="label mb-4">{convergencia.eyebrow}</p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {convergencia.campos.map((c, i) => (
                <span key={c} className="tag" style={{ borderColor: 'var(--terracotta)', color: 'var(--ink)' }}>
                  {c}{i < convergencia.campos.length - 1 ? '' : ''}
                </span>
              ))}
            </div>
            <p className="text-[17px] leading-[1.75] max-w-[68ch]" style={{ color: 'var(--gray)' }}>{convergencia.text}</p>
          </Reveal>
        </section>

        {/* ── 04 Proyectos ── */}
        <Section id="proyectos" n="04" title="Proyectos">
          <div className="space-y-6">
            {projects.map((pj, i) => (
              <Reveal key={pj.name} delay={i * 70}>
                <div className="card px-7 py-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
                    <h3 className="h-section" style={{ fontSize: 28 }}>{pj.name}</h3>
                    <span className="meta whitespace-nowrap">{pj.role}</span>
                  </div>
                  <p className="text-[16px] leading-[1.7] max-w-[62ch] mb-6" style={{ color: 'var(--gray)' }}>
                    {pj.d}
                  </p>
                  <a href={pj.href} target="_blank" rel="noopener noreferrer" className="u inline-flex items-center gap-1.5 text-[15px]">
                    {pj.cta} <Arrow c="w-3.5 h-3.5" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ── Closing line ── */}
        <section className="rule py-16 md:py-20 text-center">
          <Reveal>
            <p className="serif italic" style={{ fontSize: 'clamp(24px, 3.4vw, 40px)', color: 'var(--ink)' }}>{closingLine}</p>
          </Reveal>
        </section>

        {/* ── 05 Contacto ── */}
        <Section id="contacto" n="05" title="Contacto">
          <Reveal>
            <p className="lead max-w-[60ch] mb-10">{contactBody}</p>

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 mb-10">
              <div className="rule py-4">
                <p className="meta mb-1.5">Email</p>
                <a href={`mailto:${profile.email}`} className="u text-[17px]">{profile.email}</a>
              </div>
              {profile.phones.map((ph) => (
                <div key={ph.country} className="rule py-4">
                  <p className="meta mb-1.5">WhatsApp — {ph.country}</p>
                  <a href={ph.whatsapp} target="_blank" rel="noopener noreferrer" className="u text-[17px]">{ph.display}</a>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              {socials.map((s) => (
                <a key={s.label} href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer" aria-label={s.label} className="dim inline-flex items-center gap-2 text-[14.5px]">
                  <s.Icon /> {s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </Section>

      </main>

      <footer className="border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-[1180px] mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-3">
          <span className="meta">© {new Date().getFullYear()} {profile.name.toUpperCase()}</span>
          <span className="meta">{profile.locationShort}</span>
        </div>
      </footer>
    </div>
  )
}
