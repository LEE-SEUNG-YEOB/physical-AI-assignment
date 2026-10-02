import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li' | 'article'
}

export function RevealOnScroll({ children, className = '', delay = 0, as = 'div' }: RevealOnScrollProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [ready] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window,
  )
  const [visible, setVisible] = useState(!ready)

  useEffect(() => {
    const element = ref.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!element || reduceMotion || !ready) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [ready])

  const sharedProps = {
    ref: (node: HTMLElement | null) => { ref.current = node },
    className: `reveal ${visible ? 'is-visible' : ''} ${className}`.trim(),
    'data-ready': ready || undefined,
    style: { '--reveal-delay': `${delay}ms` } as CSSProperties,
  }

  if (as === 'li') return <li {...sharedProps}>{children}</li>
  if (as === 'article') return <article {...sharedProps}>{children}</article>
  return <div {...sharedProps}>{children}</div>
}
