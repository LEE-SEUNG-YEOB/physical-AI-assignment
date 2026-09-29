import type { ReactNode } from 'react'
import { RevealOnScroll } from '../ui/RevealOnScroll'

interface PageHeroProps {
  eyebrow: string
  titleLines: readonly string[]
  description: string
  visual: ReactNode
  tone?: 'light' | 'cream' | 'dark'
}

export function PageHero({ eyebrow, titleLines, description, visual, tone = 'light' }: PageHeroProps) {
  return (
    <section className={`page-hero page-hero--${tone}`} aria-labelledby="page-title">
      <div className="container page-hero__grid">
        <RevealOnScroll className="page-hero__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="page-title" tabIndex={-1}>
            {titleLines.map((line) => <span className="title-line" key={line}>{line}</span>)}
          </h1>
          <p>{description}</p>
        </RevealOnScroll>
        <RevealOnScroll className="page-hero__visual" delay={100}>
          {visual}
        </RevealOnScroll>
      </div>
    </section>
  )
}
