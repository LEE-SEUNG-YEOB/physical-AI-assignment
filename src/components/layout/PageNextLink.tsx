import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface PageNextLinkProps {
  titleLines: readonly string[]
  label: string
  to: string
}

export function PageNextLink({ titleLines, label, to }: PageNextLinkProps) {
  return (
    <aside className="page-next" aria-label="다음 페이지">
      <div className="container page-next__inner">
        <div>
          <p className="page-next__label">다음 페이지</p>
          <h2>{titleLines.map((line) => <span className="title-line" key={line}>{line}</span>)}</h2>
        </div>
        <Link className="page-next__link" to={to}>
          {label} <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </aside>
  )
}
