import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigationItems } from '../../data/content'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null)
  const location = useLocation()

  useEffect(() => {
    if (isOpen) firstMobileLinkRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

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
        <Link className="brand" to="/" aria-label="모두길 서비스 소개로">
          <span className="brand__mark" aria-hidden="true">M</span>
          <span><strong>모두길</strong><small>MODUGIL</small></span>
        </Link>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navigationItems.map((item) => (
            <NavLink
              to={item.path}
              end={item.end}
              key={item.path}
            >
              {item.label}
            </NavLink>
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
          <NavLink
            ref={index === 0 ? firstMobileLinkRef : undefined}
            to={item.path}
            end={item.end}
            onClick={() => {
              setIsOpen(false)
              requestAnimationFrame(() => menuButtonRef.current?.focus())
            }}
            key={item.path}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
