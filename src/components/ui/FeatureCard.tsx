import type { FeatureItem } from '../../types/content'
import { Icon } from '../icons/Icon'

export function FeatureCard({ feature }: { feature: FeatureItem }) {
  return (
    <article className="feature-card">
      <div className="feature-card__header">
        <span className="feature-card__number">{feature.number}</span>
        <span className="feature-card__icon"><Icon name={feature.icon} /></span>
      </div>
      <h3>{feature.title}</h3>
      <p className="feature-card__situation">{feature.situation}</p>
      <p>{feature.description}</p>
      {feature.tags && (
        <div className="tag-list" aria-label="적용 조건">
          {feature.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
      )}
    </article>
  )
}
