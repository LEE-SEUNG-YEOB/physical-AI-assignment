import type { ReactNode } from 'react'
import { Icon } from '../icons/Icon'
import type { IconName } from '../../types/content'

interface InfoCardProps {
  icon?: IconName
  number?: string
  title: string
  description: string
  meta?: string
  children?: ReactNode
  inverse?: boolean
}

export function InfoCard({ icon, number, title, description, meta, children, inverse = false }: InfoCardProps) {
  return (
    <article className={`info-card ${inverse ? 'info-card--inverse' : ''}`}>
      <div className="info-card__top">
        {number && <span className="info-card__number">{number}</span>}
        {icon && <span className="info-card__icon"><Icon name={icon} /></span>}
      </div>
      {meta && <p className="info-card__meta">{meta}</p>}
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </article>
  )
}
