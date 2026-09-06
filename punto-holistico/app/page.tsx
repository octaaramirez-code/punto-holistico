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
const TiktokIcon = () => <svg className={ic} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M14.5 2h3c.2 1.7 1.4 3.3 3 3.9.7.3 1.5.4 2.5.4v3.1c-1.7
