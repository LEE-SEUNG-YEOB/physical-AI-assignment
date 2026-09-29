import type { TechnologyItem } from '../../types/content'
import { Icon } from '../icons/Icon'

export function TechnologyCard({ technology }: { technology: TechnologyItem }) {
  return (
    <article className="technology-card">
      <span className="technology-card__icon"><Icon name={technology.icon} /></span>
      <p className="technology-card__eyebrow">{technology.eyebrow}</p>
      <h3>{technology.title}</h3>
      <p>{technology.description}</p>
    </article>
  )
}
