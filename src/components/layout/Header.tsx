import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { navigationItems } from '../../data/content'
import { useActiveSection } from '../../hooks/useActiveSection'

const sectionIds = navigationItems.map((item) => item.id)

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    if (isOpen) firstMobileLinkRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const onResize = () => {
      if (window.innerWidth >= 960) setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [isOpen])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#intro" aria-label="모두길 처음으로">
          <span className="brand__mark" aria-hidden="true">M</span>
          <span><strong>모두길</strong><small>MODUGIL</small></span>
        </a>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navigationItems.map((item) => (
            <a
              href={`#${item.id}`}
              aria-current={activeId === item.id ? 'location' : undefined}
              key={item.id}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav id="mobile-navigation" className="mobile-nav" aria-label="모바일 주요 메뉴" hidden={!isOpen}>
        {navigationItems.map((item, index) => (
          <a
            ref={index === 0 ? firstMobileLinkRef : undefined}
            href={`#${item.id}`}
            aria-current={activeId === item.id ? 'location' : undefined}
            onClick={() => {
              setIsOpen(false)
              requestAnimationFrame(() => menuButtonRef.current?.focus())
            }}
            key={item.id}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
