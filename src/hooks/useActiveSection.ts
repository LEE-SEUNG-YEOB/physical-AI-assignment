import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sections.length || !('IntersectionObserver' in window)) return

    const visible = new Map<string, IntersectionObserverEntry>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.set(entry.target.id, entry)
          else visible.delete(entry.target.id)
        })

        const current = [...visible.values()].sort((a, b) => {
          if (b.intersectionRatio !== a.intersectionRatio) {
            return b.intersectionRatio - a.intersectionRatio
          }
          return Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
        })[0]

        if (current) setActiveId(current.target.id)
      },
      { rootMargin: '-20% 0px -62% 0px', threshold: [0, 0.1, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
