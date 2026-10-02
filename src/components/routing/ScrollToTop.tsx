import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const pageMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: '모두길 | 서비스 소개',
    description: '주변과 통과 조건을 살펴 목적지 이동을 돕는 자율주행 스마트휠체어 모두길의 서비스 제안을 소개합니다.',
  },
  '/features': {
    title: '모두길 | 주요 기능',
    description: '장애물 인식, 통과 가능성 판단, 접근성 경로, 재탐색과 안전 정지 기능을 설명합니다.',
  },
  '/journey': {
    title: '모두길 | 서비스 이용 과정',
    description: '탑승 확인부터 공사 우회와 접근 가능한 입구 앞 도착까지 모두길의 이용 과정을 살펴봅니다.',
  },
  '/technology': {
    title: '모두길 | 핵심 기술',
    description: '센서, 지도, 안전 제어, 외부 정보와 유선 충전이 이동 판단에 어떻게 쓰이는지 설명합니다.',
  },
  '/difference': {
    title: '모두길 | 차별점과 운영 모델',
    description: '가까운 길보다 실제로 도착할 수 있는 길을 선택하는 모두길의 차별점과 운영 모델을 설명합니다.',
  },
  '/impact': {
    title: '모두길 | 기대 효과',
    description: '휠체어 이용자, 활동보조인과 시설 운영자에게 기대하는 이동 경험의 변화를 설명합니다.',
  },
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const previousPath = useRef(pathname)

  useEffect(() => {
    const pathChanged = previousPath.current !== pathname
    previousPath.current = pathname
    const metadata = pageMetadata[pathname] ?? pageMetadata['/']
    document.title = metadata.title
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', metadata.description)

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
