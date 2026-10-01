import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const pageTitles: Record<string, string> = {
  '/': '모두길 | 서비스 소개',
  '/features': '모두길 | 주요 기능',
  '/journey': '모두길 | 서비스 이용 과정',
  '/technology': '모두길 | 핵심 기술',
  '/difference': '모두길 | 차별점과 운영 모델',
  '/impact': '모두길 | 기대 효과',
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const previousPath = useRef(pathname)

  useEffect(() => {
    const pathChanged = previousPath.current !== pathname
    previousPath.current = pathname
    document.title = pageTitles[pathname] ?? '모두길 | Physical AI 자율주행 스마트휠체어'

    requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(hash.slice(1))
        target?.scrollIntoView()
        target?.querySelector<HTMLElement>('h1, h2')?.focus({ preventScroll: true })
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' })
        if (pathChanged) {
          const pageHeading = document.querySelector<HTMLElement>('main h1')
          pageHeading?.focus({ preventScroll: true })
        }
      }
    })
  }, [hash, pathname])

  return null
}
